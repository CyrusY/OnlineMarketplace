import React, { Component } from 'react';
import axios from 'axios';
import './edit-user.css';

export default class EditUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          user:{} ,
          displayName: '',
          description: ''
        }
      }
    
      getID (){
        let User = JSON.parse(localStorage.getItem('profile'));
        try {return User.result._id;}
        catch(error){
            console.log('Please sign in to enable function');
            window.location = '/login';
            alert('Please sign in to enable member function');
            return undefined;
        }
    }

    componentDidMount() {
        const userId = this.getID();
        axios.get(`http://localhost:5000/users/${userId}`)
          .then(res => {
            console.log(res.data)
            this.setState({ user: res.data });
          })
          .catch(error => { console.log(error);})
      }
    
    onChangeDisplayName(e) {
        this.setState({
            displayName: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    validate = () => {
        let displayNameError = "";

        var letterNumber = /^[0-9a-zA-Z]+$/;
        if (this.state.displayName.match(letterNumber)) {
            return true;
        }
        else
            displayNameError = "Display name cannot include symbol (eg. !@#$%^&*()_ etc.)"

        if (displayNameError) {
            this.setState({displayNameError});
        }
        return false;
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            displayName: this.state.displayName,
            description: this.state.description,
        }

        const isValid = this.validate();

        if(isValid) {
            const url = 'http://localhost:5000/users/update/';
            const id = this.state.user._id;
            console.log('testing: '+ this.state.user._id);
            axios.post(url + id, user)
            .then(res => console.log(res.data));
            alert('Your Account Infomation Updated!');

            /* clear form and error */
            this.setState({
                displayName: '',
                description: '',

                displayNameError: ''
            });
            // window.location = '/login';
        }
    }


render() {
    const { user } = this.state
    console.log("current user's id is:" + this.state.user._id)
    return (
        <div className="registration-container">
            <div className="main-area">
                <div className="form-container">
                <div style={{ fontSize: 16, color: 'BlackText' }}>
                    Hi {this.state.user.username}, Here is the current information <br/><br/>
                    Displayname: {this.state.user.displayName}<br/>
                    Description: {this.state.user.description}<br/>
                 </div>
                    <br/>
                    <form onSubmit={this.onSubmit}>
                        <div className="text-field">
                            <label htmlFor="user">Display Name</label>
                            <input type="text"
                                placeholder='New display Name'
                                className="form-control form-group"
                                value={this.state.displayName}
                                onChange={this.onChangeDisplayName}
                            />
                        </div>
                        <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                                    {this.state.displayNameError}
                                </div> 

                        <div className="bigtext-field">
                            <label htmlFor="user">Description</label>
                            <input type="text"
                                placeholder='New description'
                                className="form-control form-group"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                            />
                        </div>

                        <div className="button">
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
  }
}
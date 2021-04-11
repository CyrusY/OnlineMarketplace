import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './edit-user.css';

//Only Update User displayname and description
/* three problems now: 
1. textbox cant edit
2. cant update
3. get can depends on log-in user
*/

export default class EditUser extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          user:{}
        }

        this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

      }
    
    componentDidMount() {
        axios.get('http://localhost:5000/users/60519af6167898652cc47243')
          .then(res => {
            console.log(res)
            this.setState({ user: res.data });
          })
          .catch(error => { console.log(error) })
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
        let usernameError = "";
        let emailError = "";
        let passwordError1 = "";
        let passwordError2 = "";
        let passwordError3 = "";
        let passwordError4 = "";

        if (this.state.username.length <3) {
            usernameError = "Username need to be at least 3 characters long."
        }

        if (usernameError) {
            this.setState({usernameError});
            return false;
        }

        return true;
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            displayName: this.state.displayName,
            description: this.state.description,
        }

        const isValid = this.validate();

        if(isValid) {
            console.log(user);
            axios.post('http://localhost:5000/users/update/', user)
            .then(res => console.log(res.data));
            alert('Account Updated! Welcome, ' + this.state.displayName + '!');

            /* clear form and error */
            this.setState({
                displayName: '',
                description: '',


                usernameError: '',
                emailError: '',
                passwordError1: '',
                passwordError2: '',
                passwordError3: '',
                passwordError4: '',
                validPasswordError: ''
            });
            // window.location = '/login';
        }
    }

      

render() {
    const { user } = this.state
    console.log(this.state.user.username);
    return (
      <div className="registration-container">
                <div className="main-area">
                    <div className="form-container">
                        <form onSubmit={this.onSubmit}>

                            <div className="text-field">
                                <label htmlFor="user">Display Name</label>
                                <input type="text"
                                    required
                                    placeholder='Enter display Name'
                                    className="form-control form-group"
                                    value={this.state.user.username}
                                    onChange={this.onChangeDisplayName}
                                    // onChange={this.state.user.username}
                                />
                            </div>

                            <div className="bigtext-field">
                                <label htmlFor="user">Description</label>
                                <input type="text"
                                    required
                                    placeholder='Enter description'
                                    className="form-control form-group"
                                    value={this.state.user.description}
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
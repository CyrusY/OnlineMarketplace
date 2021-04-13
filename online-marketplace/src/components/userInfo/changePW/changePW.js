import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

/*
There are 2 things need to do:
1.Check the old password match the input old pw
2.valid new password
*/

export default class ChangePw extends Component {

  state = {
    isPasswordShown : false
  }

togglePasswordVisiblity = () =>{
    const {isPasswordShown} = this.state;
    this.setState({ isPasswordShown: ! isPasswordShown});
  }
  
  state = {
    isPasswordShown1 : false
  }

togglePasswordVisiblity1 = () =>{
    const {isPasswordShown1} = this.state;
    this.setState({ isPasswordShown1: ! isPasswordShown1});
  }

state = {
    isPasswordShown2 : false
  }

togglePasswordVisiblity2 = () =>{
    const {isPasswordShown2} = this.state;
    this.setState({ isPasswordShown2: ! isPasswordShown2});
  }
    
    constructor(props){
        super(props);

        this.state = {
            users:{},
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
            this.setState({ users: res.data });
          })
          .catch(error => { console.log(error);})
      }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeValidPassword(e) {
        this.setState({
            validPassword: e.target.value
        })
    }

    validate = () => {
      let passwordError1 = "";
      let passwordError2 = "";
      let passwordError3 = "";
      let passwordError4 = "";

      let validPasswordError = "";

      if (this.state.password.length < 8) {
          passwordError1 = "Passwords need to be at least 8 characters long."
      }
      if (! /\d/.test(this.state.password)) {
          passwordError2 = "Passwords need to contain a number."
      }
      if (! /[a-z]/.test(this.state.password)) {
          passwordError3 = "Passwords need to contain a lowercase letter."
      }
      if (! /[A-Z]/.test(this.state.password)) {
          passwordError4 = "Passwords need to contain a uppercase letter."
      }

      if (this.state.password !== this.state.validPassword) {
          validPasswordError = "Passwords do not match. Please re-enter it."
      }

      if (passwordError1||passwordError2||passwordError3||passwordError4||validPasswordError) {
          this.setState({passwordError1,passwordError2,passwordError3,passwordError4, validPasswordError});
          return false;
      }

      return true;
    }

    onSubmit(e) {
    e.preventDefault();

    const user = {
        username: this.state.username,
        displayName: this.state.displayName,
        email: this.state.email,
        password: this.state.password,
        validPassword: this.state.validPassword,
      }

    const isValid = this.validate();

    if(isValid) {
        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));
        alert('Account created! Welcome, ' + this.state.displayName + '!');

        /* clear form and error */
        this.setState({
            username: '',
            displayName: '',
            email: '',
            password: '',
            validPassword: '',

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
    // console.log(this.state.users.username + "| username")
    const {isPasswordShown} = this.state;
    const {isPasswordShown1} = this.state;
    const {isPasswordShown2} = this.state;

    return (
      <div className="registration-container">
      <div className="main-area">
          <div className="form-container">
              <form onSubmit={this.onSubmit}>

                  <div className="text-field">
                      <label htmlFor="user">Old Password</label>
                      <input type={(isPasswordShown)? "text" : "password"}
                          required
                          placeholder='Enter old password'
                          className="form-control form-group"
                          value={this.state.password}
                          onChange={this.onChangePassword}
                      />
                      <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                          {this.state.passwordError1}
                      </div> 
                      <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                          {this.state.passwordError2}
                      </div> 
                      <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                          {this.state.passwordError3}
                      </div> 
                      <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                          {this.state.passwordError4}
                      </div> 
                      <i className = {`fa ${isPasswordShown? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={this.togglePasswordVisiblity}/>
                  </div>

                  <div className="text-field">
                      <label htmlFor="user">New Password</label>
                      <input type={(isPasswordShown1)? "text" : "password"}
                          required
                          placeholder='Enter New Password'
                          className="form-control form-group"
                          value={this.state.password}
                          onChange={this.onChangePassword}
                      />
                      <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                          {this.state.passwordError1}
                      </div> 
                      <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                          {this.state.passwordError2}
                      </div> 
                      <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                          {this.state.passwordError3}
                      </div> 
                      <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                          {this.state.passwordError4}
                      </div> 
                      <i className = {`fa ${isPasswordShown1? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={this.togglePasswordVisiblity1}/>
                  </div>

                  <div className="text-field">
                      <label htmlFor="user">Re-type New Password</label>
                      <input type={(isPasswordShown2)? "text" : "password"}
                          required
                          placeholder='Re-type New Password'
                          className="form-control form-group"
                          value={this.state.validPassword}
                          onChange={this.onChangeValidPassword}
                      />
                      <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                          {this.state.validPasswordError}
                      </div> 
                  <i className = {`fa ${isPasswordShown2? "fa-eye-slash" : "fa-eye"} re-password-icon`} onClick={this.togglePasswordVisiblity2}/>
                  </div>

                  <div className="button">
                      <button type="submit">Change new password!</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
    );
  }
}
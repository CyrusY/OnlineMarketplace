import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import './registration.css';

export default class Registration extends Component {

    state = {
        isPasswordShown : false
    }

    togglePasswordVisiblity = () =>{
        const {isPasswordShown} = this.state;
        this.setState({ isPasswordShown: ! isPasswordShown});
    }
    
    state = {
        isPasswordShown2 : false
    }

    togglePasswordVisiblity2 = () =>{
        const {isPasswordShown2} = this.state;
        this.setState({ isPasswordShown2: ! isPasswordShown2});
    }
 

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeValidPassword = this.onChangeValidPassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
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
        }
    }

    onChangeDisplayName(e) {
        this.setState({
            displayName: e.target.value
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
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
        let usernameError = "";
        let emailError = "";
        let passwordError1 = "";
        let passwordError2 = "";
        let passwordError3 = "";
        let passwordError4 = "";

        let validPasswordError = "";

        function validateEmail(test) {
            const emailRegexp = /^[^ ]+@[^]+\.[a-z]{2,3}$/;
            if (test.match(emailRegexp))
                return true;
            else
                return false;
        }

        if (this.state.username.length <3) {
            usernameError = "Username need to be at least 3 characters long."
        }

        if (!validateEmail(this.state.email)) {
            emailError = 'invalid email format';
        }

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

        if (this.state.password != this.state.validPassword) {
            validPasswordError = "Passwords do not match. Please re-enter it."
        }

        if (usernameError||emailError||passwordError1||passwordError2||passwordError3||passwordError4||validPasswordError) {
            this.setState({usernameError, emailError,passwordError1,passwordError2,passwordError3,passwordError4, validPasswordError});
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
        const {isPasswordShown} = this.state;
        const {isPasswordShown2} = this.state;

        return (
            <div className="registration-container">
                <div className="main-area">
                    <div className="form-container">
                        <form onSubmit={this.onSubmit}>
                            <div className="text-field">
                                <label htmlFor="user">User Name</label>
                                <input type="text"
                                    required
                                    placeholder='Enter username'
                                    className="form-control form-group"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                />
                                <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                                    {this.state.usernameError}
                                </div> 
                            </div>

                            <div className="text-field">
                                <label htmlFor="user">Display Name</label>
                                <input type="text"
                                    required
                                    placeholder='Enter display Name'
                                    className="form-control form-group"
                                    value={this.state.displayName}
                                    onChange={this.onChangeDisplayName}
                                />
                            </div>

                            <div className="text-field">
                                <label htmlFor="user">Email</label>
                                <input type="text"
                                    required
                                    placeholder='Enter email'
                                    className="form-control form-group"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                />
                                <div style={{fontSize:12, color: "red", fontWeight: "bold"}}>
                                    {this.state.emailError}
                                </div> 
                            </div>

                            <div className="text-field">
                                <label htmlFor="user">Password</label>
                                <input type={(isPasswordShown)? "text" : "password"}
                                    required
                                    placeholder='Enter password'
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
                                <label htmlFor="user">Re-type Password</label>
                                <input type={(isPasswordShown2)? "text" : "password"}
                                    required
                                    placeholder='Re-type Password'
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
                                <button type="submit">Register</button>
                                <Link to="./login">Have an Account Already?</Link>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}
// onSubmit - click submit button
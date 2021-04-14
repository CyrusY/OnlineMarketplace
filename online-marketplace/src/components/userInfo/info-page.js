import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import userIcon from './user-icon.png';

export default class Info extends Component {
    
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
            this.setState({ users: res.data });
          })
          .catch(error => { console.log(error);})
      }

  render() {
    // console.log(this.state.users.username + "| username")
    return (
      <div>
        <img src= {userIcon} alt="User Icon"/><br />
        Name: {this.state.users.username} <br />
        display name: {this.state.users.displayName}<br />
        email: {this.state.users.email}<br />
        Description: {this.state.users.description}<br />
        Rating: {this.state.users.rating}<br />
        <div>
            <Link to={{pathname: `/edit`}} >
                Edit display name/description
            </Link>
            <span> </span>
            <Link to={{pathname: `/changePW`}} >
                Change Password
            </Link>
        </div>
      </div>      
    );
  }
}
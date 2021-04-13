import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ChangePw extends Component {
    
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

  render() {
    // console.log(this.state.users.username + "| username")
    return (
      <div>
        changePW
      </div>      
    );
  }
}
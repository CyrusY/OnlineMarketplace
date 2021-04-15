import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './info-page.css';
import userIcon from './user-icon.png';
import { Button } from '../button/button';

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
      <div className="info-container">
        <div className="main-area">
          <div className="form-container">
            <div className="icon-img">
              <img className="icon" src= {userIcon} alt="User Icon" />
            </div>
            <b>Name:</b> {this.state.users.username} <br />
            <b>Display name:</b> {this.state.users.displayName}<br />
            <b>Email:</b> {this.state.users.email}<br />
            <b>Description:</b> {this.state.users.description}<br />
            <b>Rating:</b> {this.state.users.rating}<br />

            <div className="button">
              <button>
                <Link to={{pathname: `/edit`}} >
                    Edit display name/ Description
                </Link>
              </button>
              <button>
                <Link to={{pathname: `/changePW`}} >
                    Change Password
                </Link>
              </button>
            </div>

            {/*
            <div className="button">
              <Button  onClick={<Link to={{pathname: `/edit`}} >
                </Link>}> Edit display name/ Description</Button>

              <Button  onClick={<Link to={{pathname: `/changePW`}} >
                </Link>}>Change Password</Button>
            </div> 
            */}

          </div>
        </div>
      </div>      
    );
  }
}
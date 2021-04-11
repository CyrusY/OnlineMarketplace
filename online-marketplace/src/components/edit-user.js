import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './edit-user.css';

//Only Update User displayname and description

export default class EditUser extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          user:{}
        }

      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/users/60519a60167898652cc4723e')
          .then(res => {
            console.log(res)
            this.setState({ user: res.data });
          })
          .catch(error => { console.log(error) })
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
                                    onChange={this.state.user.username}
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
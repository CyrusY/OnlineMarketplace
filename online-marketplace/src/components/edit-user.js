import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './edit-user.css';

//Only Update User displayname and description

export default class EditUser extends Component {

render() {
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
                                    //value={this.state.displayName}
                                    onChange={this.onChangeDisplayName}
                                />
                            </div>

                            <div className="bigtext-field">
                                <label htmlFor="user">Description</label>
                                <input type="text"
                                    required
                                    placeholder='Enter description'
                                    className="form-control form-group"
                                    //value={this.state.description}
                                    onChange={this.onChangeDescription}
                                />
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
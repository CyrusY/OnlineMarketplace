import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">User Info</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Registration</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Edit User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Upload Product</Link>
          </li>
          <li className="navbar-item">
          <Link to="/product" className="nav-link">Product List</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
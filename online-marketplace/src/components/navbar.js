import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-brand">Easy Trader</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Registration</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Edit Personal Information</Link>
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
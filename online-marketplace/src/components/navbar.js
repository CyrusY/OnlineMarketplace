import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const  Navbar = () => {
    return (
      <nav className="navbar">
        <h1>
        <Link to="/" className="navbar-brand">Easy Trader</Link>
        </h1>
        
        <div className="links">          
          <Link to="/user" className="nav-link">Registration</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/edit" className="nav-link">Edit Personal Information</Link>
          <Link to="/create" className="nav-link">Upload Product</Link>
          <Link to="/product" className="nav-link">Product List</Link>
        </div>
      </nav>
    );
 }

 export default Navbar;
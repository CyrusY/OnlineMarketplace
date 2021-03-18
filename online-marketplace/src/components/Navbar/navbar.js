import React, { Component } from 'react'; 
import {Button} from '../button/button';
import './navbar.css'

const MenuItems =[
  {
    title: 'Home',
    url: '/homepage.js',
    cName: 'nav-links'
  },
  {
    title: 'Login',
    url: '/login.js',
    cName: 'nav-links'
  },
  {
    title: 'Edit Personal Information',
    url: '/edit.js',
    cName: 'nav-links'
  },
  {
    title: 'Upload Product',
    url: 'create.js',
    cName: 'nav-links'
  }
]


class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
  }

  render() {
      return(
          <nav className="NavbarItems">
              <h1 className="navbar-logo">Easy Trade</h1>
              <div className="menu-icon" onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
              </div>
              <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  {MenuItems.map((item, index) => {
                      return (
                          <li key={index}>
                              <a className={item.cName} href={item.url}>
                              {item.title}
                              </a>
                          </li>
                      )
                  })}
              </ul>
              <Button>Sign Up</Button>
          </nav>
      )
  }
}

export default Navbar;
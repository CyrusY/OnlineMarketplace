import React, { Component } from 'react'; 
import {Button} from '../button/button';
import './navbar.css'
import '../login'



class Navbar extends Component {

  state = { clicked: false }
 


  handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
  }

  render(menuItem) {
      return(
          
          <nav className="NavbarItems">
              <h1 className="navbar-logo">Easy Trade</h1>
              <div className="menu-icon" onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
              </div>
              <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  {this.props.menuItem.map((item, index) => {
                      return (
                          <li key={index}>
                              <a className={item.cName} href={item.url}>
                              {item.title}
                              </a>
                          </li>
                      )
                  })}
              </ul>
              <form action="user">
                <Button>Sign Up </Button>
              </form>
             
          </nav>
      )
  }
}

export default Navbar;
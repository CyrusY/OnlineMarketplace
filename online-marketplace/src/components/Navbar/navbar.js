import React, { Component } from 'react'; 
import {Button} from '../button/button';
import './navbar.css'
import '../login'
<<<<<<< HEAD

=======
const MenuItemsAfterLogin =[
  {
    title: 'Home',
    url: 'homepage',
    cName: 'nav-links'
  },
  {
    title: 'Login',
    url: 'login',
    cName: 'nav-links'
  },
  {
    title: 'Edit Personal Information',
    url: 'edit',
    cName: 'nav-links'
  },
  {
    title: 'Upload Product',
    url: 'create',
    cName: 'nav-links'
  },
  {
    title: 'About Us',
    url: 'aboutus',
    cName: 'nav-links'
  },
  
  {
    title: 'Sign up',
    url: 'user',
    cName: 'nav-links-mobile'
}
]
>>>>>>> 4f3584c7f753c9db246d691ff6c06afd693562a1


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
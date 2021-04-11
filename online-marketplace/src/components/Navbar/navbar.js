import React, { useState, useEffect } from 'react';
import { Button } from '../button/button';
import './navbar.css'
import '../login/login'


const Navbar = ({ login, menuItem }) => {

    const [clicked, setClicked] = useState(false)

    return (

        <nav className={"NavbarItems"}>
            <a className="logohref" href={login ? "homepage" : "login"}><h1 className="navbar-logo">Easy Trade</h1></a>
            <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {menuItem.map((item, index) => {
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
                <Button>{login ? "Log out" : "Sign up"} </Button>
            </form>

        </nav>
    )

}

export default Navbar;
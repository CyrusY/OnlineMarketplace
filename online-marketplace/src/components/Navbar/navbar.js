import React, { useState, useEffect } from 'react';
import { Button } from '../button/button';
import './navbar.css'
import '../login/login'
import { Link,  useHistory,useLocation } from 'react-router-dom';
import { Typography, Toolbar } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from '../../redux/action/index';

const Navbar = ({ login, menuItem }) => {
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    const location = useLocation();
  
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/login');
        console.log("s2312312312313dsad")
        setUser(null);
    };

    const classes = useStyles();
    console.log(user);
    useEffect(() => {
        const token = user?.token;
    
        if (token) {
            const decodedToken = decode(token);
      
            if (decodedToken.exp * 1000 < new Date().getTime())
                logout();
        }
       
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
     
    return (
        <nav className={"NavbarItems"}>
            <a className="logohref" href={login ? "homepage" : "login"}><h1 className="navbar-logo">Easy Trade</h1></a>

            <h5 className="dsd" style={{ color: 'black' }} >{user? (  user?.result.username ): "Guest"}</h5> 
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
             {user? <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>{ 'Logout' }</Button>: <Button>{ "Sign up"} </Button> }
            
               
            </form>
        </nav>
    )
}

export default Navbar;
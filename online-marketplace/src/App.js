import React, { Component } from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar/navbar";
import Homepage from "./components/homepage/homepage";
import Info from "./components/userInfo/info-page";
import EditUser from "./components/userInfo/editUser/edit-user";
import ChangePw from "./components/userInfo/changePW/changePW";
import UploadProduct from "./components/uploadProduct/uploadP";
import Registration from "./components/registration/registration";
import Login from "./components/login/login";
import ActivationEmail from "./components/login/ActivationEmail";
import ProductList from "./components/productList/product-list";
import Product from "./components/productList/product/product-page";
import AboutUs from "./components/aboutus/about-us";

export default class App extends Component {
  login = true;

  MenuItemsBeforeLogin = [
    {
      title: 'Home',
      url: 'login',
      cName: 'nav-links'
    },
    {
      title: 'About us',
      url: 'aboutus',
      cName: 'nav-links'
    },
    {
      title: 'Sign up',
      url: 'user',
      cName: 'nav-links-mobile'
    },

  ]
  MenuItemsAfterLogin = [
    {
      title: 'Home',
      url: 'homepage',
      cName: 'nav-links'
    },
    {
      title: 'Edit Personal Information',
      url: 'edit',
      cName: 'nav-links'
    },
    {
      title: 'Upload Product',
      url: 'upload',
      cName: 'nav-links'
    },
    {
      title: 'Product List',
      url: 'product',
      cName: 'nav-links'
    },

    {
      title: 'Logout',
      url: 'user',
      cName: 'nav-links-mobile'
    },
  ]

  render() {

    return (
      <Router>
        <div className="App-container">
          <Navbar menuItem={this.login ? this.MenuItemsAfterLogin: this.MenuItemsBeforeLogin} login={this.login}
          />

          <div className="content">
            <Switch>
              <Route exact path="/" > <Login /> </Route>
              <Route exact path="/upload" > <UploadProduct /> </Route>
              <Route exact path="/user" > <Registration /> </Route>
              <Route exact path="/login" > <Login /> </Route>
              <Route exact path="/info" > <Info /> </Route>
              <Route exact path="/product" > <ProductList /> </Route>
              <Route exact path="/product/:id" > <Product /> </Route>
              <Route exact path="/edit" > <EditUser /> </Route>
              <Route exact path="/changePW" > <ChangePw /> </Route>
              <Route exact path="/aboutus"> <AboutUs /></Route>
              <Route exact path="/homepage"> <Homepage /></Route>
              <Route exact path="/:activation_token" > <ActivationEmail/> </Route>

            
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}




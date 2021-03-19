import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom"

import Navbar from "./components/Navbar/navbar";
import Homepage from "./components/homepage";
import EditUser from "./components/edit-user";
import UploadProduct from "./components/upload-product";
import Registration from "./components/registration";
import Login from "./components/login";
import ProductList from "./components/product-list";
import AboutUs from "./components/about-us";

function App() {
  const MenuItemsBeforeLogin =[
    {
      title: 'Home',
      url: 'homepage',
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
  }
  ]
  const MenuItemsAfterLogin =[
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
      url: 'create',
      cName: 'nav-links'
    },
    {
      title: 'Logout',
      url: 'user',
      cName: 'nav-links-mobile'
  }
  ]


  return (
    <Router>
      <div className="App">
        <Navbar menuItem={MenuItemsBeforeLogin} login={false} 
        />

        <div className="content">
          <Switch>
            <Route exact path="/" > <Homepage /> </Route> 
            <Route exact path="/create" > <UploadProduct /> </Route> 
            <Route exact path="/user" > <Registration /> </Route> 
            <Route exact path="/login" > <Login /> </Route> 
            <Route exact path="/product" > <ProductList /> </Route> 
            <Route exact path="/edit" > <EditUser /> </Route> 
            <Route exact path="/aboutus"> <AboutUs /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;



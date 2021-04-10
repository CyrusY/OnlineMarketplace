import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom"

import Navbar from "./components/Navbar/navbar";
import Homepage from "./components/homepage";
import EditUser from "./components/edit-user";
import UploadProduct from "./components/uploadProduct/uploadP";
import Registration from "./components/registration";
import Login from "./components/login/login";
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
            <Route exact path="/" > <Login /> </Route> 
            <Route exact path="/upload" > <UploadProduct /> </Route> 
            <Route exact path="/homgpage" > <Homepage /> </Route> 
            <Route exact path="/user" > <Registration /> </Route> 
            <Route exact path="/login" > <Login /> </Route> 
            <Route exact path="/product" > <ProductList /> </Route> 
            <Route exact path="/edit" > <EditUser /> </Route> 
            <Route exact path="/aboutus"> <AboutUs /></Route>
            <Route exact path="/homepage"> <Homepage /></Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;



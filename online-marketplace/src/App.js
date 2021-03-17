import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom"

import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import EditUser from "./components/edit-user";
import UploadProduct from "./components/upload-product";
import Registration from "./components/registration";
import Login from "./components/login";
import ProductList from "./components/product-list";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Homepage} />
      <Route path="/edit/:id" component={EditUser} />
      <Route path="/create" component={UploadProduct} />
      <Route path="/user" component={Registration} />
      <Route path="/login" component={Login} />
      <Route path="/product" component={ProductList} />
      </div>
    </Router>
  );
}

export default App;

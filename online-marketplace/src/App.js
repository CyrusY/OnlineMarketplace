import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom"

import Navbar from "./components/navbar";
import UserInfo from "./components/user-info";
import EditUser from "./components/edit-user";
import UploadProduct from "./components/upload-product";
import Registration from "./components/registration";
import ProductList from "./components/product-list";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={UserInfo} />
      <Route path="/edit/:id" component={EditUser} />
      <Route path="/create" component={UploadProduct} />
      <Route path="/user" component={Registration} />
      <Route path="/product" component={ProductList} />
      </div>
    </Router>
  );
}

export default App;

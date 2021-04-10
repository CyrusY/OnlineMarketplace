import React, { Component } from 'react';
import axios from 'axios';
import './product-list';
// import 'bootstrap/dist/css/bootstrap.min.css'

export default class ProductList extends Component {

  constructor(props){
    super(props)

    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(res => { console.log(res)
        this.setState({ products: res.data});
      })
      .catch (error => {console.log(error)})
  }

render() {
  const {products}=this.state 
    return (
      <div>
        All Product Name
        {
          products.length ?
          products.map( product =>
          <div key = {product._id}>
             {product.productName}</div>) : null
        }
      </div>
    );
  }
}
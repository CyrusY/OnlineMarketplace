import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import './product-list.css';
import Product from './product/product-page';


export default class ProductList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [],
      show: false,
      productId: '',
      productPage: null,

    }
    this.handleMouseDown = this.handleMouseDown.bind(this);
this.closeModelHandler = this.closeModelHandler.bind(this);

  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(error => { console.log(error) })
  }



  handleMouseDown(productId) {
    console.log("clicked");
    this.setState({ show: true,productId })

  }



  closeModelHandler(productId) {
    this.setState({ show: false })
  }

  timeSince(date) {
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  render() {
    const { products ,show} = this.state


    return (
      <div>
        <div className="product-list-container">
        {show ? < div onClick={this.closeModelHandler} className="back-drop"> </div> : ''}
          <div className="grid-contianer">
            {
              products.length ?
                products.map(product =>

                  <div className="card-container" key={product._id} onClick={() => this.handleMouseDown(product._id)}>
                    <div className="card-text-container">
                      <h1 id="pruductName">{product.productName}</h1>
                      <span id="price">HK${product.price}
                        <span id="id" className="tag">{product.condition}</span>
                      </span>
                      <div id="postDate">posted at: {this.timeSince(product.postDate)}</div>
                      {/* <div> {product.ownerId}</div> */}

                    </div>
                    <img id="image" src={`/uploads/${product.productPhoto}`} alt="..."></img>

                  </div>) : null
            }

          </div>
          <div className='product-container'>
          {console.log(show)}
            <Product show={show} close={this.closeModelHandler} productId={this.state.productId}></Product>
          </div>
        </div>
      </div>

    );
  }
}



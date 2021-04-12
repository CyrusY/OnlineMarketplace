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
      menuVisiable: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);

  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(error => { console.log(error) })
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
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
    const { products } = this.state
    return (
      <div className="product-list-container">
        <div className="grid-contianer">
          {
            products.length ?
              products.map(product =>
                <div key={product._id} onMouseDown={this.handleMouseDown}>
                  <Link to={{
                    pathname: `/product/${product._id}`
                  }} >
                    <div className="card-container">
                      <div className="card-text-container">
                        <h1 id="pruductName">{product.productName}</h1>
                        <span id="price"
                          style={{ fontSize: 20, fontWeight: "bold" }}>HK${product.price}
                          <span id="id"className="tag">{product.condition}</span>
                        </span>
                        <div id="postDate">posted at: {this.timeSince(product.postDate)}</div>
                      </div>
                      <img id="image"src={`/uploads/${product.productPhoto}`} alt="..."></img>
                    </div>

                  </Link>


                </div>) : null
          }
        </div>

      </div>
    );
  }
}



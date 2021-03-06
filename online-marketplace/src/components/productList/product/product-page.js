import React, { Component } from "react";
import "./product-page.css";
import axios from 'axios';
import { Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      product: {},
      productId: '',
      show: false
    }
    console.log(this.props.show)
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


  componentWillReceiveProps(props) {
    const productId = props.productId;
    const show = props.show;
    this.state.productId = productId;
    this.state.show = show;

    axios.get(`http://localhost:5000/products/${productId}`)
      .then(res => {
        this.setState({ product: res.data });
      })
      .catch(error => { console.log(error); })

    console.log(this.state.product)
    console.log(this.state.show)
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('button clicked');
      // axios.post('http://localhost:5000/users/add', user)
      // .then(res => console.log(res.data));
      // alert('Email has been sent, please check your email box, ' + this.state.displayName + '!');
  }

  render() {
    const { product, show } = this.state
    console.log(this.state.product.ownId);
    let User = JSON.parse(localStorage.getItem('profile'));
    return (

      <div id="flyoutMenu" style={{ top: show ? '0vw' : '-300vw' }}
        onMouseDown={this.props.handleMouseDown}>
        <div className="product-container">
          <div className="text-container">

            <h1 id="productName">{product.productName}</h1>
            <span id="price">HK${product.price}
              <span id="id" className="tag">{product.condition}</span>
            </span>
            <div id="postDate">posted at: {this.timeSince(product.postDate)}</div>
            <div id="owner">By: {product.ownerDisName} </div><br/>
            <div id="description">description: {product.productDescription} </div>
            
            <div onSubmit={this.onSubmit}>
              <Link onClick={e => (!User.result.displayName || !product.price) ? e.preventDefault() : null} to={`/chat?name=${User.result.displayName}&room=${product.productName}`}>
              <i className="fas fa-comments-dollar"></i>
              
              </Link>
            </div>
            {/* 
            <Link onClick={e => (!product.ownerDisName || !product.ownerId || !User.result._id)
              ?  e.preventDefault() : null}
              to={`/chat?name=${product.ownerDisName}&room=${product.ownerId}+${User.result._id}`}>
            */}         
          </div>

          <img id="image" src={`/uploads/${product.productPhoto}`} alt="..."></img>
        </div>
      </div>

    );
  }
}

export default Product;
import React, { Component } from "react";
import "./product-page.css";
import axios from 'axios';
import { Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);

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

  render() {
    const { product, show } = this.state;
    let User = JSON.parse(localStorage.getItem('profile'));

    console.log("owner Name is: " + product.ownerDisName);

    console.log("owner Id: " + product.ownerId);
    console.log("Current User Id " + User.result._id);
    return (

      <div id="flyoutMenu" style={{ top: show ? '0vw' : '-300vw' }}
        onMouseDown={this.props.handleMouseDown}>
        <div className="product-container">
          <div className="text-container">

            <h1 id="pruductName">{product.productName}</h1>
            <span id="price">HK${product.price}
              <span id="id" className="tag">{product.condition}</span>
            </span>
            <div id="postDate">posted at: {this.timeSince(product.postDate)}</div>
          
            
            <Link onClick={e => (!product.ownerDisName || !product.ownerId || !User.result._id)
              ?  e.preventDefault() : null}
              to={`/chat?name=${product.ownerDisName}&room=${product.ownerId}+${User.result._id}`}>
            //<button className={'button mt-20'} type="submit">Sign In</button>
            
            </Link>
             
             
           
            <div id="productOwner"> {product.ownerId}</div>
          </div>
          <img id="image" src={`/uploads/${product.productPhoto}`} alt="..."></img>
        </div>
      </div>

    );
  }
}

export default Product;
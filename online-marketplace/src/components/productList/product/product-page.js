import React, { Component } from "react";
import "./product-page.css";
import axios from 'axios';

class Product extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      products: {},
    }
  }

  getID() {
    var pathname = window.location.pathname.split('/');
    return pathname[2]
  }



  componentDidMount() {
    const productId = this.props.productId;
    console.log(this.props.productId)
    axios.get(`http://localhost:5000/products/${productId}`)
      .then(res => {
        // console.log(res.data)
        this.setState({ products: res.data });
      })
      .catch(error => { console.log(error); })
  }


  render() {

    // console.log('http://localhost:5000/products/'+this.props.productId)
    return (
      <div id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
 >
        <p>
          {this.props.productId}
        </p>
        <h2><a href="#">Search</a></h2>
      </div>

    );
  }
}

export default Product;
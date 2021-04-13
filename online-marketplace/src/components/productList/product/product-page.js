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
<<<<<<< HEAD
      <div id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
 >
        <p>
          {this.props.productId}
        </p>
        <h2><a href="#">Search</a></h2>
=======
      // <div id="flyoutMenu"
      //      onMouseDown={this.props.handleMouseDown} 
      //      className={visibility}>
      //   <p>
      //       {this.props.productId}
      //   </p>
      //   <h2><a href="#">Search</a></h2>
      // </div>
      <div>
        Hello, here is product<br/>
        <img id="image" src={`/uploads/${this.state.products.productPhoto}`} alt="..."></img> <br/>
        Name: {this.state.products.productName}<br/>
        Price: {this.state.products.price}<br/>
        Condition: {this.state.products.condition}<br/>
        Description {this.state.products.productDescription}<br/>
>>>>>>> 03933f994b579b0ef39e6e94ac2871d3e572685e
      </div>

    );
  }
}

export default Product;
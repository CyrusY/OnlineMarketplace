import React, { Component } from "react";
import "./product-page.css";
import axios from 'axios';
 
class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            products:{},
          }
    }

    getID() {
      var pathname = window.location.pathname.split( '/' );
        return pathname[2]
    }

    componentDidMount() {
        const productId = this.getID();
        axios.get(`http://localhost:5000/products/${productId}`)
          .then(res => {
            console.log(res.data)
            this.setState({ products: res.data });
          })
          .catch(error => { console.log(error);})
      }

  render() {
    // var visibility = "hide";
    // console.log(this.state.product)
    // if (this.props.menuVisibility) {
    //   visibility = "show";
    // }
    // console.log('http://localhost:5000/products/'+this.props.productId)
    return (
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
      </div>
    );
  }
}
 
export default Product;
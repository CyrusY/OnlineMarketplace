import React, { Component } from "react";
import "./product-page.css";
import axios from 'axios';
 
class Product extends Component {
    constructor(props){
        
        super(props);

        this.state = {
            products:{}
          }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/products/${this.state.products._id}`)
          .then(res => {
            console.log(res.data)
            this.setState({ products: res.data });
            
          })
          .catch(error => { console.log(error);  })
      }


  render() {
    // var visibility = "hide";
    // console.log(this.state.product)
    // if (this.props.menuVisibility) {
    //   visibility = "show";
    // }
    console.log('http://localhost:5000/products/'+this.props.productId)
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
        Hello, here is product
      </div>
    );
  }
}
 
export default Product;
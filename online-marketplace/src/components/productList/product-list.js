import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
// import "bootstrap /dist/css/bootstrap.min.css";

import './product-list';

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
        <h1>Happy Hunting!</h1>
        {
          products.length ?
          products.map( product =>
          <MainContainer key = {product._id}>
            <span className = "badge badge-dark">
              {product.productName}
            </span>
            <div
              style={{fontSize:16, fontWeight: "bold"}}>HK${product.price}
              <span style={{fontSize:12, color: 'GrayText'}}> • {product.condition}</span> 
            </div>
            <div>posted at: {new Date(product.postDate).getDate() }</div>
            {/* <div>Description: {product.productDescription}</div> */}
          </MainContainer>) : null
        }
      </div>
    );
  }
}

const MainContainer = styled.div`
  margin: 7rem 0;
`;
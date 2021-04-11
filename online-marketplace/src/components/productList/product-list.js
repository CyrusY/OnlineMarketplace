import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'


import './product-list.css';

export default class ProductList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(res => {
        console.log(res)
        this.setState({ products: res.data });
      })
      .catch(error => { console.log(error) })
  }

  render() {
    const { products } = this.state
    return (
      <div className="product-list-container">
        <div className="grid-contianer">
          {
            products.length ?
              products.map(product =>
                <div key={product._id} className="card-container">
                 
                    <span className="tag-container">
                      {product.productName}
                    </span>
                    <div
                      style={{ fontSize: 16, fontWeight: "bold" }}>HK${product.price}
                      <span style={{ fontSize: 12, color: 'GrayText' }}> • {product.condition}</span>
                    </div>
                    <div>posted at: {new Date(product.postDate).getDate()}</div>
                    {/* <div>Description: {product.productDescription}</div> */}
                 

                </div>) : null
          }
        </div>

      </div>
    );
  }
}

const MainContainer = styled.div`
  margin: 7rem 0;
`;
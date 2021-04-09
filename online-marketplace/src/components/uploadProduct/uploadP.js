import React, { Component } from 'react';
// import styled from 'styled-components';
import axios from 'axios';

export default class UploadProduct extends Component {

  constructor(props) {
    super(props);

    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeCondition = this.onChangeCondition.bind(this);
    this.onChangeProductDescription = this.onChangeProductDescription.bind(this);
    // this.onChangeOwnerID = this.onChangeOwnerID.bind(this);
    this.onChangeProductPhoto = this.onChangeProductPhoto.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      productName: '',
      price: 0,
      condition: '',
      productDescription: '',
      // ownerID: '',
      productPhoto: '',
    }
}

onChangeProductName(e) {
  this.setState({
    productName: e.target.value
  })
}

onChangePrice(e) {
  this.setState({
    price: e.target.value
  })
}

onChangeCondition(e){
  this.setState({
    condition: e.target.value
  })
}


onChangeProductDescription(e) {
    this.setState({
      productDescription: e.target.value
    })
}

// onChangeOwnerID(e) {
//     this.setState({
//       ownerID: e.target.value
//     })
// }

onChangeProductPhoto(e) {
  this.setState({
    productPhoto: (e.target.files[0])
  })
}

onSubmit(e) {
    e.preventDefault();

    const product =  {
      productName: this.state.productName,
      price: this.state.price,
      condition: this.state.condition,
      productDescription: this.state.productDescription,
      // ownerID: this.state.ownerID,
      productPhoto: this.state.productPhoto
  }

  console.log(product);

  axios.post("http://localhost:5000/products/add", product)
    .then(res => console.log(res.data))
    .catch(err=> {console.log(err);});
}

render() {
  return (
      <div className = "container">
        <h1>Upload Product</h1>
        <form onSubmit = {this.onSubmit} encType = "multipart/form-data">
          <div className = "form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type= "text"
              value = {this.state.productName}
              onChange = {this.onChangeProductName}
              className = "form-control"
              placegolder = "Product Name"
            />
          </div>
          <div className = "form-group">
            <label htmlFor="price">Price (in HKD)</label>
            <input
              type= "number"
              value = {this.state.price}
              onChange = {this.onChangePrice}
              className = "form-control"
              placegolder = "Price"
            />
          </div>

          <div className = "form-group">
            <label htmlFor="condition">Condition of Item</label>
            <select value = {this.state.condition} onChange={this.onChangeCondition}>
              <option value = ""> </option> 
              <option value = "New"> New </option>
              <option value = "Used"> Used </option>
            </select>
          </div>

          <div className = "form-group">
            <label htmlFor="description">Description on Item</label>
            <input
              type= "text"
              value = {this.state.productDescription}
              onChange = {this.onChangeProductDescription}
              className = "form-control"
              placegolder = "Description"
            />
          </div>

          <div className = "form-group">
            <label htmlFor="file"> Choose Item Photo</label>
            <input
              type = "file"
              filename="productPhoto"
              className = "form-control-file"
              onChange = {this.onChangeProductPhoto}
            />
          </div>

          <div className="button">
            <button type="submit">Upload Item</button>
          </div>

        </form>
          
      </div>
      )
  }
}
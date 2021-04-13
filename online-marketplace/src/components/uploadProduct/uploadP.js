import React, { Component } from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import './upload.css';

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

  onChangeCondition(e) {
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

  getID (){
    let User = JSON.parse(localStorage.getItem('profile'));
    try {return User.result._id;}
    catch(error){
        console.log('Please sign in to enable function');
        window.location = '/login';
        alert('Please sign in to enable member function');
        return undefined;
    }
  }
  
  onSubmit(e) {
    e.preventDefault();

    let userId = this.getID();

    const formData = new FormData();

    formData.append("productName", this.state.productName);
    formData.append("price", this.state.price);
    formData.append("condition", this.state.condition);
    formData.append("productDescription", this.state.productDescription);
    formData.append("ownerId", userId);
    formData.append("productPhoto", this.state.productPhoto);


    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1] + ', ' + pair[2] + ', ' + pair[3]);
    }
    // console.log(product);

    axios.post("http://localhost:5000/products/add", formData)
      .then(res => {console.log(res.data)})
      .catch(err => { console.log(err);});

    // if () {
    //   window.location = '/product';
    //   alert('Your item has been uploaded! Check out the product list!');
    // }
      
  }

  render() {
    return (
      <div className="upload-container">
        <div className="main-area">
          <div className="form-container">
            <form onSubmit={this.onSubmit} encType="multipart/form-data">
              <div className="text-field">
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  value={this.state.productName}
                  onChange={this.onChangeProductName}
                  className="form-control"
                  placegolder="Product Name"
                />
              </div>
              <div className="text-field">
                <label htmlFor="price">Price (in HKD)</label>
                <input
                  type="number"
                  value={this.state.price}
                  onChange={this.onChangePrice}
                  className="form-control"
                  placegolder="Price"
                />
              </div>

              <div className="text-field">
                <label htmlFor="condition">Condition of Item</label>
                <select value={this.state.condition} onChange={this.onChangeCondition}>
                  <option value=""> </option>
                  <option value="New"> New </option>
                  <option value="Used"> Used </option>
                </select>
              </div>

              <div className="text-field">
                <label htmlFor="productDescription">Description on Item</label>
                <input
                  type="text"
                  value={this.state.productDescription}
                  onChange={this.onChangeProductDescription}
                  className="form-control"
                  placegolder="Description"
                />
              </div>

              <div className="text-field">
                <label htmlFor="fileName"> Choose Item Photo</label>
                <input
                  type="file"
                  filename="productPhoto"
                  className="form-control-file"
                  onChange={this.onChangeProductPhoto}
                />
              </div>

              {/* <div className="text-field">
                <label htmlFor="ID"> ID</label>
                <input
                  type="text"
                  value={this.state.ownerID}
                  className="form-control"
                  onChange={this.onChangeOwnerID}
                />
              </div> */}

              <div className="button">
                <button type="submit">Upload Item</button>
              </div>

            </form>

          </div>

        </div>


      </div>
    )
  }
}
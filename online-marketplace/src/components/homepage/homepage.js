import React, { Component } from 'react';
import './homepage.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import { SliderData } from '../ImageSlider/SliderData';
import SearchBar from '../SearchBar';
import ProductList from '../productList/product-list';
function Homepage() {
  return <div className="homepage-containter">
    <div className="image-slider-contiainer">
      <ImageSlider slides={SliderData} />
    </div>

  
  </div>;


}

export default Homepage;
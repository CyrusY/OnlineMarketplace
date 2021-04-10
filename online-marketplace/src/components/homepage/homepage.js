import React, { Component } from 'react';
import './homepage.css';
import ImageSlider from '../ImageSlider/ImageSlider';
import { SliderData } from '../ImageSlider/SliderData';
import SearchBar from '../SearchBar';
import ProductList from '../product-list';

function Homepage() {
  return <ImageSlider slides={SliderData} />;
  return <SearchBar />;
}

export default Homepage;
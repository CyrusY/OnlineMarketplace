import React, { Component } from 'react';
import './homepage.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function Homepage() {
  return <ImageSlider slides={SliderData} />;
}

export default Homepage;
import React, { Component } from 'react';
import './homepage.css';
import style from './homepage2.css'
import ImageSlider from '../ImageSlider/ImageSlider';
import { SliderData } from '../ImageSlider/SliderData';
import SearchBar from '../SearchBar';
import ProductList from '../productList/product-list';
import Product from '../productList/product/product-page';


function Homepage() {
  // return (<ImageSlider slides={SliderData} />;
        //  return <ProductList product = {Product}/>;


return( 
  
  <div className="homepage">
  <div className="SliderContainer">
      
      <ImageSlider slides={SliderData} />
      
    </div>
    
    {/* <div className="ProductContainer"> 
    
    <h1 style={{marginLeft : 370 }}><ProductList/> </h1>
  
    </div> */}
  </div>
)
}

export default Homepage;
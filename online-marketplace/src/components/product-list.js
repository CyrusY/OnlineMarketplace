import React, { Component } from 'react';


  const ProductList = ({ProductList=[]}) => {
    return (
      <>
      { ProductList.map((data,index) => {
          if (data) {
            return (
              <div key={data.name}>
                <h1>{data.name}</h1>
        </div>	
           )	
         }
         return null
      }) }
      </>
    );
  }
  
  export default ProductList
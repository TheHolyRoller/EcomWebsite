/** 



*/


import React from 'react';
import { useParams } from 'react-router-dom'; // import the useParams hook from react-router-dom
import { PRODUCTS } from '../Data/products';

function CardDetails() {

  const { id } = useParams();
  
  const item = PRODUCTS.find((item) => item.id === Number(id));

console.log(item); 
console.log("is this finally working???"); 
console.log(item.id); 


const {productName, price, productImage} = item; 


  return item ? (
    <div className="card-details">
      <h3>{item.productName}</h3>
      <p>{item.price}</p>
      <p>{item.productImage}</p>
      <img src={productImage}/>
    </div>
  ) : (
    <div className="error">
      <p>Item not found</p>
    </div>
  );
}

export default CardDetails;

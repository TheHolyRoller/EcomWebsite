
import React from 'react'


import { ListContext } from '../ListContext';

import { PRODUCTS } from '../Data/products';

import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from '../productsStore';


import { ListItem } from '@mui/material';

import {Button,  Card,  Modal} from 'react-bootstrap';

import CartProduct from '../Data/CartProduct';

import Cards from './Cards';

import ListCard from './ListCards'; 

// import matches from 'dom/lib/matches';


function List(props) {
    const list = useContext(ListContext);
    
    console.log(props); 
    
    const id = props.id;
    
    console.log("WE'RE TRYING TO GET THE ITEM ID HERE "); 
    
    console.log(list.items);
    
    let ids = [];
    
    
    list.items.map((obj) => {
    
    if(obj.hasOwnProperty("id")){
      
      console.log("is this map ACTUALLY WORKING???!#@$@")
      console.log(obj.id); 
    
      ids.push(obj.id); 
      
    }
    
    })
    
    const myItems = list.items; 
    
    let myProduct = [{}];

    console.log()

    ids.forEach((id) => {
      
      
      let match  = PRODUCTS.find((obj) =>  obj.id === id); 

      if(match){

        console.log("THIS IS THE MATCHING ARRAY AT WORK ")
        console.log(match);
        
        console.log("this is the match id "); 
        
        console.log(match.id); 
        
        
        myProduct.push(match); 
        console.log("this is the length of the product array"); 
        
        console.log(myProduct.length); 

      }
      
    }) 
    
    myProduct.shift(); 
    
    const listCount = list.items.reduce((sum, product) => sum + product.quantity, 0);
    
    const listItems = list.items; 

    const productData = getProductData(id);
    
  return (

    <div>
      List 
      {listCount > 0 ? 
        <>
     <p>Items in your list!:</p>
        
        {/* Find out why it''s saying this is not a function  */}
     {myProduct.map((currentProduct, idx) => (

       <ListCard  key={idx} product={currentProduct} id={currentProduct.id} image={currentProduct.productImage} title={currentProduct.productName}  quantity={currentProduct.quantity}>
       Card
       </ListCard>
       
        ))}

       <h1>Total: {list.getTotalCost().toFixed(2)}</h1>

       <Button variant="success">
          Remove from List 
         </Button>
         </>
          :
          <h1 style={{minHeight: "70vh"}} >There are no items in your list!</h1>
      }
      
    </div>
  )
}

export default List

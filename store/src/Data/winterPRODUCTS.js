import product1 from "../assets/HackingProducts/MechanicalKeyboard.jpg"; 

import product2 from "../assets/HackingProducts/GamingHeadset.jpg"; 

import product3 from '../assets/HackingProducts/TrackingPad.jpg'; 

import product4 from "../assets/HackingProducts/SportsWatch.jpg"; 

import product5 from '../assets/HackingProducts/BombDectectingJacket.jpg'; 

import product6 from '../assets/HackingProducts/RearViewShades.jpg'; 

import product7 from '../assets/HackingProducts/BugDetector.jpg'; 

import product8 from '../assets/HackingProducts/BugDetector.jpg'; 


import product9 from '../assets/HackingProducts/RubberDucky.jpg'; 


export const winterPRODUCTS = [
  {
    id: "price_1NLTS0ECwV7seoblF9NuuL6i",
    productName: " Mechanical Keyword",
    price: 80.0,
    productImage: product1,
    productClass: "Iphones"
  },  
  {
    id: "price_1NLTRWECwV7seobllf9FtKgU",
    productName: " Gaming Headset",
    price: 1999.0,
    productImage: product2,
    productClass: "Macs"
    
    
    
  },
  {
  
    id: "price_1NLTSFECwV7seoblJGrWFYf8",
    productName: "Track Pad",
    price: 40.0,
    productImage: product3,
    productClass: "Cameras"
    
  },
  {
  
    id: "price_1NLTScECwV7seoblLvpfqzWS",
    productName: "Sports Watch",
    price: 120.0,
    productImage: product4,
    productClass: "Shoes"
    
  },
  {
    id: "price_1NLTTPECwV7seoblGld0P3tT",
    productName: "Bomb Detector Dinner Jacket",
    price: 450,
    productImage: product5,
    productClass: "Weapons"
    
  },
  {
    id: "price_1NLTToECwV7seobl1VZUe6vr",
    productName: "Rear View Shades",
    price: 68.0,
    productImage: product6,
    productClass: "Shirts"
    
  },
  {
    id: "price_1NLTUHECwV7seobllVJHTs1z",
    productName: "Bug Detector",
    price: 120.0,
    productImage: product7,
    productClass: "Gadgets"
    
  },
  {
  
    id: "price_1NLTUzECwV7seoblZPDucMt1",
    productName: "Rubber Ducky",
    price: 60.0,
    productImage: product8,
    productClass: "Hats"
    
  },

];



// Add in the get product data function here 

function getProductData(id) {
  let productData = winterPRODUCTS.find(product => product.id === id);

  if (productData === undefined) {
      console.log("Product data does not exist for ID: " + id);
      return undefined;
  }

  return productData;
}

export {  getProductData };
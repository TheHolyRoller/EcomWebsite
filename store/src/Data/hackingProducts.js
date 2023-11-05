


import product1 from '../assets/HackingProducts/HackDrive.jpg'; 


import product2 from '../assets/HackingProducts/TechPack.jpg'; 


import product3 from '../assets/HackingProducts/JuiceBank.jpg'; 


import product4 from '../assets/HackingProducts/WebCam.jpg'; 


import product5 from '../assets/HackingProducts/ChargingCable.jpg'; 


import product6 from '../assets/HackingProducts/GamingDesk.jpg'; 


import product7 from '../assets/HackingProducts/VRHeadset.jpg'; 

import product8 from '../assets/HackingProducts/SmartWatch.jpg'; 

import product9 from '../assets/HackingProducts/SmartRing.jpg'; 

import product10 from '../assets/HackingProducts/AirTag.jpg'; 

import product11 from '../assets/HackingProducts/SmartSpeaker.jpg'; 

import product12 from '../assets/HackingProducts/SmartBell.jpg'; 


export const hackingPRODUCTS = [
  {
    id: "price_1NLTVBECwV7seobluKpujAv1",
    productName: "Hack Drive",
    price: 80.0,
    productImage: product1,
    productClass: "Iphones"
  },  
  {
    id: "price_1NLTWSECwV7seoblRa2Z0zkC",
    productName: " Tech Pack",
    price: 199.0,
    // Add in the correct image 
    productImage: product2,
    productClass: "Macs"
    
    
  },
  {
  
    id: "price_1NLTWmECwV7seoblMxbiZf8a",
    productName: "Juice Bank",
    price: 30.0,
    productImage: product3,
    productClass: "Cameras"
    
  },
  {
    id: "price_1NLTXLECwV7seoblq5xRqwR6",
    productName: "Web Cam",
    price: 20.0,
    productImage: product4,
    productClass: "Shoes"
    
  },
  {
    id: "price_1NLTXyECwV7seobleZyQ9StH",
    productName: "Iphone Charging Cable",
    price: 45,
    productImage: product5,
    productClass: "Weapons"
    
  },
  {
    id: "price_1NLTZAECwV7seoblzdNOg41E",
    productName: "Gaming Desk",
    price: 168.0,
    productImage: product6,
    productClass: "Shirts"
    
  },
  {
    id: "price_1NLTZnECwV7seoblWMJ8epGh",
    productName: "VR Headset",
    price: 3520.0,
    productImage: product7,
    productClass: "Gadgets"
        
  },
  {
  
    id: "price_1NLTaRECwV7seoblE4WIv6Yx",
    productName: "Smart Watch",
    price: 260.0,
    productImage: product8,
    productClass: "Hats"
    
  },
  
  {
    
    id: "price_1NLTaeECwV7seoblvc3x0RXi", 
    productName: "Smart Ring" , 
    price: 150, 
    productImage: product9, 
    productClass: "Gadgets", 
    
  },
  {
    
    id: "price_1NLTb6ECwV7seobl2pNdiJXL", 
    productName: "Air Tag", 
    price: 50, 
    productImage: product10, 
    productClass: "Gadgets", 
    
  },
  {
    
    id: "price_1NLTbqECwV7seobl4b4aIQgr", 
    productName: "Smart Speaker" , 
    price: 250, 
    productImage: product11, 
    productClass: "Gadgets", 
    
  },
  {
    
    id: "price_1NLTbSECwV7seoblWn9NU9zA", 
    productName: "Smart Bell" , 
    price: 250, 
    productImage: product12, 
    productClass: "Gadgets", 
    
  },

];



function getProductData(id) {
  let productData = hackingPRODUCTS.find(product => product.id === id);

  if (productData === undefined) {
      console.log("Product data does not exist for ID: " + id);
      return undefined;
  }

  return productData;
}

export {  getProductData };
import './App.css';

import { BrowserRouter, Routes, Route, useParams} from "react-router-dom";

import { Card, Container } from 'react-bootstrap';

import {Row, Col} from 'react-bootstrap';

import {Hidden, ListItem, Paper } from '@mui/material'

import NavbarComponent from './components/Navbar'; 

import Cancel from './pages/Cancel';

import Success from './pages/Success';

import Footer from './components/Footer'; 
import BootstrapNav from './components/BootstrapNav'; 


import { PRODUCTS } from './Data/products';

import Profile from './components/Profile';



import ProductPage from './components/ProductPage';
import CardList from './components/CardList';

import { selectedCardId } from './components/CardList';
import CardDetails from './components/CardDetails';
// import SearchBar from './components/SearchBar';


import ProductCard from './components/ProductCard';

import ListProvider from './ListContext';
import CartProvider from './CartContext';
import ChatComponent from './utilities/ChatComponent';
import ReivewPage from './components/ReivewPage';
import Rating from './components/Rating'; 

import Signup from './components/Signup';

import Store from './pages/Store';

import WinterStore from './pages/winterStore'; 

import HackingStore from './pages/hackingStore'; 


// Import the footer pages here 
import Terms from './components/FooterPages/Terms'; 

import PrivacyPolicy from './components/FooterPages/PrivacyPolicy'; 
  

import List from './components/List'; 

import ContactForm from './components/ContactForm'; 
import { hackingPRODUCTS } from './Data/hackingProducts';
import { winterPRODUCTS } from './Data/winterPRODUCTS';


function App() {
  
  let productId = useParams(); 
  
  console.log("this is the PRODUCT ID FROM THE APP FILE #@@@@@@"); 
  console.log(productId); 
  

  const product = PRODUCTS.find((product) => product.id === productId); 
  const hackingProduct = hackingPRODUCTS.find((product) => product.id === productId); 
  const winterProduct = winterPRODUCTS.find((product) => product.id === productId); 



  console.log("JUST SEEING WHAT PRODUCT CONTAINS %%%%%%%"); 
  console.log(product); 
  


  
  
  return (
  <>
    <ListProvider>
    <CartProvider>
        <BootstrapNav></BootstrapNav>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store product={product} />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="list" element={<List/>}/>
            <Route path="privacypolicy" element={<PrivacyPolicy/>}/>
            <Route path="terms" element={<Terms/>} />
            <Route path="contact" element={<ContactForm/>}/>

            <Route path="winterStore" element={<WinterStore />}/>
            <Route path="hackingStore" element={<HackingStore product={product} />}/>
            
            <Route path=":id" element={<ProductPage product={product}  />}/>

          </Routes>
        </BrowserRouter>
        <Footer/>
    </CartProvider>
    </ListProvider>

    
  </>
  
  );
}

export default App;

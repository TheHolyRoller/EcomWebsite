/** 





*/


import Container from 'react-bootstrap/Container';
import {Button,  Modal} from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


// Import the Search bar here 
import BackToTopButton  from './BackToTopButton';




import List from './List';


import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaList } from "react-icons/fa";


import { FaMdiAccount  } from "react-icons/fa";
import PersonIcon from '@mui/icons-material/Person';
// import { FaList } from 'react-icons/fa';    
import ListIcon from '@mui/icons-material/List';

import { CartContext } from "../CartContext";
import CartProduct from '../Data/CartProduct';

import { useState, useContext, useEffect, useRef } from 'react';



import Logo from '../assets/LightLogo.svg'; 


function CollapsibleExample() {
    
const SearchBar = BackToTopButton;
    
    
     // Define the media query string
  const query = "(max-width: 768px)";

  // Create a MediaQueryList object
  const mql = window.matchMedia(query);

  // Check if the media query matches
  const isSmallScreen = mql.matches;
    
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    
    const [showSearch, setShowSearch] = useState(false); 
    
    const handleSearchClose = () => setShowSearch(false); 
    const handleSearchOpen = () => setShowSearch(true); 
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const checkout = async () => {
    // This was 4000
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }
    
    

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      
      
      {/* Add in the SVG Logo here  */}
        <Navbar.Brand href="/" style={{marginLeft: "4vw"}} >
        React-Bootstrap
        
        {/* Set the dimensions with style here  */}
        {/* <img src={Logo} style={{width: "5rem", minHeight: "2rem"}} /> */}
        {/* <Logo/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="" style={{display: "flex", justifyItems: "center", alignItems: "center",  width: "100%",  margin: "auto"}}>
            {isSmallScreen ? (

            <Nav.Link href="/" style={{marginRight: "3vw"}} >Features</Nav.Link>
            
            )
            
            : 
            (
            <Nav.Link href="/" style={{marginRight: "3vw", marginLeft: "10vw"}} >Features</Nav.Link>

                
                
            )
            
            }
            
            {/* <Nav.Link href="/" style={{marginRight: "3vw"}} >Features</Nav.Link> */}
            <Nav.Link href="/cancel" style={{marginRight: "3vw"}} >Outdoor</Nav.Link>
            <Nav.Link href="/cancel" style={{marginRight: "3vw"}} >Autumn</Nav.Link>
            <Nav.Link href="/cancel" style={{marginRight: "3vw"}} > Gear</Nav.Link>
            <Nav.Link href="/" style={{marginRight: "3vw"}} >Winter </Nav.Link>

           
           
           {/* Add in the styling for the mobile search bar here  */}
           {isSmallScreen ? (
            <div onClick={handleSearchOpen}   >
           
           <SearchBar onClick={ handleSearchOpen } />
           </div>
           
               ) : (
            
            // Add in the styling for the search bar positioning here 
            // outline: "5px solid lime"
            <div style={{display: "grid", placeItems: "center"}}>
                <SearchBar/>
                
            </div>
      
      )}
      
      
      <Modal show={showSearch} onHide={handleSearchClose}  >
           
           <Modal.Header closeButton >
            
            <Modal.Title style={{display: "flex", justifyItems:"center", marginLeft: "25vw"}} >Search Products </Modal.Title>
           </Modal.Header>
                       
            <Modal.Body  style={{display: "flex", justifyItems: "center", position: "relative"}}>

            <div style={{ display: "flex", margin: "0 auto", justifyItems: "center"}} >
            <SearchBar  />
            </div>
            
            </Modal.Body>
           </Modal> 
           
           
           
           
          </Nav>
          <Nav style={{}} >

            <Nav.Link href="#" style={{marginRight: "1vw"}} >  
           
                                                            {/* THIS COULD CAUSE TROUBLE @!@#!@#!@# */}
            <Navbar.Collapse className="justify-content-end" style={{ position: "relative"}} >


                    {/* Start of conditional Render  */}
                    
                    {isSmallScreen ? (

                    
                    <div onClick={handleShow} style={{position: "relative",   display: "flex", justifyItems: "center"}} >
                    
                    
                    <FaShoppingCart style={{fontSize: "1.5rem", padding: "0", marginTop: "0.2rem", marginBottom: "0.5rem", position: "absolute", left: "44%", top: "50%"  }} /> 
                    
                    {productsCount > 0 ? 
                    
                    <>
                    <div style={{position: "absolute", top: "5%", left: "104%"}}> ({productsCount}) </div>
                    
                    </>
                    
                    : 
                    <div></div>
                        }   
                    </div>
                    
                    
                    )
                    
                    : 
                    
                    (

                        <div onClick={handleShow} style={{position: "relative"}} >
                    
                        <FaShoppingCart style={{fontSize: "1.5rem", padding: "0", margin: "0", transform: "translate(0%, 1vh)"  }} /> 
                        
                        {productsCount > 0 ? 
                        
                        <>
                        <div style={{position: "absolute", top: "5%", left: "104%"}}> ({productsCount}) </div>
                        
                        </>
                        
                        : 
                        <div></div>
                            }   
                        </div>  
                    )
                    }
                    
                </Navbar.Collapse>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map( (currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}
                            

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={checkout}>
                                Purchase items!
                            </Button>
                        </>
                    :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>
            </Modal>

            
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            </Nav.Link>
          
          {/* Add in the conditional rendering here  */}
          
          
          {isSmallScreen ? (

             <Nav.Link eventKey={2} href="/list" style={{fontSize: "0rem", display: "inline-block"}} >
            
          
            <ListIcon style={{fontSize: "2.1rem", display: "inline-block", transform: "translate(41vw, 0%)"}} />
            
            </Nav.Link>
            
          )
          
          : 
          
          (

            <Nav.Link eventKey={2} href="/list" style={{fontSize: "0rem", transform: "translate(0%)"}} >
            
          
            <ListIcon style={{fontSize: "2.1rem"}}  />
            
            </Nav.Link>
            
            
          )
          
          }
          
          
            {/* <Nav.Link eventKey={2} href="/list" style={{fontSize: "0rem", outline: "7px solid pink"}} >
            
          
            <ListIcon style={{fontSize: "2.1rem"}} />
            
            </Nav.Link> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
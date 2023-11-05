/** 

Okay so let's just talk things through. 


There is of course a lot of styling and polishing and design work that 
needs to be done to the website. 


This needs to be done after everything is functioning correctly, however, 


So the plan is now is to get the firebase and contact api working. 


Then once that is done I can start on fixing the cards. 



Then once the cards are fixed I can then move onto. 





List of polishing Tasks: 


1. Fix cards on smaller screens

2. Get firebase contact and email signup work 

3. Search bar on mobile 

4. Image covering checkout 

5. Content for different pages 

6. Footer and Routes 


7. Images to the side of the product image 

8. Product Landing Page layout 


9. Title and Product Image 

10. User profile 

11. Product ids 

12. Home button icon 

13. Footer layout and appearance 

14. Nav & page styling

15. Format Currency and price 


*/

        import ImageMag from '../components/ImageMag'; 
        import { useParams, Link } from 'react-router-dom';
    
    
    // Import scroll here 
    import Scroll from './Scroller/Scroll';
    

        import '@fortawesome/fontawesome-svg-core'; 
        import '@fortawesome/free-regular-svg-icons'; 
        import '@fortawesome/react-fontawesome'; 
        import '@fortawesome/fontawesome-svg-core'


        import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
        import { faHeart } from '@fortawesome/free-regular-svg-icons';
        // import { FaShoppingCart } from "react-icons/fa";
        


        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

        import 'bootstrap/dist/css/bootstrap.min.css';

        import Container from 'react-bootstrap/Container';
        import Row from 'react-bootstrap/Row';
        import Col from 'react-bootstrap/Col';


        import '@fortawesome/fontawesome-svg-core'; 
        import '@fortawesome/free-regular-svg-icons'; 
        import '@fortawesome/react-fontawesome'; 
        import '@fortawesome/fontawesome-svg-core'
        import '@fortawesome/fontawesome-svg-core'; 
        import '@fortawesome/free-regular-svg-icons'; 
        import '@fortawesome/react-fontawesome'; 
        import '@fortawesome/fontawesome-svg-core'
        import { Button, CardActionArea, CardActions } from '@mui/material';
        import {  Form } from 'react-bootstrap';

        import '../Styles/ProductLandingPage/ProductPage.css'; 
        import { useState, useEffect, useRef, useReducer, useCallback, useContext } from 'react';
        import { PRODUCTS } from '../Data/products';
        import { CartContext } from "../CartContext";
        import { ListContext } from '../ListContext'; 

        import CartProduct from '../Data/CartProduct';
        import { FaShoppingCart } from "react-icons/fa";
        import { FaList } from "react-icons/fa";
import ChatComponent from '../utilities/ChatComponent';


 export default function ProductPage() {

// Add in the media query here 
const query = "(max-width: 768px)";

// Create a MediaQueryList object
const mql = window.matchMedia(query);

// Check if the media query matches
const isSmallScreen = mql.matches;

let marginBottom; 


if(isSmallScreen){
  
  marginBottom = "0vh"; 
  
}


else{

  marginBottom = "24vh"; 
  
}


  const initialHasRun = new URLSearchParams(window.location.search).has("hasRun") || false;

  // state variable to track if the function has run once
  const [hasRun, setHasRun] = useState(initialHasRun);

  // state variable to track if the timeout has been set
  const [hasTimeout, setHasTimeout] = useState(false);

  // function to run once and trigger a timeout
  const runOnce = () => {
    // check if the function has already run
    if (!hasRun) {
      // do something here
      console.log("Running once");

      // set the hasRun state to true
      setHasRun(true);

      // set a timeout to reload the page with a query parameter after a couple seconds
      setTimeout(() => {
        window.location.href = window.location.href + "?hasRun=true";
      }, 2000);

      // set the hasTimeout state to true
      setHasTimeout(true);
    }
  };
  
  
  useEffect(() => {
    runOnce();
  }, []);
          
          const { id } = useParams();
          
          console.log("is the id defined"); 
          console.log(id); 

          const item = PRODUCTS.find((item) => item.id === (id));
          
          console.log("This is the ITEM I DON'T KNOW WHY IT'S NOT WORKING ON THE OTHER PAGE"); 
          console.log(item); 

          
          const {productName, price, productImage} = item; 
          
          const [show, setShow] = useState(false);
          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
          
          
          const [flag, setFlag] = useState(false);


          const cart = useContext(CartContext);
          
          const list = useContext(ListContext);

          
          const cardRefs = useRef([]);
          
          // You might want to use a Local storage hook for this 
          const [selectedId, setSelectedId] = useState(null);
          
          const productId = useParams();    
 
          const product = item; 
          
          const productQuantity = cart.getProductQuantity(product.id);

          const listQuantity = list.getProductQuantity(product.id); 
          const reloadPage = () => {
            window.location.reload();
          };
        
     
       return (
         <div className="mainContainer" style={{marginBottom}}  >
            
            <div className="imageZoomPositionalContainer" >

              
            <div className="imageZoomContainer" >
            <ImageMag/>
            
            
            </div>
              
            </div>    

            <div className="productDetailsContainer">
            
            <div id="productNameContainer" >
            
            <div id="titleFirstSection">
              {/* Citizen */}

            </div>
            
            <div id="productTitleSectionContainer" >

            
            <div id="titleSecondSection">
            {productName}
            </div>

            </div>
            <div id="productMetaDataContainer" >
            <div id="productMetaData">
            Model AT2240-51E      
            
            </div>
            </div>
            
            </div>
            <div id="productSectionDividerLineContainer" >

            <div id="productSectionDividerLine" >
            </div>
            </div>
            
            
            <div id="productDetailsSectionContainer">
            <div id="productDetailsSection">
              
            <div id="productDetailRow">

            <div id="productDetailHeader" >
            Movement 
            </div>
            
            <div id="productDetailMeta">
              Echo Drive H504 
              
            </div>
            
            </div>
            <div id="productDetailRow">
            <div id="productDetailHeader" >
            Movement 
            </div>
            
            <div id="productDetailMeta">
              Echo Drive H504 
            </div>
            
            
            </div>
            <div id="productDetailRow">
            <div id="productDetailHeader" >
            Movement 
            </div>
            
            <div id="productDetailMeta">
              Echo Drive H504 
              {/* <ChatComponent/> */}
            </div>
            
            </div>
              
              
              
            </div>
            <div id="sectionDividerLineContainer">

            <div id="sectionDividerLine">
            </div>
            </div>
            
            
            <div id="productPriceSectionContainer">
            
            <div id="productPrice">
              ${price}

            </div>
            </div>
            
            {/* Add in a container for the review section here  */}
            
            
            </div>
            

            
            <div id="CTASectionContainer">

            
            <div id="productButtonSectionContainer">
            
            <div id="productButtonSection">
            

            <div id="productButtonContainer" >
            
            
            <div id="productButton" >
            {/* ADD TO CART  */}
            { productQuantity > 0 ?
                            <>
                                <Form as={Row}>
                                    <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                                    <Col sm="6">
                                        <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                        <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                                    </Col>
                                </Form>
                                <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                            </>
                            :
                            <Button variant="primary" onClick={() => cart.addOneToCart(product.id)} style={{backgroundColor: "lightgrey"}} >
                            ADD TO CART
                            
                            {/* Add in the shopping basket icon here  */}
                    {/* <FaShoppingCart style={{fontSize: "1.5rem", padding: "0", marginTop: "0.2rem", marginBottom: "0.5rem", position: "absolute", left: "44%", top: "50%"  }} />  */}
                          
                          
                          
                            </Button>
                        }
            
            </div>
            </div>
              
              
            <div id="addToListContainer" >
            <div id="addToListButton">
              
              
          
                { listQuantity > 0 ?
                            <>
                                
                                <Form as={Row}>
                                    <Form.Label column="true" sm="6">In List: {listQuantity}</Form.Label>
                                    <Col sm="6">
                                        <Button sm="6" onClick={() => list.addOneToList(product.id)} className="mx-2">+</Button>
                                        <Button sm="6" onClick={() => list.removeOneFromList(product.id)} className="mx-2">-</Button>
                                    </Col>
                                </Form>
                                <Button variant="danger" onClick={() => list.deleteFromList(product.id)} className="my-2">Remove from list</Button>
                            </>
                            
                            
                            :
                            <Button variant="primary" onClick={() => list.addOneToList(product.id)}>Add To List  <FontAwesomeIcon icon={faHeart} />  </Button>
                        }
            
            
            </div>
                        
              {/*  */}
            <div>
            

            </div>
            {/* <h3 style={{display: "block"}} >Leave a Review!</h3> */}
            </div>  
            
            
            <ChatComponent/>
              
            </div>
              
            </div>
              
            </div>
              
            </div>

            
            </div>
          
          );
        
        }
        


import {Row, Col} from 'react-bootstrap';

import Scroll from '../components/Scroller/Scroll';

import { PRODUCTS } from '../Data/products';


import Cards from '../components/Cards';

import storeStyle from '../Styles/Store.module.css'; 


function HackingStore() {

// Get the length of the array
const length = PRODUCTS.length;

console.log("THIS IS THE PRODUCTS LENGTH");
console.log(length); 


const start = Math.floor(length / 3); // Half way through
const end = Math.floor(length * 3 / 4);

 // Half way through

console.log("this should be the ending part!!!!!!!!!!!!$$$$$"); 
console.log(end); 


    return (
        <>
        
        {/* Modify the mapping function here and use the Store data  */}
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <Scroll/>
            <Row id={storeStyle.mainContainer} xs={1} md={3} className="g-4">
            
            {/* Find out why the slicing isn't working  */}
            {PRODUCTS.slice(start, end).map((product, idx) => (
                    <Col align="center" key={idx}>
                        <Cards product={product}  name={product.productName} image={product.productImage} price={product.price} id={product.id}  />
                    </Col>
                ))}
            </Row>
        </>
    )
}


export default HackingStore;
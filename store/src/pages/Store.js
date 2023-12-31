import {Row, Col} from 'react-bootstrap';

import Scroll from '../components/Scroller/Scroll';

import { PRODUCTS } from '../Data/products';


import Cards from '../components/Cards'; 

import storeStyle from '../Styles/Store.module.css'; 



function Store() {


    const length = PRODUCTS.length;

    // Calculate the start and end indices for slicing
    const start = 0; 

    const end = Math.floor(length / 2); // Three quarters of the way through


    return (
        <>
        
        
        {/* Modify the mapping function here  */}
        
        
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <Scroll/>
            <Row id={storeStyle.mainContainer} xs={1} md={3} className="g-4">
            {PRODUCTS.slice(start, end).map((product, idx) => (
                    <Col align="center" key={idx}>
                        <Cards product={product}  name={product.productName} image={product.productImage} price={product.price} id={product.id}  />
                    </Col>
                ))}
            </Row>
        </>
    )
}


export default Store;
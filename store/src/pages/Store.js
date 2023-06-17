import {Row, Col} from 'react-bootstrap';


import Scroll from '../components/Scroller/Scroll';


import { productsArray } from '../productsStore';

import { PRODUCTS } from '../Data/products';

import ProductCard from '../components/ProductCard';

import Cards from '../components/Cards'; 

function Store() {

    return (
        <>
            <h1 align="center" className="p-3">Welcome to the store!</h1>
            <Scroll/>
            <Row xs={1} md={3} className="g-4">
                {PRODUCTS.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <Cards product={product}  name={product.title} image={product.productImage} price={product.price} id={product.id}  />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;
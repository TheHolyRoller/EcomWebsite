
/** 

Okay so let's talk things through. 


First of all I'm beginning a new project. 


And I'm beginning it in the hopes that my UI and UX still will be greatly improved 


and I can reuse a lot of the style designs and theme for my old projects. 



Okay so the primary goal of this project is not to show off your backend stills or 


even stills as a programmer it's to show that you have skills in design and particularly 

UX and UI design. 


Okay so that's great now let's work out how we're going to start and continue with 


this project. 


First of all I want to start out by prototyping the components one my one. 

I do have some UI components from the previous project but I think it would be better 
to re-build. 

Because it means I can try out and practice building UI components with CSS frameworks and 
component libraries but it will also mean I can get some experience and learn how to 
use the Radix component library and CSS framework. 


Okay so first of all let's plan out the UI components and how we're going to implement 

each one and then how we're going to integrate each one. 

These are the main stages of the UI component planning. 

Then there are many sub-stages to each of these stages. 

Okay so first of all let's make a list of all the UI components we want. 

Then we can plan out the building of each component and all the features that it needs to 
have and we can plan how we're going to implement these features. 


Okay so first of all a generic list of all the UI components includes but is not 

limited to. 


Nav bar + mobile nav 

Header 


Cards


Image Slider 


Auto Carousel 


Image Text Blocks 

Text Blocks 

Text and Video 

CTA 

Stats Section 

Icon 

Contact Section 

Testimonials Section    

Carousel of Text & Images 


Footer 

Checkout Section 

Reservation Section 


So 17 different UI components. 


Okay so that seems like a daunting task but with the help of a CSS framework it should be 

possible to get several working ones through in a day. 

That's only a few days to build the UI wireframe of the project. 


Okay so we're going to use Next.js React, React Query, Redux, Radix UI CSS firebase 

and a few other libraries to create the basic version of the website. 


Then for the more advanced middleware components we will use many other libraries. 


Okay so that's great. 


Now let's get onto planning out how we're going to implement and build each 

UI component that we need. 


Well first of all I'm going need to know Next.js and how to setup a Next.js project. 


I think for most things that Next.js provides it would be best to learn them as I go 

along. 


This way I keep making forward progress and I can learn things bit by bit and I don't 

need to cram things in all in one or two days. 


Okay so that's great I need to learn the basics of Next.js first. 


Then onces that is done I'll read through the Radix UI documentation then I'll begin 


implementing the UI components. Each component will have it's own road map and 

implementation plan. 

Okay so that's what needs to be done now. 


Then later one I'll learn what I need for the middleware components and then 

I'll learn what I need for the CSS effects and animations. 









*/


import {Row, Col} from 'react-bootstrap';

import Scroll from '../components/Scroller/Scroll';

import { PRODUCTS } from '../Data/products';
// import { winterPRODUCTS } from '../Data/winterPRODUCTS';

import WinterCards from '../components/WinterCards';


import storeStyle from '../Styles/Store.module.css'; 
import Cards from '../components/Cards';


function WinterStore() {


// Add in the slice parameter variables here 
// Get the length of the array
const length = PRODUCTS.length;

// Calculate the start and end indices for slicing
const start = Math.floor(length * 3 / 4); // Three quarters of the way through
const end = length; // End of the array


    return (
        <>
            
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


export default WinterStore;
/* eslint-disable no-unused-vars */
/** 


Okay so let's just talk things through at the moment. 


So now for all intents and purposes I have a basic e-commerce website. 


It doesn't look that great at the moment but it works which is the main thing. 


I'm planning on getting back to it later when I have more features that I can implement 

into it and I have more responsive reusable and styled UI components that I can use. 

I'll also have several different themes that I can apply as well. 


Then I can create a wireframe. Then create a design, color pallette and theme 
and then implement it from scratch onto the project. 


This way I can separate the two tasks of coding and creating the website 

as well as coding the functional backend components and middleware from 

styling designing and adding in the theme of the website. 

Then once the wire-framing, color pallette creation, designing, and styling is done, 

then another stage is started and this is the Effect stage adding in different effects. 


First of all you designate the different components and elements that will have an effect 
then the type of effect is decided upon. Then the effect is prototyped and 
developed in isolation. 

Then they are integrated and applied and the necessary polishing is done. 
Once the effects are done then the animations step needs to begin. 


So the places and elements where the animations should take place are decided upon. 

And a lot of the side effects and potential issues are listed out and taken into account. 

Then the type of animations are chosen. 

Then the tools technology and language to implement these animations are chosen. 

Then each animation is developed in isolation. 
 
Then one by one they are integrated and polished and the side effects are 
worked out. 



Okay so that's basically how I want my workflow to operate in the final stages of a 
project. 




Okay so for now it's crucial that I finish off this project before I lose any more 

motivation. 

So now even though the layout and styling is not perfect and the UI elements are pretty 

simple. What I need to do to finish it add in some other pages with different images 

and different names as well as unique product id's. 

So to do that I need to create several different contexts and I need to create several 

different product databases 

Once that is done then I'll look at what else needs doing. 








*/

import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router';

import ReactImageMagnify from 'react-image-magnify';

import {PRODUCTS} from '../Data/products'; 

import S from '../Styles/ProductLandingPage/ImageMag.module.css'; 

let myURLID; 

function ImageMag() {

    const { id } = useParams();
    
const item = PRODUCTS.find((item) => item.id === (id));


const {productName, price, productImage} = item; 

    const img = productImage; 

    return (
        <div className={S.container}  >
            
            <div className={S.imageRowContainer} >
            
            
            <div className={S.right}  >
            <img id={S.rowImage}  src={productImage} alt="alt" />

            </div>
            <div className={S.right} >
            <img id={S.rowImage}  src={productImage} alt="alt" />

                
            </div>
            <div className={S.right}  >
            <img id={S.rowImage}  src={productImage} alt="alt" />
                
            </div>
            <div className={S.right} >
            <img id={S.rowImage}  src={productImage} alt="alt" />
                
            </div>
        </div>
        
        
            
            
                 <div style={{width: "30vw", display: "flex", margin: "0 auto", alignItems: "center"}} className="left_2">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: img,
                                
                            }, 
                            // This is the zoomed image 
                            largeImage: {
                                src: img,
                                width: 1200,
                                height: 1200,
                                
                            },
                            enlargedImageContainerDimensions: {
                                width: '100%',
                                height: '100%',
                                
                            },
                        }}
                    />
                </div>
                
            
            </div>
    );
}

export default ImageMag;
export {myURLID}

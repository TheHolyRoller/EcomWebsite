import React from 'react'

import { useEffect, useState, useRef } from 'react'; 

 export const Scroll = () => {
 
  
//  Add in a media query here 
const query = "(max-width: 768px)";

// Create a MediaQueryList object
const mql = window.matchMedia(query);

// Check if the media query matches
const isSmallScreen = mql.matches;

let display; 

if(isSmallScreen){
  
display = "none"; 
  
}

else{
  display = 'auto'
}

 

  const [backToTopButton, setBackToTopButton ] = useState(true); 
  const scrollToTop = () => {
    const viewportHeight = window.innerHeight;
    var pageHeight = document.documentElement.scrollHeight;
    const scrollableSpace = pageHeight - viewportHeight;

    window.scrollTo({
      top: 0, 
      behavior: "auto"
  })
  }
  useEffect(() => {
      
    window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

      setBackToTopButton(true); 
    }
    
    
    else{
      setBackToTopButton(false); 
    }
    })
    
    }, [])
  return (
    <div>
  {backToTopButton && (
    <div id="button" onClick={scrollToTop} style={{position: "fixed", bottom: "50px", right: "50px", height: "40px", width: "50px", fontSize: "60px", borderRadius: "50%", cursor: "pointer", display }}>^ </div>
    )}
    
    </div>
  )
}
export default Scroll
import React from 'react'

import { useEffect, useState, useRef } from 'react'; 

 export const Scroll = () => {

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
    <div style={{}} >
  {backToTopButton && (
    <button id="button" onClick={scrollToTop} style={{position: "fixed", bottom: "50px", right: "50px", height: "50px", width: "50px", fontSize: "50px"}}>^ </button>
    )}
    
    </div>
  )
}
export default Scroll
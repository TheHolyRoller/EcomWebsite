



import React from 'react'
import { useState, useEffect } from 'react'
import App from '../App'

import SearchIcon from '@mui/icons-material/Search';

const BackToTopButton = () => {

const [backToTopButton, setBackToTopButton ] = useState(true); 

const [input, setInput] = useState(""); 
const [values, setValues] = useState ( {text: ''});


const [userInput, setUserInput] = useState(""); 


const [mappedValue, setMappedValue] = useState (0);


const [enterPressed, setEnterPressed] = useState(false);






const validInputs = [
  {input: "apple", value: 100},
  {input: "headphones", value: 0},
  {input: "phones", value: 30},
  {input: "wifi", value: 60},
  {input: "watches", value: 50}
];






const handleChange = e => {
  const {value} = e.target;
  setValues ( {
    ...values,
    text: value,
  });
};


useEffect ( () => {


  console.log("this are the values and this is the mapping UseEffect!~!!!!")
  
  console.log (values); 

  
  setUserInput(values.text); 
  
  console.log("this is the EXTRACTED value from the state variable values in useEffect");
  console.log(userInput); 

  const matchingObject = validInputs.find (obj => obj.input.toLowerCase () === values.text)
  
  console.log("this is the MATCHING OBJECT IN USEeFFECT"); 
  console.log(matchingObject); 

  
  
  if (matchingObject) {
    
    setMappedValue (matchingObject.value);
    
    console.log("this is the effect mapped value FUNCTION!#!@#!@#!"); 
    console.log(mappedValue); 
    
    

  } 
  else {
  
    setMappedValue (0);
    console.log("this is the mapped value"); 
    console.log(mappedValue); 
    
  }
  
}, [values, mappedValue,  userInput]);




const scrollToTop = () => {
    
    // Add in the console logs of the values of the other function here 
    console.log("This is the value from the SCROLL FUNCTION"); 
    console.log(values); 
    
    
    
    // Add in the console logs here 
    console.log("is this actually working????"); 
    const viewportHeight = window.innerHeight;
    console.log("this is the viewport height"); 
    console.log(viewportHeight); 

    var pageHeight = document.documentElement.scrollHeight;
    
    
    console.log("this is the page height"); 
    console.log(pageHeight); 
    
    
    console.log("this is the user input taken from the state variable");
    console.log(values); 

    
    console.log("this is the extracted value"); 
    console.log(values.text); 
  
    // Calculate the available scrollable space
    const scrollableSpace = pageHeight - viewportHeight;
    
    console.log("this is the scrollable space"); 
    console.log(scrollableSpace); 
    
    
    // Calculate the percentage of the number

    // FIND OUT WHAT THIS NUMBER IS AND GET THE EQUIVALENT 
    
    // Get the value from the user input and set the number value by processing it 
    // Through an equation 
    
    // Log out the mapped value result here and then see if you can add it to the 
    // Number 
    console.log("this is the mapped Value Result in the SCROLL FUNCTION"); 
    console.log(mappedValue); 

    
    console.log("userInput in the Scroll FUNCTION"); 
    
    console.log(userInput); 
    
    
    console.log("this is the mapped value near the NUMBER!#!@#"); 
    console.log(mappedValue); 
    
    const number = mappedValue;
    
    console.log("this is the number"); 
    console.log(number); 
    
    const percentage = number / 100;
    
    console.log("this is the percentage"); 
    console.log(percentage); 

    const amount = scrollableSpace * percentage;


    console.log("this is the AMOUNT"); 
    console.log(amount); 
    
    
    window.scrollTo({
        top: amount, 
        behavior: "auto"
        
    })
}


const handleKeyDown = (event) => {
  // If the event key is 'Enter', set the enterPressed state to true and call another function
  if (event.key === 'Enter') {
    setEnterPressed(true);
    
    scrollToTop(); 
    // doSomething();
  }
};

useEffect(() => {
  // Add the event listener when the component mounts
  window.addEventListener('keydown', handleKeyDown);

  // Remove the event listener when the component unmounts
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, []);

  
  return (
  
    <div style={{ position: "relative"}} >
    

    <input type="text" onChange={handleChange} placeholder='search' style={{width: '11rem', minHeight: "2rem",  color: "white", borderRadius: "5%",  }}>    
    </input>
    <SearchIcon onClick={scrollToTop} style={{position: "absolute", right: "4%", top: "17%", color: "lightgrey", backgroundColor: "none"}}  />
    
    </div>
  );
  
}

export default BackToTopButton
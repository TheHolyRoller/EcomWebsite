import {useState, useEffect, useReducer, useRef} from 'react'

import S from '../Styles/Signup.module.css'; 

import '@fortawesome/fontawesome-svg-core'; 
import '@fortawesome/free-regular-svg-icons'; 
import '@fortawesome/react-fontawesome'; 
import '@fortawesome/fontawesome-svg-core'

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import { addDoc, getFirestore, collection } from 'firebase/firestore';
import { dataBase } from '../utilities/ChatComponent';
import { app } from '../utilities/ChatComponent'; 

  
  
  function Signup() {
    const [input, setInput] = useState(""); 
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validateEmail = (input) => {

  if (!input || !emailPattern.test(input)) {
    return false;
  }
  return true;
  
};


    const inputHandler = (e) => {

        setInput(e.target.value); 
        
      }

      const handleSubmit  =  async (e) => {
        e.preventDefault(); 
        if (validateEmail(input)) {
          await  addDoc(collection(dataBase,  "newCollection"), {
                email: input, 

            }).then({
              
            // setInput("")
              
            })
            
            setInput(""); 
        alert("Email submitted successfully!");
        }
       else {
        // Show an error message
        alert("Please enter a valid email.");
      }

        
      }
      
      
      // Define a function to handle the input change event
  const handleChange = (e) => {
    // Set the input state to the value of the input field
    setInput(e.target.value);
  };
      
      
      const handleKeyPress = (e) => {
        // Check if the enter key is pressed and the input is valid
        if (e.key === "Enter" && validateEmail(input)) {
          // Trigger the submit event
          handleSubmit(input);
        }
      };
    
console.log(input);

  return (
    <div className={S.mainContainer} style={{marginTop: "1.5rem"}}  >
    <div className={S.formContainer}>
    <form onSubmit={handleSubmit } className={S.form}>
    <div className={S.inputContainer}>
  <div className={S.SVGContainer} style={{backgroundColor: "none", transform: "translate(-7px, 0px)"}} >
  <FontAwesomeIcon icon={faEnvelope} />
  </div>
    <input className={S.newsletterInput}  type='text' placeholder='Email'   onChange={inputHandler} value={input}></input>
    </div>
    </form>
    </div>
    </div>
  );
  
}

export default Signup

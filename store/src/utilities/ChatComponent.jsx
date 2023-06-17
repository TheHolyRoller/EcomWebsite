// import React, { useState, useEffect, useRef } from "react";
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs, query, orderBy, limit } from "firebase/firestore";
// import { useSelector, useDispatch } from 'react-redux';
// import ChatBox from "./ChatBox";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import { Link, useParams } from 'react-router-dom'; // import the Link component from react-router-dom
// import { myURLID } from "../components/ImageMag";
// import Message from "./Message";
// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';
// import StarIcon from '@mui/icons-material/Star';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import { nanoid } from "nanoid";
// import { modifiedPath } from "./SendMessage"; 
// const firebaseConfig = {
//   apiKey: "AIzaSyD0pOTf8ypx1kHf89oEnCwSUoDeEGl5rBs",
//   authDomain: "reactchat-c3991.firebaseapp.com",
//   projectId: "reactchat-c3991",
//   storageBucket: "reactchat-c3991.appspot.com",
//   messagingSenderId: "896740966457",
//   appId: "1:896740966457:web:9e89ab17fe5e16ff8a4de8",
//   measurementId: "G-98KYVKB7Q3"
// };
// let collectionID
// const myID = 'message'; 
// if(modifiedPath){
//   collectionID = modifiedPath; 
// }
// else{
//   collectionID = myID; 
// }
// const chatApp = initializeApp(firebaseConfig);
//  export const dataBase = getFirestore(chatApp);
// const messagesRef = collection(dataBase, collectionID );
// const querySnapshot = await getDocs(messagesRef);
// function ChatComponent() {
//   const [count, setCount] = useState(0)
//   const [productID, setProductID] = useState("");
//   const [rating, setRating] = useState(); 
//   const handleChange = (event, newValue) => {
//     setRating(newValue);
//   };
//   var refresh = window.localStorage.getItem('refresh');
// let loaded = window.localStorage.getItem('loaded');
// var timeoutID;
// function clearRefresh() {
//   localStorage.removeItem('refresh');
//   clearTimeout(timeoutID);
// }
// if (refresh === null) {
// }
// setTimeout(clearRefresh, 2000);
// const messageArray = []; 
//   querySnapshot.forEach((doc) => {
//     messageArray.push( doc.data()); 
//     console.log("THIS IS THE MESSAGES ARRAY"); 
//     console.log(messageArray); 
//   });
//   return (
//     <div className="ChatComponent">
//     <ChatBox/>
//     <Box>
//       <Box display="flex" alignItems="center">
//       </Box>
//       <Box>
//         {messageArray.map((review, index) => (
//         <Stack spacing={5}>
//         <Box  >
//          <Typography style={{marginTop: "3rem"}}  variant="body1"> USER: {review.user}</Typography>
//           <Box key={index} display="flex" alignItems="center">
//             <Rating
//               name={`review-${index}`}
//               value={review.rating}
//               readOnly
//               icon={<StarIcon fontSize="large" />}
//               />
//             <Divider />
//           </Box>
//           <Typography  variant="body1">{review.message}</Typography> 
//         </Box>
//               </Stack>
//         ))}
//       </Box>
//     </Box>
//     </div>
//   )
// }
// export default ChatComponent; 







import React, { useState, useEffect, useRef } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { useSelector, useDispatch } from 'react-redux';
import ChatBox from "./ChatBox";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link, useParams } from 'react-router-dom'; // import the Link component from react-router-dom
import { myURLID } from "../components/ImageMag";
import Message from "./Message";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { nanoid } from "nanoid";
import { modifiedPath } from "./SendMessage"; 
const firebaseConfig = {
  apiKey: "AIzaSyD0pOTf8ypx1kHf89oEnCwSUoDeEGl5rBs",
  authDomain: "reactchat-c3991.firebaseapp.com",
  projectId: "reactchat-c3991",
  storageBucket: "reactchat-c3991.appspot.com",
  messagingSenderId: "896740966457",
  appId: "1:896740966457:web:9e89ab17fe5e16ff8a4de8",
  measurementId: "G-98KYVKB7Q3"
};
let collectionID
const myID = 'message'; 
if(modifiedPath){
  collectionID = modifiedPath; 
}
else{
  collectionID = myID; 
}
const chatApp = initializeApp(firebaseConfig);
 export const dataBase = getFirestore(chatApp);
const messagesRef = collection(dataBase, collectionID );

function ChatComponent() {
  const [count, setCount] = useState(0)
  const [productID, setProductID] = useState("");
  const [rating, setRating] = useState(); 
  const [messageArray, setMessageArray] = useState([]); // state for the message array
  const handleChange = (event, newValue) => {
    setRating(newValue);
  };
  
  useEffect(() => {
    // fetch the data in a useEffect hook
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(messagesRef); // await the promise
        const messages = []; // create an array to store the messages
        querySnapshot.forEach((doc) => {
          messages.push( doc.data()); // push each message to the array
          console.log("THIS IS THE MESSAGES ARRAY"); 
          console.log(messages); 
        });
        setMessageArray(messages); // update the state with the array
      } catch (error) {
        console.error(error); // handle any errors
      }
    }
    fetchData(); // call the async function
  }, []); // run only once on mount

  return (
    <div className="ChatComponent">
    <ChatBox/>
    <Box>
      <Box display="flex" alignItems="center">
      </Box>
      <Box>
        {messageArray.map((review, index) => (
        <Stack spacing={5}>
        <Box  >
         <Typography style={{marginTop: "3rem"}}  variant="body1"> USER: {review.user}</Typography>
          <Box key={index} display="flex" alignItems="center">
            <Rating
              name={`review-${index}`}
              value={review.rating}
              readOnly
              icon={<StarIcon fontSize="large" />}
              />
            <Divider />
          </Box>
          <Typography  variant="body1">{review.message}</Typography> 
        </Box>
              </Stack>
        ))}
      </Box>
    </Box>
    </div>
  )
}
export default ChatComponent; 




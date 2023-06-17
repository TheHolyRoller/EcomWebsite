// Import React and Material UI components
import React, { useState, useCallback } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Link from '@mui/material/Link';



import { dataBase } from "../utilities/ChatComponent";
import Filter from "bad-words";
const filter = new Filter();
const ContactForm = () => {
  const classes = 'myclass';
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError("");
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    }
    if (!phone) {
      setPhoneError("Phone number is required");
      isValid = false;
    } else if (!/^\d{1,20}$/.test(phone)) {
      setPhoneError("Phone number is invalid");
      isValid = false;
    }
    if (!message) {
      setMessageError("Message is required");
      isValid = false;
    } else if (message.length > 500) {
      setMessageError("Message is too long");
      isValid = false;
    } else if (filter.isProfane(message)) {
      setMessageError("Message contains profanity");
      isValid = false;
    }
    if (isValid) {
      dataBase.ref("contacts").push({
        name,
        email,
        phone,
        message,
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      alert("Your message has been sent. Thank you!");
    }
  };
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
      <Link href="/contact" style={{textDecoration: "none", color: "#9ca6b1"}}>

        Contact Us
          </Link>
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={name} 
          onChange={handleNameChange}
          error={!!nameError}
          helperText={nameError}
          className={classes.field}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
          className={classes.field}
          required
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          value={phone}
          onChange={handlePhoneChange}
          error={!!phoneError}
          helperText={phoneError}
          className={classes.field}
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          value={message}
          onChange={handleMessageChange}
          error={!!messageError}
          helperText={messageError}
          className={classes.field}
          multiline
          rows={4}
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Send
        </Button>
      </form>
    </div>
  );
};
export default ContactForm;
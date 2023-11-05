
import {  Container, Typography } from "@mui/material";

import * as React from 'react';
import {  List, ListItem, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { spacing } from '@mui/system';



import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';


import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

import { palette } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles'; 
import { StyledEngineProvider } from "@mui/material/styles";
import Nav from 'react-bootstrap/Nav';


import { Box } from '@mui/material';


import { IconContext } from "react-icons";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Signup from "./Signup";



import { InstagramEmbed } from "react-social-media-embed";
import { TwitterEmbed } from "react-social-media-embed";
import { FacebookEmbed } from 'react-social-media-embed';

import FooterStyle from '../Styles/Footer.module.css'; 


const Links = [
    { titlePage: "Client", path: "/" },
    { titlePage: "Product", path: "/product" },
    { titlePage: "Settings", path: "/settings" },
  ];

  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  
  

 

function Footer() {

  const query = "(max-width: 768px)";

  // Create a MediaQueryList object
  const mql = window.matchMedia(query);

  // Check if the media query matches
  const isSmallScreen = mql.matches;


  let height;
  let overflow; 
  if (isSmallScreen) {
    // Set the height to 17% of the viewport height for small screens
    height = '37vh';
    overflow = "hidden"; 
    
  }
  
  
  else {
    
    // Set the height to 25% of the viewport height for large screens
    height = 'auto';
    overflow = "scroll"; 
    
}


  return (
  <>
  
  
    <Paper style={{ width: "100vw", marginBottom: "-20vh", marginTop: "13vh",  padding: "0"}}  className="paper" sx={{background: "#0a1929", color: "#ffffff"}}    >
      <Grid  sx={{m: 2, background: "#001e3b"}} style={{}}  container rowSpacing={ {xs: 1, md: 2}} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
          <Grid sx={{background: "#001e3b"}}  style={{ height}}  xs={12} sm={4}  >
          <Item sx={{background: "#001e3b", color: "#ffffff"}}   style={{minHeight: "50vh"}} >

          <ButtonBase style={{margin: "0 auto"}} >
           <h2>
            Categories
           </h2> 

          </ButtonBase>
          <Grid item sm container >
          

          <Grid item xs container direction="column" spacing={2} >
          <Grid sx={{color: "#9ca6b1"}} item xs>
          <Typography  gutterBottom variant="subtitle1" component="div" style={{fontSize: "1.2rem"}} >

                <Link className={FooterStyle.pageLink}  href="/cancel" style={{textDecoration: "none", color: "#9ca6b1"}} >

                OutDoor Gear 
                
                </Link>

                
              </Typography>
              <Typography variant="body2" gutterBottom style={{fontSize: "1.2rem"}} >
                 
                 <Link className={FooterStyle.pageLink}  href="/cancel" style={{textDecoration: "none"}} >
                  
                 Dress Shoes
                
                </Link>

              </Typography> 
              <Typography variant="body2" style={{fontSize: "1.2rem"}} >
                <Link className={FooterStyle.pageLink}  href="/cancel" style={{textDecoration: "none"}} >
                  
                Women's Clothing 
                
                </Link>
                
                
              </Typography>
            
          </Grid>
            
            
          </Grid>
          </Grid>
          
          </Item>
        </Grid>
        <Grid xs={12} sm={4} style={{ height}}  >
        <Item sx={{background: "#001e3b", color: "#9ca6b1"}}   style={{minHeight: "50vh"}} >

          <ButtonBase style={{margin: "0 auto"}} >
           <h2 style={{color: "#ffffff"}} >
           Useful Links 

           </h2> 

          </ButtonBase>
          <Grid item sm container style={{}}  >
          
          {/* Add in the next grid container here  */}
          <Grid item xs container direction="column" spacing={2} >
          <Grid item xs>
          <Typography gutterBottom variant="subtitle1" component="div" style={{fontSize: "1.2rem"}} >

          <Link className={FooterStyle.pageLink}  href="/privacypolicy" style={{textDecoration: "none"}} >
            Privacy Policy 
          </Link>
            
              </Typography>
              <Typography variant="body2" gutterBottom style={{fontSize: "1.2rem"}} >
              <Link className={FooterStyle.pageLink}   href="/contact" style={{textDecoration: "none"}}>
                Contact Us! 
          
          </Link>
                </Typography> 
              <Typography variant="body2" gutterBottom style={{fontSize: "1.2rem"}} >
          <Link className={FooterStyle.pageLink}  href="/terms" style={{textDecoration: "none"}}>
                Terms & Conditions 
          </Link>

              </Typography> 
              
          </Grid>
            
          </Grid>
          </Grid>
          
          <ButtonBase style={{margin: "0 auto", color: "#ffffff"}} >
           <h2 >
            Social Media 
           </h2> 
          </ButtonBase>
          
          
          <Grid item sm container  >
          <Grid item xs container direction="column" spacing={2} >
            
            
            <Typography style={{marginTop: "0.6rem"}} >

            <a   href="https://www.facebook.com/react" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={FooterStyle.socialMediaLink}  style={{fontSize: "1.7rem", color: "#66b2ff", marginRight: "1rem", display: "inline"}}/>
            </a>
            <a href="https://www.twitter.com/react" target="_blank" rel="noopener noreferrer">

            <FaTwitter className={FooterStyle.socialMediaLink}  style={{fontSize: "1.7rem", color: "#66b2ff", marginRight: "1rem", display: "inline"}}  />
            </a>
            
            <a href="https://www.twitter.com/react" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={FooterStyle.socialMediaLink}  style={{fontSize: "1.7rem", color: "#66b2ff", marginRight: "0rem", display: "inline"}} />
            </a>
            
            
            
            </Typography>
          </Grid>
          </Grid>
          
          
          </Item>
        </Grid>
        <Grid xs={12} sm={4} style={{ height, overflow}}  >
          <Item sx={{background: "#001e3b", color: "#ffffff"}}   style={{minHeight: "50vh"}} >
          <ButtonBase style={{margin: "0 auto"}} >
           <h2>
            Subscribe to our newsletter and get 10% off
           </h2> 

          </ButtonBase>

            <Grid item  container sx={{}} style={{ display: "grid", justifiyContent: "center"}}   >
           <Signup/>

            </Grid>
          </Item>
        </Grid>
      
      </Grid>

          </Paper>
  </>
  )
}

export default Footer

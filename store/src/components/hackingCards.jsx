

            import * as React from 'react';
            import Card from '@mui/material/Card';
            import CardContent from '@mui/material/CardContent';
            import CardMedia from '@mui/material/CardMedia';
            import Typography from '@mui/material/Typography';
            import { Button, CardActionArea, CardActions } from '@mui/material';
            import { Container, Form, Row, Col } from 'react-bootstrap';
            import { Link, useParams } from 'react-router-dom'; // import the Link component from react-router-dom

            import Paper from '@mui/material/Paper';
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

            import CssBaseline from '@mui/material/CssBaseline';

            import { Box } from '@mui/material';

            import { CartContext } from '../CartContext';

            import { useContext, useRef, useEffect, useState } from 'react';

            import { hackingPRODUCTS} from '../Data/hackingProducts'; 

            
            import cardStyle from '../Styles/CardStyles.module.css'; 

            const HackingCards = (props) => {


            console.log("this is the props id"); 
            console.log(props.id); 
            
            const cart = useContext(CartContext);
            
            const cardRefs = useRef([]);
            
            const [selectedId, setSelectedId] = useState(null);
            
            const productId = useParams();    
            
            const product = props.product; 
            
            
            console.log("this is the PRODUCT"); 
            console.log(product); 
            
            
            const productQuantity = cart.getProductQuantity(product.id);
            
            
            console.log("this is the PRODUCT QUANTITY !!!!!"); 
            console.log(productQuantity); 
            
            

            useEffect(() => {
                cardRefs.current.forEach(ref => console.log(ref));

            }, [selectedId]);

            // A function that assigns a ref object to the card element based on the item id
            const assignRef = (element, id) => {
                if (element) {
                cardRefs.current[id - 1] = element;
                }
            };
            
            
            const handleClick = (id) => {
                setSelectedId(id);
                
                console.log("this is the selected ID *(*"); 
                console.log(selectedId); 
                
            };
                return (
                <>
                <CssBaseline />
                <Paper id={cardStyle.gridSection}  position="sticky"  className="paper" sx={{background: "#0a1929", mt: 4, color: "#ffffff"}} style={{maxWidth: "95vw", dispaly: "grid", justifyContent: "center"}}  >
                {/*  */}
                <Grid  sx={{m: 3, background: "#001e3b"}} style={{minHeight: "30vh", maxWidth: "90vw", display: "flex", justifyItems: "center"   }}  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid sx={{background: "#001e3b"}}  style={{minHeight: "30vh", display: 'flex', width: "100%", justifyItems: "center"}}  xs={12} sm={4}>
                <Card style={{ margin: "2rem auto" }}    key={props.id}
                    ref={(element) => assignRef(element, props.id)} // assign a ref object to the card element
                    className={props.productClass}
                    onClick={() => handleClick(props.id)}   sx={{ maxWidth: 345, width: 300, margin: 4 }}  >
                        <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={props.image}
                            alt="green iguana"
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {props.name }
                            </Typography>
                            <Typography variant="body2" color="text.secondary" style={{fontSize: "1.1rem", color: "black" }} >
                            ${props.price}
                            
                            </Typography>
                        <Link to={`/${props.id}`}> View Details </Link> 
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                        
                        </Button>
                        </CardActions>
                        
                        { productQuantity > 0 ?
                                <>
                                    <Form as={Row}>
                                        <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                                        <Col sm="6">
                                            <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                            <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                                        </Col>
                                    </Form>
                                    <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                                </>
                                :
                                <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                            }
                    </Card>
                </Grid>
                </Grid>
                </Paper>
                            </>
                    )
            }

            export default HackingCards; 
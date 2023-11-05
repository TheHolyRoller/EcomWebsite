
import { createContext, useState } from "react";

import { productsArray, getProductData } from "./Data/products";


import  useLocalStorage  from './hooks/useLocalStorage'; 

import useSessionStorage from './hooks/useSessionStorage'; 



export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {

    const [cartProducts, setCartProducts] = useSessionStorage( [], []);
    
    


    function getProductQuantity(id) {
    
        console.log("this is the props ID !!!!!!!"); 
        console.log(id); 
        
    
        // Why this throwing an error and saying it's not a function 
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        console.log("this is the quantity from CART CONTEXT"); 
        console.log(quantity); 
        
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { 
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { 

            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                               
                    ? { ...product, quantity: product.quantity + 1 } 
                    : product                                        
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                
                    ? { ...product, quantity: product.quantity - 1 } 
                    : product                                        
                )
            )
        }
    }

    function deleteFromCart(id) {

        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })  
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            console.log("this is the PRODUCT DATA"); 
            console.log(productData); 
            
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
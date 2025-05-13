import { createContext, useContext, useState } from "react";

const cartContext=createContext()

export const CartProvider=({children})=>{
    const [cartItem,setCartItem]=useState([])


    const addToCart = (item) => {
        if (!cartItem.find(cart => cart.id === item.id)) {
            setCartItem([...cartItem, item]);
        }
        else  {
            alert("Already Having a Cart")
        }
    };

   const removeFromCart = (item) => {
   setCartItem(cartItem.filter((apple) => apple.id !== item.id));
    };

    return (
        <cartContext.Provider value={{cartItem,addToCart,removeFromCart}}>
            {children}
        </cartContext.Provider>
    )

}

export const useCart=()=>{
    return useContext(cartContext)
}
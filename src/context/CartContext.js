import { createContext, useState } from "react";
import React from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const addProductToCart = (product) => {
        
        if(!isInCart(product.id)){
            setCartProducts(cartProducts => [...cartProducts, product]);
            localStorage.setItem("cart", JSON.stringify([...cartProducts, product]));
        } else {

            const prod = cartProducts.find((p) => p.id === product.id);
            const { quantity } = prod;
            
            prod.quantity = product.quantity + quantity;
            const newCart = [ ...cartProducts ];
            setCartProducts(newCart);

            localStorage.setItem("cart", JSON.stringify(newCart));
        }
        
    }

    const removeItem = (id) => {
        setCartProducts(cartProducts.filter(p => p.id !== id));
        const newCart2 = cartProducts.filter(p => p.id !== id) ;
        localStorage.setItem("cart", JSON.stringify(newCart2));
    }

    const clear = () => {
        setCartProducts([])
        localStorage.clear()
    }

    const isInCart = (id) => {
        return cartProducts.find(cartProduct => cartProduct.id === id)
    }

    const totalCart = () => {
        return cartProducts.reduce((acum, item) => acum = acum + (item.price * item.quantity), 0)

    }

    const cantCart = () => {
        return cartProducts.reduce((acum, item) => acum += item.quantity, 0)
    }

    const data = {
        cartProducts,
        addProductToCart,
        removeItem,
        clear,
        totalCart,
        cantCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
import { createContext, useState } from "react";
import React from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    console.log({cartProducts})

    const addProductToCart = (product) => {
        
        // let existe = cartProducts.find(cartProduct => cartProduct.id === product.id)

        if(!isInCart(product.id)){
            // console.log("Producto a agregar:", product)
            return setCartProducts(cartProducts => [...cartProducts, product])
        } else {

            const prod = cartProducts.find((p) => p.id === product.id);
            const { quantity } = prod;
            
            prod.quantity = product.quantity + quantity;
            const newCart = [ ...cartProducts ];
            setCartProducts(newCart);
        }
    }

    const removeItem = (id) => {
        console.log("Remove item")
        setCartProducts(cartProducts.filter(p => p.id !== id));
    }

    const clear = () => {
        setCartProducts([])
        console.log("Clear carrito")
    }

    const isInCart = (id) => {
        return cartProducts.find(cartProduct => cartProduct.id === id)
    }

    const data = {
        cartProducts,
        addProductToCart,
        removeItem,
        clear
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
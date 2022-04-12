import React from "react";
import { useContext } from 'react';
import '../../src/App.css';
import CartContext from "../context/CartContext";

const CartPage = () => {
    const { addProductToCart, cartProducts, removeItem, clear } = useContext(CartContext)
    
    return(
        cartProducts.length > 0 ? (
            <div className="App">
                <h1> Carrito </h1>

                {cartProducts.map(product => (

                    <div key={ product.id } className="row">
                        <div className="col-md-4">
                            <h2> {product.title}</h2>
                            <p> Precio: $ {product.price}</p>
                            <p> Cantidad: { product.quantity}  </p>
                        </div>

                        <div className="col-md-4">
                            <button className="btn-sm btn-danger"
                                    onClick={() => removeItem(product.id)}>
                                Eliminar
                            </button>
                        </div>
                    </div>
            
                ))} 

                <div>
                    <button className="btn btn-danger" onClick={clear}>Vaciar carrito</button>
                </div>

            </div>
            ) : (
                <div>
                    <h1> Carrito </h1>
                    <h3> No hay productos en el carrito </h3>
                </div>
            )
    );
}

export default CartPage
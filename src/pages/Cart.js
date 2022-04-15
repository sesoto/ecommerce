import React from "react";
import { useContext } from 'react';
import '../../src/App.css';
import CartContext from "../context/CartContext";
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { addProductToCart, cartProducts, removeItem, clear, totalCart, cantCart } = useContext(CartContext)
    
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
                    <h4> Cantidad de Líneas de Productos: { cartProducts.length } </h4>
                </div>
                
                <div>
                    <h4> Cantidad Total de Productos: { cantCart() } </h4>
                </div>

                <div>
                    <h2> Total: $ { totalCart() } </h2>
                </div>

                <div>
                    <button className="btn btn-danger" onClick={clear}>Vaciar carrito</button>
                </div>

            </div>
            ) : (
                <div>
                    <h1> Carrito </h1>
                    <h3> No hay productos en el carrito </h3>
                    <Link to={`/productos`}>   
                        <button> Ir a Productos </button>  
                    </Link>
                </div>
            )
    );
}

export default CartPage
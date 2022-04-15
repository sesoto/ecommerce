import React from "react";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from "../../context/CartContext";

function ItemDetail({ item }) {
    
    const { id, title, description, price, pictureUrl, stock } = item
    const [goToCart, setGoToCart] = useState(false)
    const { addProductToCart, cartProducts } = useContext(CartContext)

    // Agregar al carrito
    const onAdd = (qt) => {
        setGoToCart(true)
        console.log("Cantidad:",qt)
        addProductToCart({...item, quantity: qt})
        //console.log("Todos los productos agregados:", cartProducts) 
    }

    return(
        <div>
            <p> {id} </p>
            <h2> {title} </h2>
            <p> {description} </p>
            <p>Precio : {price} </p>
            <img src={`../img/${pictureUrl}`} alt={pictureUrl} width="300"/>

            {!goToCart 
            ?
            <div>
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            </div>
            :
            <div>
                <Link to={`/carrito`}> 
                    <button> Terminar mi compra </button>   
                </Link>    

                <Link to={`/productos`}>   
                    <button> Seguir comprando </button>  
                </Link>   
            </div>       
            }
        </div>
    ) 
   }
  
  export default ItemDetail
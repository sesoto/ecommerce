import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom';

function ItemDetail({ item }) {
    
    const { id, title, description, price, pictureUrl, stock } = item
    const [goToCart, setGoToCart] = useState(false)

    // Agregar al carrito
    const onAdd = (quantity) => {
        setGoToCart(true)
        console.log("Cantidad:",quantity)
    }

    return(
        <div className="card-item">
            <p> {id} </p>
            <h2> {title} </h2>
            <p> {description} </p>
            <p>Precio : {price} </p>
            <img src={`../img/${pictureUrl}`} alt={pictureUrl} width="500"/>

            {!goToCart 
            ?
            <div>
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            </div>
            :
            <div>
                <Link to={`/carrito`}> 
                    <button> Ir al carrito </button>   
                </Link>           
            </div>    
            }
        </div>
    ) 
   }
  
  export default ItemDetail
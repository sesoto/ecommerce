import React from "react";

export default function Item({ item }) {

    const { id, title, price, pictureUrl } = item

    return(
        <div className="card-item">
            <p> {id} </p>
            <h2> {title} </h2>
            <p>Precio : {price} </p>
            <img src={`../img/${pictureUrl}`} alt={pictureUrl} width="200px"/>
            {console.log(`./img/${pictureUrl}`)}
            <div>
                <button> Comprar </button>              
            </div>
        </div>
    ) 
   }
   
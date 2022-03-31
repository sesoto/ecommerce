import React from "react"

function ItemDetail({ item }) {
    
    const { id, title, description, price, pictureUrl } = item

    return(
        <div className="card-item">
            <p> {id} </p>
            <h2> {title} </h2>
            <p> {description} </p>
            <p>Precio : {price} </p>
            <img src={`../img/${pictureUrl}`} alt={pictureUrl} width="500"/>
            {console.log(`./img/${pictureUrl}`)}
            <div>
                <button> Comprar </button>              
            </div>
        </div>
    ) 
   }
  
  export default ItemDetail
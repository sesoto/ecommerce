import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(parseInt(initial));


    const addStock = (e) => {
        setCount(count + 1);
      };
    
      const removeStock = (e) => {

        setCount(count - 1);
      };

    return(
        <div className="card-item">
            <button onClick={addStock} disabled={count >= stock}><AddIcon /></button> 
            <div>{count}</div>
            <button onClick={removeStock} disabled={count <= 0}><RemoveIcon /></button>
            <div>
                <button onClick={()=> onAdd(count)} disabled={count < 1} > Agregar al carrito </button>              
            </div>
        </div>
    )  
}

export default ItemCount
   
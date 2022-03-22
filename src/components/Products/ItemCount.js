import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(parseInt(initial));

    const addStock = () => {
        setCount(count + 1);
      };
    
      const removeStock = () => {
        setCount(count - 1);
      };

    return(
        <div className="card-item">
            <h2>Remera</h2>
            <p>Precio : 100</p>
            <p>Talle : XL</p>
            <button onClick={addStock} disabled={count >= stock}><AddIcon /></button> 
            <div>{count}</div>
            <button onClick={removeStock} disabled={count <= 0}><RemoveIcon /></button>
            <div>
                <button onClick={onAdd(count)} disabled={count < 1} > Comprar </button>              
            </div>

        </div>
    )  
}

export default ItemCount
   
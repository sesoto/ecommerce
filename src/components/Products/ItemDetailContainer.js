import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import Products from '../../utils/productsMock'
import * as React from 'react';

// Ya no se usa

function ItemDetailContainer() {
    
    const [Items, setItems] = useState({})
    const [isLoading, setLoading] = useState(true)

    const getItems = () => new Promise((resolve, reject) => {
            return setTimeout( () => {
                //resolve(MockItem);
                resolve(Products);
        }, 2000);
    }); 

    useEffect( () => {
        setLoading(true)
        getItems().then( (Item) => {
            setItems(Item)
        }).finally( () => {
            setLoading(false)
        })
    }, [])

    return (
        isLoading ? (
        <div> 
            Cargando producto..
        </div> ) 
        : (
            <div> 
                    {/* <p> Item Detail Container </p>  */}
                    <div>
                        {Items.map(product => (
                            <ItemDetail item={product} key={product.id}/>
                        ))}
                </div>
            </div>        
        ))
}

export default ItemDetailContainer

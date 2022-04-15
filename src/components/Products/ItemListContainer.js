import { useState, useEffect } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList'
import Products from '../../utils/productsMock';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const ItemListContainer = () => {

    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };

    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)

    // const {title,price,size,stock} = props
    // const onAdd = (count) => { console.log(`Agregaste ${count} productos al carrito.`) }

    const getProducts = () => new Promise((resolve, reject) => {
            return setTimeout( () => {
                resolve(Products);
        }, 2000);
    }); 


    useEffect( () => {
        setLoading(true)
        getProducts().then( (items) => {
            setItems(items)
        }).finally( () => {
            setLoading(false)
        })
    }, [])

    return (
         isLoading ? (
            <div> 
                <CircularProgress />
            </div> ) 
            : (
                <Grid sx={{ flexGrow: 1 }} container spacing={4}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={spacing}>
                            <ItemList items={items} />
                        </Grid>
                    </Grid>
                </Grid>
            ))
}

export default ItemListContainer
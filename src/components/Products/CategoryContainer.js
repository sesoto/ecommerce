import { useState, useEffect } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList'
import Products from '../../utils/productsMock';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const CategoryContainer = ( categorySelect ) => {

    const category = categorySelect.category
    
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };

    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getProducts = () => new Promise((resolve, reject) => {
            return setTimeout( () => {
                resolve(Products);
        }, 2000);
    }); 

    const filterProductByCategory = (array , category) => {
        console.log(category)
        return array.map( (product, i) => {
            if(product.category == category) {
               return setItems(products => [...products, product]);
            }
        })
    }

    useEffect( () => {
        setLoading(true)
        getProducts().then( (items) => {
            setItems([])
        }).finally( () => {
            setLoading(false)
            category ? filterProductByCategory(Products, category) : setItems(Products)
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

export default CategoryContainer
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';

const ItemListContainer = () => {

    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };

    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getProducts = async() => {
        const itemsCollection = collection(db, 'products')
        const productsSnapshot = await getDocs(itemsCollection)

        const Products = productsSnapshot.docs.map( (doc)=> {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return Products
    }

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
                <Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={spacing}>
                            <ItemList items={items} />
                        </Grid>
                    </Grid>
                </Grid>
            ))
}

export default ItemListContainer
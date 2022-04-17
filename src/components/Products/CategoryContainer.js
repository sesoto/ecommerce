import { useState, useEffect } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList'
import Products from '../../utils/productsMock';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../firebase';

const CategoryContainer = ( categorySelect ) => {

    const category = categorySelect.category
    
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };

    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)

    // const getProducts = () => new Promise((resolve, reject) => {
    //         return setTimeout( () => {
    //             resolve(Products);
    //     }, 2000);
    // }); 

    const getProducts = async() => {
        // const itemsCollection = collection(db, 'products')
        const itemsCollection = query(collection(db, 'products'), where("category","==",category))
        const productsSnapshot = await getDocs(itemsCollection)

        const Products = productsSnapshot.docs.map( (doc)=> {
            console.log(doc.id)
            console.log(doc.data())
            let product = doc.data()
            product.id = doc.id
            console.log("producto: ", product)
            return product
        })
        return Products
    }

    // const filterProductByCategory = (array , category) => {
    //     console.log(category)
    //     return array.map( (product, i) => {
    //         if(product.category == category) {
    //            return setItems(products => [...products, product]);
    //         }
    //     })
    // }

    useEffect( () => {
        setLoading(true)
        getProducts().then( (items) => {
            setItems(items)
        }).finally( () => {
            setLoading(false)
            // category ? filterProductByCategory(Products, category) : setItems(Products)
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
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Products from '../utils/productsMock';
import ItemDetail from '../components/Products/ItemDetail';

const DetailPage = () => {
    const { id, categoria } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(Products, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }
    
    return(
        <ItemDetail item={product}/>
    )
}

export default DetailPage
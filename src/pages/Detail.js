// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Products from '../utils/productsMock';
import ItemDetail from '../components/Products/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import db from "../firebase";
import { async } from '@firebase/util';
import { NavigateBeforeRounded } from '@material-ui/icons';

const DetailPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    const getProduct = async () => {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Data: ", docSnap.data());
            let product = docSnap.data();
            product.id = docSnap.id;
            setProduct(product);
        } else {
            console.log("Data inexistente");
            navigate('/error')
        }
    }

    useEffect( () => {
        getProduct()
        // filterProductById(Products, id)
    }, [id])

    // const filterProductById = (array , id) => {
    //     return array.map( (product) => {
    //         if(product.id == id) {
    //             return setProduct(product)
    //         }
    //     })
    // }
    
    return(
        <ItemDetail item={product}/>
    )
}

export default DetailPage
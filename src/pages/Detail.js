import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from '../components/Products/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import db from "../firebase";
import Footer from '../components/layout/Footer';

const DetailPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    const getProduct = async () => {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let product = docSnap.data();
            product.id = docSnap.id;
            setProduct(product);
        } else {
            navigate('/error')
        }
    }

    useEffect( () => {
        getProduct()
    }, [id])
    
    return(
        <div>
        <ItemDetail item={product}/>
        <Footer />
        </div>

    )
}

export default DetailPage
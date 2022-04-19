import React from "react";
import { useContext, useState } from 'react';
import '../../src/App.css';
import CartContext from "../context/CartContext";
import { Link } from 'react-router-dom';
import ModalCustom from "../components/Modal/Modal";
import Container from '@mui/material/Container';
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const CartPage = () => {
    const { addProductToCart, cartProducts, removeItem, clear, totalCart, cantCart } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',  
        email: '',
    })
    const [ order, setOrder ] = useState(
        {
            buyer : formData,
            items : cartProducts.map( (cartProduct) => {
                return {
                    id : cartProduct.id,
                    title : cartProduct.title,
                    price : cartProduct.price,
                    quantity : cartProduct.quantity
                }
            }),
            total : totalCart()
        }
    )
    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {...order,
            buyer: formData
        }
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccessOrder(orderDoc.id)
        
    }

    const handleChange = (e) => {
        const {value, name} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    // console.log("order Products", order)

    return(
        cartProducts.length > 0 ? (
            <div className="App">
                <h1> Carrito </h1>

                {cartProducts.map(product => (

                    <div key={ product.id } className="row">
                        <div className="col-md-4">
                            <h2> {product.title}</h2>
                            <p> Precio: $ {product.price}</p>
                            <p> Cantidad: { product.quantity}  </p>
                        </div>

                        <div className="col-md-4">
                            <button className="btn-sm btn-danger"
                                    onClick={() => removeItem(product.id)}>
                                Eliminar
                            </button>
                        </div>
                    </div>
            
                ))} 
                
                <div>
                    <h4> Cantidad de Líneas de Productos: { cartProducts.length } </h4>
                </div>
                
                <div>
                    <h4> Cantidad Total de Productos: { cantCart() } </h4>
                </div>

                <div>
                    <h2> Total: $ { totalCart() } </h2>
                </div>

                <div>
                    <button className="btn btn-danger" onClick={clear}>Vaciar carrito</button>
                </div>

                <div>
                    <button className='btn-custom' onClick={() => setOpenModal(true)}>Completar Compra</button>
                </div>  
                
                {console.log("Order:", order)}
                <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                {successOrder ? (
                    <div>
                        <h3>Orden generada correctamente</h3>
                        <p>Su numero de orden es: {successOrder}</p>
                    </div>
                ) : (
                    <>                  
                    <h2>FORM USUARIO</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name='name' placeholder='Nombre' 
                                onChange={handleChange} 
                                value={formData.name}
                            />
                            <input type="number" name='phone' placeholder='Telefono' 
                                onChange={handleChange} 
                                value={formData.phone}
                            />
                            <input type="mail" name='email' placeholder='mail' 
                                onChange={handleChange} 
                                value={formData.email}
                            />

                            <button type="submit">Enviar</button>
                        </form>
                    </>
                )}
                </ModalCustom>      
            </div>
            ) : (
                <div>
                    <h1> Carrito </h1>
                    <h3> No hay productos en el carrito </h3>
                    <Link to={`/productos`}>   
                        <button> Ir a Productos </button>  
                    </Link>
                </div>
            )

    );
}

export default CartPage
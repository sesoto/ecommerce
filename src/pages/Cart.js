import React from "react";
import { useContext, useState } from 'react';
import '../../src/App.css';
import CartContext from "../context/CartContext";
import { Link } from 'react-router-dom';
import ModalCustom from "../components/Modal/Modal";
import Container from '@mui/material/Container';
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import {Paper, Typography, Box, Avatar, Grid, Divider, Button, Stack} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from "@material-ui/core/TextField";
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Footer from '../components/layout/Footer';
  
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

const CartPage = () => {
    const { cartProducts, removeItem, clear, totalCart, cantCart } = useContext(CartContext)
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
        clear()
    }

    const handleChange = (e) => {
        const {value, name} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <>
            <Paper>
                <Box pt={5} px={10}>
                    <Stack
                        direction='row'
                        alignItems='center'
                        sx={{ mb: 2 }}
                        spacing={2}>
                        <ShoppingCartIcon />
                        <Typography
                            variant='h5'
                            sx={{
                                fontWeight: 500,
                            }}>
                            Carrito ({cantCart()})
                        </Typography>
                    </Stack>
                    <Divider sx={{ mb: 5 }} />
                    {cartProducts.length === 0 ? (
                        <Box pb={4}>
                            <Typography
                                variant='h5'
                                sx={{
                                    textAlign: 'center',
                                }}>
                                Tu carrito está vacío
                            </Typography>
                            <Typography
                                variant='body1'
                                sx={{
                                    textAlign: 'center',
                                }}>
                            ¿Que estás esperando? ¡Elegí tu producto favorito!
                            </Typography>
                        </Box>
                    ) : (
                        <>
                            {cartProducts.map(product => (
                                <Box py={2} key={product.id}>
                                    <Grid
                                        container
                                        alignItems='center'
                                        columnSpacing={5}>
                                        <Grid item xs={2} sm={1}>
                                            <Link
                                                to={`/productos/${product.id}`}>
                                                <Avatar
                                                    alt={product.title}
                                                    src={`../img/${product.pictureUrl}`}
                                                    sx={{
                                                        width: 64,
                                                        height: 64,
                                                    }}
                                                    variant='rounded'
                                                />
                                            </Link>
                                        </Grid>
                                        <Grid item xs={10} sm={6}>
                                            <Typography variant='h6'>
                                            {product.quantity} x {product.title}
                                            </Typography>
                                            <Typography
                                                variant='body1'
                                                noWrap
                                                sx={{
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    width: '100%',
                                                }}>
                                                {product.Title}
                                            </Typography>
                                            <Button
                                                variant='text'
                                                color='secondary'
                                                size='small'
                                                startIcon={
                                                    <DeleteOutlineIcon />
                                                }
                                                onClick={() =>
                                                    removeItem(product.id)
                                                }>
                                                Eliminar
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <Typography
                                                variant='h5'
                                                align='right'>
                                                $ {product.price *
                                                    product.quantity}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    {product.length > 0 && (
                                        <Divider sx={{ py: 2 }} />
                                    )}
                                </Box>
                            ))}
                            {cartProducts.length > 0 && (
                                <Stack>
                                    <Box py={4}>
                                        <Typography variant='h5' align='right'>
                                            Total $ {totalCart()}
                                        </Typography>
                                    </Box>
                                    <Divider sx={{ py: 1 }} />
                                    <Box py={4} textAlign='right'>
                                        <Stack spacing={1}>
                                        <Link to='#' onClick={() => setOpenModal(true)} style={{ textDecoration: 'none' }}>
                                            <Button
                                                variant='contained'
                                                color='secondary'
                                                disableElevation>
                                                Completar la compra
                                            </Button>
                                        </Link>
                                        <Link to='#' onClick={clear} style={{ textDecoration: 'none' }}>
                                            <Button
                                                variant='contained'
                                                color='secondary'
                                                disableElevation>
                                                Vaciar Carrito
                                            </Button>
                                        </Link>
                                        </Stack>
                                    </Box>
                                </Stack>
                            )}
                        </>
                    )}
                </Box>
            </Paper>
        
            <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
            {successOrder ? (
                <Container fixed> 
                    <Box sx={{height: 120 }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Orden generada correctamente
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Su numero de orden es: {successOrder}
                        </Typography>
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <ColorButton 
                                variant='outlined'
                                color='secondary'
                                disableElevation
                                fullWidth>
                                Ir al Home
                            </ColorButton >
                        </Link>
                    </Box>                 
                </Container>
            ) : (
                <>    
                 <Box sx={{height: 350 }}>
                    <Container fixed>
                        <h2>Complete los datos del pedido</h2>           
                        <form onSubmit={handleSubmit}>
                            <Grid container alignItems="center" justify="center" direction="column">
                                <Stack spacing={3} direction="column">
                                    <Grid item>
                                        <TextField
                                            required
                                            id="name-input"
                                            name="name"
                                            label="Nombre"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            required
                                            id="phone-input"
                                            name="phone"
                                            label="Telefono"
                                            type="number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            required
                                            id="email-input"
                                            name="email"
                                            label="Email"
                                            type="text"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </Grid>    
                                    
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        type="submit" 
                                        endIcon={<SendIcon />}
                                        disabled={!formData.name || !formData.phone || !formData.email || cartProducts.length == 0}>
                                        Enviar
                                    </Button>
                                </Stack>
                            </Grid>
                        </form>
                    </Container>
                </Box>
                </>
            )}
            </ModalCustom>      
            <Footer />
        </>

    )
}

export default CartPage
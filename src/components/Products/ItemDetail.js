import React from "react";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from "../../context/CartContext";
import { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import {Paper, Box, CardMedia, Typography, Grid, Button} from '@mui/material'
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
  
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

function ItemDetail({ item }) {
    const { title, price, pictureUrl, stock } = item
    const [goToCart, setGoToCart] = useState(false)
    const { addProductToCart } = useContext(CartContext)
    const [isLoading, setLoading] = useState(true)

    const Capitalize = str => {
        if (!str) return ''
        let lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    }

    const onAdd = (qt) => {   
        setGoToCart(true)
        addProductToCart({...item, quantity: qt})
    }

    const getItems = () => new Promise((resolve, reject) => {
        return setTimeout( () => {
            resolve(true);
        }, 2000);
    });

    useEffect( () => {
        setLoading(true)
        getItems().then( () => {
        }).finally( () => {
            setLoading(false)
        })
    }, [])

    return(
        isLoading ? (
            <div> 
                <CircularProgress />
            </div> ) 
            : (
                <Paper>
                    <Box p={5}>
                        <Grid container justifyContent='center' spacing={5}>
                            <Grid item xs={12} sm={3}>
                                <CardMedia
                                    sx={{ maxWidth: 300 }}
                                    component='img'
                                    image={`../img/${pictureUrl}`}
                                    title={pictureUrl}
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                direction='column'
                                spacing={2}
                                xs={12}
                                sm={3}>
                                    <Grid item>
                                        <Typography
                                            variant='h6'>
                                            {title}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant='h4'>
                                            ${price}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant='subtitle2'>
                                            {stock === 0
                                                ? 'Sin stock'
                                                : 'Stock disponible: ' + stock}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        alignItems='center'
                                        spacing={2}>

                                        {!goToCart ?
                                            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                                        :
                                        <Grid item xs={12}>
                                        <Link to={'/carrito'} style={{ textDecoration: 'none' }}>
                                            <Button
                                                variant='outlined'
                                                color='secondary'
                                                disableElevation
                                                fullWidth>
                                                Terminar mi compra
                                            </Button>
                                        </Link>
                                        <Link to={'/productos'} style={{ textDecoration: 'none' }}>
                                            <ColorButton 
                                                variant='outlined'
                                                color='secondary'
                                                disableElevation
                                                fullWidth>
                                                {'Seguir comprando'}
                                            </ColorButton >
                                        </Link>
                                    </Grid> }   
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>


            )) 
   }
  
  export default ItemDetail
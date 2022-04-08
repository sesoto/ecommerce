// import React from "react";
import '../../src/App.css';
import ItemListContainer from "../components/Products/ItemListContainer";
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';

const ProductsPage = () => {
    return(
        <div>
            <h1> Productos </h1>

            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
                }}>

                <ButtonGroup variant="text" aria-label="text button group">
                <Link to={'/camitas'}><Button>CAMITAS</Button></Link>
                <Link to={'/rascadores'}><Button>RASCADORES</Button></Link>
                </ButtonGroup>
            </Box>
      
            <ItemListContainer />
        </div>
    );
}

export default ProductsPage
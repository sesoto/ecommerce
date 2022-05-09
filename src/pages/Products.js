import ItemListContainer from "../components/Products/ItemListContainer";
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import Footer from '../components/layout/Footer';

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

                <ButtonGroup variant="text" aria-label="text button group" sx={{ mt: 2 }}>
                    <Link to={'/camitas'} style={{ textDecoration: 'none' }}>
                        <Button
                            color='secondary'
                            disableElevation
                            fullWidth>
                            CAMITAS
                        </Button>
                    </Link>
                    <Link to={'/rascadores'} style={{ textDecoration: 'none' }}>
                        <Button
                            color='secondary'
                            disableElevation
                            fullWidth>
                            RASCADORES
                        </Button>
                    </Link>
                </ButtonGroup>
            </Box>
      
            <ItemListContainer />
            <Footer />
        </div>
    );
}

export default ProductsPage
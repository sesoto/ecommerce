import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useState } from 'react';
import CartContext from "../../context/CartContext";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import {Avatar} from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

const CartWidget = () => {
    const { cartProducts, cantCart, removeItem } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        cartProducts.length > 0 && (
        <div>
            <ShoppingCartIcon 
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            /> 
            { cantCart() }
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                <p>Carrito de Compras</p>
                <Divider />
                {cartProducts.map( (Product) => {
                    return(
                        <MenuItem key={Product.id}>
                            <div>
                                <Avatar
                                    alt={Product.title}
                                    src={`../img/${Product.pictureUrl}`}
                                    sx={{
                                        width: 64,
                                        height: 64,
                                    }}
                                    variant='rounded'
                                />
                            </div>
                            <div>
                                {Product.title}
                                <span>$ {Product.price}</span>
                            </div>
                            <div>
                                <DeleteIcon onClick={() =>
                                                    removeItem(Product.id)}/>
                            </div>
                        </MenuItem>
                    )
                })}
                
                <Divider />

                <Link to={'/carrito'} style={{ textDecoration: 'none' }}>
                    <ColorButton 
                        variant='outlined'
                        color='secondary'
                        disableElevation
                        fullWidth>
                        Iniciar la compra
                    </ColorButton >
                </Link>
            </Menu>
        </div>
    ))
}

export default CartWidget
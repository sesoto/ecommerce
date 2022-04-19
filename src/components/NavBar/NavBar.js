import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import '../../../src/App.css';
import CartContext from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { cartProducts, cantCart } = useContext(CartContext);
  const [pages, setPages] = useState([]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getRoutes = async() => {
    const routesCollection = collection(db, 'routes')
    const routesSnapshot = await getDocs(routesCollection)
  
    const pagesList = routesSnapshot.docs.map( (doc)=> {
        console.log(doc.data())
        return doc.data()
    })
    console.log(pagesList)
    setPages(pagesList)
  }

  // console.log("Desde el contexto: ",cartProducts);
  useEffect( () => {
    getRoutes()
  }, [])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to={'/'} className="App-link">RELAX CAT</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu} to="/profile">
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            RELAX CAT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',  textDecoration:'none'}}>
                <Link to={page.url} className="App-link">{page.title}</Link>
              </Button>

            ))}
          </Box>
          
            <Box sx={{ flexGrow: 0 }}>

              <Tooltip title="Carrito de Compras">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  <CartWidget />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
  
                {cartProducts.map( (cartProduct) => {
                      return(
                          <MenuItem key={cartProduct.id}>
                              <div>
                                  <img src={`../img/${cartProduct.pictureUrl}`} width="30"/> 
                              </div>
                              <div>
                                  <p>{cartProduct.title}</p>
                                  <span>$ {cartProduct.price}</span>
                              </div>
                              <div>
                                  <DeleteIcon />
                              </div>
                          </MenuItem>
                      )
                  })}   




              </Menu>
            </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

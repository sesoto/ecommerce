import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase';
import '../../../src/App.css';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
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
        return doc.data()
    })
    setPages(pagesList)
  }

  useEffect( () => {
    getRoutes()
  }, [])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Link to={'/'}>
              <img src="../img/logo_small.png" className="img-header"/>
            </Link>

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
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link style={{ textDecoration: 'none' }} to={page.url}>{page.title.toUpperCase()}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                href={page.url}
                sx={{ my: 2, color: 'white', display: 'block',  textDecoration:'none'}}>
                  {page.title.toUpperCase()}
              </Button>

            ))}
          </Box>
          
            <Box sx={{ flexGrow: 0 }}>

              <Tooltip title="Carrito de Compras">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <CartWidget />
                </IconButton>
              </Tooltip>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

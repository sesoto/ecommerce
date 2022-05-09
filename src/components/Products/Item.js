import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

export default function Item ({ item }) {
    const { id, title, price, pictureUrl } = item

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        minWidth: '100%',
        minHeight: '100%',
      });

    return (
      <Box sx={{ minWidth: 300, minHeight: 500}}>
        <Card variant="outlined" sx={{ maxWidth: 300, maxHeight: 450, minHeight: 450 }}>
            <React.Fragment>
                <CardContent>
                    <ButtonBase sx={{ width: 250, height: 250 }} href={`/productos/${id}`}>
                        <Img alt="complex" src={`../img/${pictureUrl}`} />
                    </ButtonBase>
                    <Typography variant="h6" component="div" sx={{ minWidth: 100, minHeight: 65 }}>
                        { title }
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        $ { price }
                    </Typography>
                </CardContent>

                <CardActions style={{ display:'flex', justifyContent:'center' }}>
                <Link to={`/productos/${id}`} style={{ textDecoration: 'none' }}>
                    <ColorButton 
                      variant='outlined'
                      color='secondary'
                      disableElevation
                      fullWidth>
                      Ver
                    </ColorButton >
                </Link>    
                </CardActions>
            </React.Fragment>
        </Card>
      </Box>
    );
  }
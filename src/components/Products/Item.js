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
// import { useState, useEffect } from 'react'
// import CircularProgress from '@mui/material/CircularProgress';

export default function Item ({ item }) {
    const { id, title, price, pictureUrl } = item
    // const [isLoading, setLoading] = useState(true)

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });

    //   const getItems = () => new Promise((resolve, reject) => {
    //     return setTimeout( () => {
    //         //resolve(MockItem);
    //         resolve(true);
    //         }, 2000);
    //     });

    //     useEffect( () => {
    //         setLoading(true)
    //         getItems().then( () => {
    //             console.log("Termino")
    //         }).finally( () => {
    //             setLoading(false)
    //         })
    //     }, [])

    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
            <React.Fragment>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        ID {id}
                    </Typography>

                    <Typography variant="h5" component="div">
                        { title }
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        $ { price }
                    </Typography>

                    {/* <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography> */}
                    
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={`../img/${pictureUrl}`} />
                    </ButtonBase>
                </CardContent>

                <CardActions>
                    <Link to={`/productos/${id}`}>
                        <Button size="small">Ver</Button>
                    </Link>
                </CardActions>
            </React.Fragment>
        </Card>
      </Box>
    );
  }
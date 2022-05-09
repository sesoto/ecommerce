import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Paper, Grid, InputBase, IconButton, Button} from '@mui/material';

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(parseInt(initial));

    const addStock = (e) => {
        setCount(count + 1);
      };
    
      const removeStock = (e) => {

        setCount(count - 1);
      };

    return(
        <Grid
        item
        container
        alignItems='center'
        spacing={2}>
            <Grid item xs={12}>
                <Paper
                    elevation={0}
                    variant='outlined'>
                    <IconButton
                        onClick={removeStock}
                        aria-label='decrease'
                        disabled={count <= 0}
                        size='large'>
                        <RemoveIcon />
                    </IconButton>
                    <InputBase
                        inputProps={{
                            style: {
                                textAlign: 'center',
                            },
                        }}
                        value={
                            stock === 0
                                ? 'Sin stock'
                                : count
                        }
                        readOnly
                    />
                    <IconButton
                        onClick={addStock}
                        aria-label='increase'
                        disabled={count >= stock}
                        size='large'>
                        <AddIcon />
                    </IconButton>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Button
                    variant='contained'
                    color='secondary'
                    disableElevation
                    onClick={()=> onAdd(count)}
                    disabled={count < 1}
                    fullWidth>
                    Agregar al carrito
                </Button>
            </Grid>
        </Grid>
    )
}

export default ItemCount
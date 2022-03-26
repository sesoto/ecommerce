import React from "react";
import Item from "./Item";
import { Grid } from '@mui/material';

export default function ItemList({ items }) {
    return(
        items.map(product => (
            <Grid key={product.id} item>
                <Item item={product} />
            </Grid>
        ))
    )
   }
   
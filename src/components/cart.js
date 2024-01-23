import React from 'react';
import {Grid, Typography} from "@mui/material";


const cart = () => {
  return (
    <Grid>
    <Typography>Home / Shopping Cart</Typography>

    <Grid container columns={12}>
    <Grid coulmns={8} md={12}>
    <Grid coulmns={12}>

    <Grid coulmns={6}>PRODUCT</Grid>
    <Grid columns={2}>PRICE</Grid>
    <Grid columns={2}>QUANTITY</Grid>
    <Grid coulmns={2}>TOTAL</Grid>
    
    </Grid>
    </Grid>



    <Grid coulmns={4} md={12}></Grid>

    
    </Grid>
      
    </Grid>
  )
}

export default cart

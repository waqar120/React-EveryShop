import React from "react";
import { Button, Typography } from "@mui/material";
import { ShoppingCartStyle } from "../Style/ShoppingCartStyle";
import { Grid } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
  const shoppingstyle = ShoppingCartStyle();
  return (
    <Grid>
      <Typography className={shoppingstyle.homeshoppingcart}>
        Home/ Shopping Cart
      </Typography>

      <Grid container lg={12}>
        <Typography className={shoppingstyle.shoppingcart} variant="h4">
          Shopping Cart
        </Typography>
        <Typography className={shoppingstyle.shoppingcart} variant="p">
          Your cart is empty!
        </Typography>
        <Link to="/" className={shoppingstyle.continuebtn}>
          Continue Shopping
          <ArrowRightAltIcon />{" "}
        </Link>
      </Grid>
    </Grid>
  );
};

export default ShoppingCart;

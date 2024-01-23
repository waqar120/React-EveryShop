import React, { useEffect } from 'react';
import { Grid, Typography, Box } from "@mui/material";
import { CartDetailStyle } from '../Style/CartDetailStyle';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { changeQuantity, removeItemCart } from './Redux/cardSlice';
import { useLocation } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';


const CartDetail = () => {
  const location = useLocation();
  const { selectedSize, selectedColor } = location.state || {};
  const dispatch = useDispatch();
  const {carts} = useSelector(state => state.cart);
  const color=useSelector(state => state.color )

  console.log("color is",color)
  console.log(carts);

  const cartstyle = CartDetailStyle();
  useEffect(()=>{
    console.log('Selected Size:', selectedSize);
    console.log('Selected Color:', selectedColor);
  },[])

  if (carts.length === 0) {
    return (
      <div className="container">
       <ShoppingCart/>
      </div>
    );
  }
  return (
    <Grid>
      <Typography sx={{ textAlign: 'left', padding: '50px' }}>Home / Shopping Cart</Typography>

      <Grid sx={{ display: 'flex',}}>
      <Grid columns={8} md={12} style={{ width: '80%', textAlign: 'left', padding: '50px' }}>
       <table>
            <tr style={{ margin: '20px !important' }}>
              <td className={cartstyle.product}><b>PRODUCT</b></td>
              <td className={cartstyle.element}><b>PRICE</b></td>
              <td className={cartstyle.element}><b>QUANTITY</b></td>
              <td className={cartstyle.element}><b>TOTAL</b></td>
            </tr>
            {carts.map((item) => {
              return <tr>
              <td className={cartstyle.product} style={{ display: 'flex', width: '400px' }}>
                <Box><img style={{ width: '100px', height: '100px', padding: '20px' }} src={item.image} alt="Product" /></Box>
                <Box style={{ width: '100%' }}>
                  {/* Assuming that carts is an array and not an object */}
                  <h5>{item.name}</h5>
                  <p>Size: {selectedSize}</p>
                  <p>Color: {selectedColor}</p>
                  <button style={{backgroundColor:'white', border:'none', textDecoration:'underline', fontSize:'14px', color:'grey'}} onClick={() => dispatch(removeItemCart(item.id)) } >Remove</button>
                </Box>
              </td>
              <td className={cartstyle.element}>${item.price}</td>
              <td className={cartstyle.element}>
                <AddIcon onClick={() => dispatch(changeQuantity({id: item.id, quantity: 1}))}/> 
                {item.quantity} 
                
                <RemoveIcon onClick={() => dispatch(changeQuantity({ id: item.id, quantity: -1 }))} />

              </td>
              <td className={cartstyle.element}>${item.totalPrice}</td>
            </tr>
          })}
          </table>
       
       
        </Grid>

        <Grid columns={4} md={12} sx={{ width: "30%", textAlign: 'left', marginTop: '40px' }}>
          <Typography variant='h4'>Order Summary</Typography><br />
          
          <Typography>Sub Total $798.00</Typography><br />
          <Typography variant='p' style={{ color: 'grey' }}>Taxes and shipping calculated at checkout</Typography>
          <button className={cartstyle.checkoutbtn}>CHECK OUT</button>
        </Grid>
      </Grid>

      <Grid columns={12} style={{ textAlign: 'left', padding: '50px' }}>
        <Typography variant='h5'>Promotion Code?</Typography>
        <Box>
          <input type='text' placeholder='Enter coupon code' style={{ height: '40px', width: '300px', border: '1px solid grey', borderRadius: '4px' }} />
          <button className={cartstyle.btnapply}>Apply</button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CartDetail;


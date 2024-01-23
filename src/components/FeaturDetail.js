import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { FeatureDetailStyle } from "../Style/FeatureDetailStyle";
import shoes1 from "../assets/images/shoes1.png";
import shoes5 from "../assets/images/shoes5.png";
import { Button, Grid } from "@mui/material";
import { addItem } from "./Redux/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { CartBtnStyle } from "../Style/CartBtnStyle";
import { useState } from "react";

const FeaturDetail = () => {

  const {
    state: { item },
  } = useLocation();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
 
  console.log(item)

  const cartbtnstyle=CartBtnStyle();
  const dispath = useDispatch();
  const navigate = useNavigate()

  const AddValue = (product) => {
    dispath(addItem(product));
    navigate("/cartdetail",{state:{selectedSize,selectedColor}})
  };
  const isAddToCartDisabled = !selectedColor && !selectedSize;
  const featuredetailstyle = FeatureDetailStyle();
  return (
    <div>
    <Grid container columns={12} spacing={2} sx={{ padding: "80px" }}>
      <Typography className={featuredetailstyle.navline}>
        <span style={{ color: "blue !important" }}>
          <Link to="/">Home </Link>/ Men
        </span>{" "}
        / {item.name}
      </Typography>

      <Grid
        cotainer
        columns={12}
        spacing={2}
        className={featuredetailstyle.section}
      >
        <Grid item lg={6} sm={12} className={featuredetailstyle.imagesection}>
          <img src={item.image} style={{ width: "90%" }} />
          <br />
          <br />
        </Grid>

        <Grid item lg={6} sm={12} className={featuredetailstyle.sectiondetail}>
          <Typography className={featuredetailstyle.sectiontitle}>
            {item.name}
          </Typography>
          <Typography className={featuredetailstyle.price} variant="p">
            <b>${item.price}</b>
          </Typography>
          <Typography className={featuredetailstyle.productcode}>
            {item.productcode}
          </Typography>

          <ul className={featuredetailstyle.featurespec}>
            <li>
              <b>Color: </b>{selectedColor}
            </li>
            <li>
              <b>Size: </b> {selectedSize}
            </li>
          </ul>

          <input
            className={featuredetailstyle.qty}
            type="number"
            placeholder="Qty"
            min='0'
          />
            <Button
              className={featuredetailstyle.btncart}
              onClick={() => AddValue(item)}
              disabled={isAddToCartDisabled}
            >
              Add To Cart
            </Button>
          <Grid spacing={2} className={featuredetailstyle.sizename}>
          {item.sizes.map((size) => (
            <Button  onClick={() => setSelectedSize(size)} style={{margin:'5px', padding:'5px', width:'30px', backgroundColor: size === selectedSize ? "green" : 'white', color: size === selectedSize ? "white" : 'black', border:'1px solid grey', textAlign:'center'}}>{size}</Button>
          ))}
          </Grid>
        
          <Grid spacing={2} className={featuredetailstyle.sizename}>
          
          {item.colors.map((color) => (
            <Button onClick={() => {
              setSelectedColor(color);
            }} style={{margin:'5px', padding:'5px', width:'50px', backgroundColor: color === selectedColor ? "green" : 'white', color: color === selectedColor ? "white" : 'black', border:'1px solid grey', textAlign:'center'}}>{color}</Button>
          ))}
          
          </Grid>

          <Typography className={featuredetailstyle.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            feugiat mi eget elit elementum, id pulvinar tellus eleifend.
            <br />
            Integer porttitor elit id euismod elementum. Nulla vel molestie
            massa, eget iaculis elit. Quisque a tortor vel lectus ultricies
            pretium quis non purus. Pellentesque molestie leo eget rutrum
            tristique.
          </Typography>
        </Grid>
      </Grid>

      <Grid className={featuredetailstyle.productimg} sm={12}>
        <img src={shoes1} className={featuredetailstyle.imgsize} />
        <img src={shoes1} className={featuredetailstyle.imgsize} />
        <img src={shoes5} className={featuredetailstyle.imgsize} />
      </Grid>
    </Grid>
    </div>
  );
};

export default FeaturDetail;

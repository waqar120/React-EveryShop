import React from "react";
import { FeatureStyle } from "../Style/FeatureStyle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import shoes1 from "../assets/images/shoes1.png";
import shoes2 from "../assets/images/shoes2.png";
import shoes3 from "../assets/images/shoes3.png";
import shoes4 from "../assets/images/shoes4.png";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const Feature = () => {
  const navigate = useNavigate()
  const featurestyle = FeatureStyle();
   const featureData=[
    {
      image:shoes1,
      name:'Nike air zoom pegasus 35',
      price: 411.00,
    },
    {
      image:shoes2,
      name:'Mix and match chuck taylor all star',
      price: 798.00,
    },
    {
      image:shoes3,
      name:'Geography class chuck taylor all star',
      price: 250.00,
    },
    {
      image:shoes4,
      name:'Swift run x shoes',
      price: 337.00,
    },
  ];
  const handleDetail = (item) => {
    navigate("/featuredetail", {state: {item}})
  };

  return (
    <Grid container columns={12} spacing={2} style={{ padding: "50px" }}>
      <Typography
        style={{ textAlign: "center", width: "100%", fontSize: "1.61rem" }}
      >
        Featured Products
      </Typography>

      {
        featureData.map((i,index) => (
      <Grid item lg={3} md={6} sm={12} onClick={() => handleDetail(i)} key={index}>
        <Box className={featurestyle.image}>
          <img src={i.image} />
        </Box>
        <Link>
          <Typography className={featurestyle.featurename}>
            <b>{i.name}</b>
          </Typography>
        </Link>
        <Typography
          className={featurestyle.price}
          style={{ textAlign: "left" }}
        >
          <b>${i.price}</b>
        </Typography>
      </Grid>
        ))
      }
    </Grid>
    
  );
};

export default Feature;

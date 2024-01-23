import React from "react";
import { Grid, Hidden, Typography } from "@mui/material";
import { KidsStyle } from "../Style/KidsStyle";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FeatureStyle } from "../Style/FeatureStyle";
import shoes6 from "../assets/images/shoes6.png";
import shoes7 from "../assets/images/shoes7.png";
import shoes8 from "../assets/images/shoes8.png";
import shoes9 from "../assets/images/shoes9.png";
import shoes10 from "../assets/images/shoes10.png";
import shoes11 from "../assets/images/shoes11.png";
import shoes12 from "../assets/images/shoes12.png";
import shoes13 from "../assets/images/shoes13.png";
import shoes14 from "../assets/images/shoes14.png";
import shoes15 from "../assets/images/shoes15.png";

const KidsShop = () => {
  const kidstyle = KidsStyle();
  const featurestyle = FeatureStyle();
  return (
    <Grid>
      <Typography className={kidstyle.homekids}>
        <span style={{ color: "blue" }}>
          <Link to="/"> Home</Link>
        </span>
        /Kids
      </Typography>
      <Grid columns={12} spacing={2}>
        <Typography variant="h2" className={kidstyle.kids}>
          KIDS
        </Typography>
      </Grid>

      <Grid columns={12} sx={{ paddingX: "92px" }} className={kidstyle.shopby}>
        <Grid columns={6}>
          <Typography>
            <b>Shop By</b>
          </Typography>
        </Grid>

        <Grid columns={6} className={kidstyle.sort}>
          <Typography>
            Sort By:
            <select style={{ border: "1px solid grey", height: "30px" }}>
              <option>Please Select</option>
              <option>Price</option>
              <option>Name</option>
            </select>
            <ArrowDownwardIcon style={{ paddingTop: "10px" }} />
          </Typography>
        </Grid>
      </Grid>

      <Grid columns={12} sx={{ display: "flex", paddingX: "100px" }}>
        <Grid columns={3} md={Hidden} textAlign={"left"}>
          <Typography variant="p">PRICE</Typography>
          <br />
          <input className={kidstyle.range} type="range" min="126" max="930" />
          <br />
          <br />
          <Typography className={kidstyle.color} variant="p">
            COLOR
          </Typography>
          <hr />
          <ul className={kidstyle.checklist}>
            <li>
              <Checkbox />
              Pink
            </li>
            <li>
              <Checkbox />
              Red
            </li>
            <li>
              <Checkbox />
              Black
            </li>
            <li>
              <Checkbox />
              White
            </li>
            <li>
              <Checkbox />
              Green
            </li>
            <li>
              <Checkbox />
              Purple
            </li>
            <li>
              <Checkbox />
              Brown
            </li>
            <li>
              <Checkbox />
              Grey
            </li>
            <li>
              <Checkbox />
              Blue
            </li>
          </ul>
          <Typography className={kidstyle.color} variant="p">
            SIZE
          </Typography>
          <hr />
          <ul className={kidstyle.checklist}>
            <li>
              <Checkbox />S
            </li>
            <li>
              <Checkbox />
              XL
            </li>
            <li>
              <Checkbox />L
            </li>
            <li>
              <Checkbox />M
            </li>
            <li>
              <Checkbox />X
            </li>
          </ul>
          <Typography className={kidstyle.color} variant="p">
            BRAND
          </Typography>
          <hr />
          <ul className={kidstyle.checklist}>
            <li>
              <Checkbox />
              Converse
            </li>
            <li>
              <Checkbox />
              Adidas
            </li>
            <li>
              <Checkbox />
              Nike
            </li>
          </ul>
        </Grid>

        <Grid columns={9}>
          <Grid container columns={12} spacing={2} style={{ padding: "10px" }}>
            <Grid item lg={4} md={6} sm={12}>
              <Box className={featurestyle.image}>
                <img src={shoes6} />
              </Box>
              <Link to="/featuredetail">
                <Typography className={featurestyle.featurename}>
                  <b>Nike air zoom pegasus 35</b>
                </Typography>
              </Link>
              <Typography
                className={featurestyle.price}
                style={{ textAlign: "left" }}
              >
                <b>$411.00</b>
              </Typography>
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <Box className={featurestyle.image}>
                <img src={shoes7} />
              </Box>
              <Link to="/featuredetail">
                <Typography className={featurestyle.featurename}>
                  <b>Mix and match chuck taylor all star</b>
                </Typography>
              </Link>
              <Typography
                className={featurestyle.price}
                style={{ textAlign: "left" }}
              >
                <b>$798.00</b>
              </Typography>
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <Box className={featurestyle.image}>
                <img src={shoes8} />
              </Box>
              <Link to="/featuredetail">
                <Typography className={featurestyle.featurename}>
                  <b>Geography class chuck taylor all star</b>
                </Typography>
              </Link>
              <Typography
                className={featurestyle.price}
                style={{ textAlign: "left" }}
              >
                <b>$250.00</b>
              </Typography>
            </Grid>
          </Grid>
          <Grid container columns={12} spacing={2} style={{ padding: "10px" }}>
            <Grid item lg={4} md={6} sm={12}>
              <Box className={featurestyle.image}>
                <img src={shoes9} />
              </Box>
              <Link to="/featuredetail">
                <Typography className={featurestyle.featurename}>
                  <b>Nike air zoom pegasus 35</b>
                </Typography>
              </Link>
              <Typography
                className={featurestyle.price}
                style={{ textAlign: "left" }}
              >
                <b>$411.00</b>
              </Typography>
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <Box className={featurestyle.image}>
                <img src={shoes10} />
              </Box>
              <Link to="/featuredetail">
                <Typography className={featurestyle.featurename}>
                  <b>Mix and match chuck taylor all star</b>
                </Typography>
              </Link>
              <Typography
                className={featurestyle.price}
                style={{ textAlign: "left" }}
              >
                <b>$798.00</b>
              </Typography>
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <Box className={featurestyle.image}>
                <img src={shoes11} />
              </Box>
              <Link to="/featuredetail">
                <Typography className={featurestyle.featurename}>
                  <b>Geography class chuck taylor all star</b>
                </Typography>
              </Link>
              <Typography
                className={featurestyle.price}
                style={{ textAlign: "left" }}
              >
                <b>$250.00</b>
              </Typography>
            </Grid>
          </Grid>
          <Grid container columns={12} spacing={2} style={{ padding: "10px" }}>
            <Grid item lg={4} md={6} sm={12}>
              <Box className={featurestyle.image}>
                <img src={shoes12} />
              </Box>
              <Link to="/featuredetail">
                <Typography className={featurestyle.featurename}>
                  <b>Nike air zoom pegasus 35</b>
                </Typography>
              </Link>
              <Typography
                className={featurestyle.price}
                style={{ textAlign: "left" }}
              >
                <b>$411.00</b>
              </Typography>
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <Box className={featurestyle.image}>
                <img src={shoes13} />
              </Box>
              <Link to="/featuredetail">
                <Typography className={featurestyle.featurename}>
                  <b>Mix and match chuck taylor all star</b>
                </Typography>
              </Link>
              <Typography
                className={featurestyle.price}
                style={{ textAlign: "left" }}
              >
                <b>$798.00</b>
              </Typography>
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <Box className={featurestyle.image}>
                <img src={shoes14} />
              </Box>
              <Link to="/featuredetail">
                <Typography className={featurestyle.featurename}>
                  <b>Geography class chuck taylor all star</b>
                </Typography>
              </Link>
              <Typography
                className={featurestyle.price}
                style={{ textAlign: "left" }}
              >
                <b>$250.00</b>
              </Typography>
            </Grid>
          </Grid>
          <Grid container columns={12} spacing={2} style={{ padding: "10px" }}>
            <Grid item lg={4} md={6} sm={12}>
              <Box className={featurestyle.image}>
                <img src={shoes15} />
              </Box>
              <Link to="/featuredetail">
                <Typography className={featurestyle.featurename}>
                  <b>Nike air zoom pegasus 35</b>
                </Typography>
              </Link>
              <Typography
                className={featurestyle.price}
                style={{ textAlign: "left" }}
              >
                <b>$411.00</b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default KidsShop;

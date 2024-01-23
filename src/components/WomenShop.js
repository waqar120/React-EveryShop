import React, { useEffect, useState } from "react";
import { useTheme, useMediaQuery, colors } from "@mui/material";
import { Grid, Typography, Checkbox, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { KidsStyle } from "../Style/KidsStyle";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { FeatureStyle } from "../Style/FeatureStyle";

const MenShop = ({ data, gender }) => {
  const colours = ['Pink', 'Red', 'Black', 'White', 'Green', 'Purple', 'Brown', 'Grey', 'Blue'];
  const sizes = ['S', 'XL', 'L', 'M', 'X'];
  const brand = ['Converse', 'Adidas', 'Nike'];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();
  const handleDetail = (item) => {
    navigate("/featuredetail", { state: { item } });
  };

  const kidstyle = KidsStyle();
  const featurestyle = FeatureStyle();

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([data])

  const handleColorChange = (colors) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(colors)
        ? prevColors.filter((c) => c !== colors)
        : [...prevColors, colors]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand((prevBrand) =>
      prevBrand.includes(brand)
        ? prevBrand.filter((c) => c !== brand)
        : [...prevBrand, brand]
    );
  };

  const handleSizeChange = (sizes) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(sizes)
        ? prevSizes.filter((s) => s !== sizes)
        : [...prevSizes, sizes]
    );
  };

  useEffect(() => {
    setFilteredProducts(data.filter(product => {
      console.log("selectedColors")
      console.log(selectedColors)
      console.log("product.colors")
      console.log(product)
        return(
        selectedColors.some(color => product.colors.includes(color.trim())) ||
        selectedSizes.some(size =>product.sizes.includes(size.trim())) ||
        selectedBrand.some(brand =>product.brand.includes(brand.trim()))
      ) 
    }))
  }, [selectedColors, selectedSizes, selectedBrand])

  return (
    <Grid>
      <Typography className={kidstyle.homekids}>
        <span style={{ color: "blue" }}>
          <Link to="/">Home</Link>
        </span>
        /{gender}
      </Typography>
      <Grid columns={12} spacing={2}>
        <Typography variant="h2" className={kidstyle.kids}>
          {gender}
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
        {!isSmallScreen && (
          <Grid columns={3} md={12} textAlign={"left"}>
            <Typography variant="p">PRICE</Typography>
            <br />
            <input className={kidstyle.range} type="range" min="126" max="930" />
            <br />
            <br />
            <Typography className={kidstyle.color} variant="p">
              COLOR
            </Typography>
            <hr />
            {colours.map((color) => (
              <ul className={kidstyle.checklist} key={color}>
                <li>
                  <Checkbox
                    checked={selectedColors.includes(color)}
                    onChange={() => handleColorChange(color)}
                  />
                  {color}
                </li>
              </ul>
            ))}
            <Typography className={kidstyle.color} variant="p">
              SIZE
            </Typography>
            <hr />
            {sizes.map((size) => (
              <ul className={kidstyle.checklist} key={size}>
                <li>
                  <Checkbox
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeChange(size)}
                  />
                  {size}
                </li>
              </ul>
            ))}
            <Typography className={kidstyle.color} variant="p">
              BRAND
            </Typography>
            <hr />
            {brand.map((brand) => (
            <ul className={kidstyle.checklist} key={brand}>
              <li>
                <Checkbox 
                checked={selectedBrand.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                />
                {brand}
              </li>
            </ul>
            ))}
          </Grid>
        )}

        <Grid columns={9} md={12}>
          <Grid container columns={12} md={12} spacing={2} style={{ padding: "10px" }}>
            {filteredProducts.map((product, index) => (
              <Grid item lg={4} md={6} sm={12} onClick={() => handleDetail(product)} key={index}>
                <Box className={featurestyle.image}>
                  <img src={product.image} alt={product.name} />
                </Box>
                <Box>
                  <Typography className={featurestyle.featurename}>
                    <b>{product.name}</b>
                  </Typography>
                </Box>
                <Typography className={featurestyle.price} style={{ textAlign: "left" }}>
                  <b>${product.price}</b>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MenShop;

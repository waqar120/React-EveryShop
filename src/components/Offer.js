import React from "react";
import { OfferStyle } from "../Style/OfferStyle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Offer = () => {
  const offerstyle = OfferStyle();
  return (
    <Box className={offerstyle.main}>
      <Box>
        <Box className={offerstyle.discountTitle}>
          <Typography variant="h2" className={offerstyle.discountTitleHeading}>
            Discount 20% For All Orders Over $2000
          </Typography>
          <br />
          <Typography className={offerstyle.caption}>
            Use coupon code{" "}
            <span>
              {" "}
              <b>DISCOUNT20</b>
            </span>
            <br />
            Use coupon DISCOUNT20
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Offer;

import React from "react";
import { LoginStyle } from "../Style/LoginStyle";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const ForgotPassword = () => {
  const loginstyle = LoginStyle();
  return (
    <Box>
      <Typography
        sx={{ textAlign: "left", marginBottom: "50px", marginLeft: "200px" }}
      >
        <Link style={{ textDecoration: "none", color: "blue" }} to="/">
          Home /
        </Link>{" "}
        Reset Password
      </Typography>
      <Grid
        container
        columns={12}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid columns={4}></Grid>

        <Grid
          columns={4}
          lg={5}
          sm={10}
          className={loginstyle.loginbox}
          sx={{ boxShadow: 20 }}
        >
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Enter Your Email Address
          </Typography>
          <input
            className={loginstyle.input}
            type="email"
            placeholder="Email"
            required
          />
          <br />
          <Button className={loginstyle.button} type="btn">
            Forgot Password
          </Button>
          <br />
        </Grid>

        <Grid columns={4}></Grid>
      </Grid>
    </Box>
  );
};

export default ForgotPassword;

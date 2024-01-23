import React from "react";
import { LoginStyle } from "../Style/LoginStyle";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
const Signup = () => {
  const loginstyle = LoginStyle();
  return (
    <Box>
      <Typography
        sx={{ textAlign: "left", marginBottom: "50px", marginLeft: "200px" }}
      >
        <Link style={{ textDecoration: "none", color: "blue" }} to="/">
          Home /
        </Link>{" "}
        Create an account
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
          <Typography variant="h5">Create A New Account</Typography>
          <input
            className={loginstyle.input}
            type="text"
            placeholder="Fullname"
          />
          <br />
          <input
            className={loginstyle.input}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            className={loginstyle.input}
            type="password"
            placeholder="Password"
          />
          <br />
          <Button className={loginstyle.button} type="btn">
            Sign Up
          </Button>
          <br />
          <Typography variant="p" className={loginstyle.forgot}>
            Already have an account?
          </Typography>
          <Link to="/login" variant="p" className={loginstyle.buttoncreate}>
            Login
          </Link>
        </Grid>

        <Grid columns={4}></Grid>
      </Grid>
    </Box>
  );
};

export default Signup;

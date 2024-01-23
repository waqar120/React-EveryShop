import React from "react";
import { LoginStyle } from "../Style/LoginStyle";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const Login = () => {
  const loginstyle = LoginStyle();
  return (
    <Box>
      <Typography
        sx={{ textAlign: "left", marginBottom: "50px", marginLeft: "200px" }}
      >
        <Link style={{ textDecoration: "none", color: "blue" }} to="/">
          Home /
        </Link>{" "}
        Login
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
            Login
          </Typography>
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
            SIGN IN
          </Button>
          <br />
          <Link to="/signup" variant="p" className={loginstyle.buttoncreate}>
            Create an account
          </Link>
          <Link to="/forgotpassword" variant="p" className={loginstyle.forgot}>
            Forgot your password
          </Link>
        </Grid>

        <Grid columns={4}></Grid>
      </Grid>
    </Box>
  );
};

export default Login;

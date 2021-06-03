import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FacebookLoginButton } from "react-social-login-buttons";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import SocialMediaLogin from "../../../SocialMediaLogin";
import Footer from "../../../DashboardModule/FooterFolder/Footer";
import Navbar from "../../../DashboardModule/NavbarFolder/Navbar";
import LoginStyles from "./LoginStyles";
import validate from "../Validate";

function Login() {
  const classes = LoginStyles();
  const [valid, setValid] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValid({
      ...valid,
      [name]: value,
    });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    setErrors(validate(valid));
  };
  return (
    <div>
      <Navbar />
      <Grid>
        <Paper className={classes.paper}>
          <Typography variant="h4">Login to NeoSTORE</Typography>

          <Typography>
            <TextField
              variant="outlined"
              label="Email"
              size="small"
              fullWidth
              className={classes.emailTextField}
              name="email"
              value={valid.email}
              onChange={changeHandler}
              InputProps={{
                endAdornment: <EmailIcon />,
              }}
            />
          </Typography>
          <p>
            {errors && (
              <small className={classes.errorMessage}>{errors.email}</small>
            )}
          </p>

          <Typography>
            <TextField
              variant="outlined"
              label="Password"
              size="small"
              fullWidth
              className={classes.passwordTextField}
              name="password"
              value={valid.password}
              onChange={changeHandler}
              InputProps={{
                endAdornment: <VisibilityOffIcon />,
              }}
            />
          </Typography>

          <Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.login}
              onClick={loginHandler}
            >
              Login
            </Button>
          </Typography>
        </Paper>

        <Link to="/register">
          <Typography>Register</Typography>
        </Link>
        <Link to="/forgotPassword">
          <Typography>Forgot Password</Typography>
        </Link>
      </Grid>
      <SocialMediaLogin />
      <Footer />
    </div>
  );
}

export default Login;

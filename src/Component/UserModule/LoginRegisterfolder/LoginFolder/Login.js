import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import { API } from "../../../../API/api";
import SocialMediaLogin from "../../../SocialMediaLogin";
import Footer from "../../../DashboardModule/FooterFolder/Footer";
import Navbar from "../../../DashboardModule/NavbarFolder/Navbar";
import LoginStyles from "./LoginStyles";
import validate from "./ValidateLogin";

function Login() {
  const classes = LoginStyles();
  const history = useHistory();
  const [visible, setVisible] = useState();
  const visibleOn = <VisibilityIcon />;
  const visibleOff = <VisibilityOffIcon />;

  const visibleHandler = () => {
    setVisible(visible ? false : true);
  };
  const [valid, setValid] = useState({
    email: "",
    password: "",
  });
  const { email, password } = valid;
  const [errors, setErrors] = useState();
  const [open, setOpen] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValid({
      ...valid,
      [name]: value,
    });
  };
  const registerHandler = () => {
    history.push("./register");
  };

  const forgotPasswordHandler = () => {
    const onResponse = {
      success: (res) => {
        console.log(res);
        if (res.success) {
          history.push("./forgotPassword");
        }
      },
      error: (error) => {
        alert("Email error");
      },
    };
    API.forgotPassword(onResponse, email);
  };

  const dialogHandler = () => {
    setOpen(open ? false : true);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const validError = validate(valid);
    if (Object.keys(validError).length !== 0) {
      setErrors(validError);
    } else {
      login();
    }
  };

  function login() {
    const onResponse = {
      success: (res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        if (res.success) {
          history.push("./");
        }
      },
      error: (error) => {
        alert("Invalid Login");
      },
    };
    API.login(onResponse, valid);
  }

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
              type={visible ? "text" : "password"}
              variant="outlined"
              label="Password"
              size="small"
              fullWidth
              className={classes.passwordTextField}
              name="password"
              value={valid.password}
              onChange={changeHandler}
              InputProps={{
                endAdornment: (
                  <i onClick={visibleHandler} className={classes.eyeIcon}>
                    {visible ? visibleOn : visibleOff}
                  </i>
                ),
              }}
            />
          </Typography>
          <p>
            {errors && (
              <small className={classes.errorMessage}>{errors.password}</small>
            )}
          </p>

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

        <Button
          className={classes.registerButton}
          color="primary"
          onClick={registerHandler}
          variant="contained"
        >
          Register
        </Button>

        <Button
          className={classes.forgotPasswordButton}
          color="primary"
          onClick={dialogHandler}
          variant="contained"
        >
          Forgot Password
        </Button>

        <Dialog
          className={classes.dialogBox}
          open={open}
          onClose={dialogHandler}
        >
          <DialogTitle>Enter Registered Email</DialogTitle>
          <DialogContent>
            <Typography className={classes.emailId}>
              Email:
              <TextField
                //className={classes.}
                size="small"
                variant="outlined"
              />
            </Typography>
            <Typography>
              <Button
                className={classes.submitButton}
                color="primary"
                onClick={forgotPasswordHandler}
                variant="contained"
              >
                Submit
              </Button>
            </Typography>
          </DialogContent>
        </Dialog>
      </Grid>
      <SocialMediaLogin />
      <Footer />
    </div>
  );
}

export default Login;

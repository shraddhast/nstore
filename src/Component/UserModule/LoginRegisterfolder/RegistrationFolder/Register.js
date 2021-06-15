import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import { API } from "../../../../API/api";
import Footer from "../../../DashboardModule/FooterFolder/Footer";
import Navbar from "../../../DashboardModule/NavbarFolder/Navbar";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import RegisterStyles from "./RegisterStyles";
import validate from "./ValidateRegister";

function Register() {
  const classes = RegisterStyles();
  const history = useHistory();
  const [visible, setVisible] = useState();
  const [visibility, setVisibility] = useState(false);
  const visibleOn = <VisibilityIcon />;
  const visibleOff = <VisibilityOffIcon />;

  const visibleHandler = () => {
    setVisible(visible ? false : true);
  };
  const visibilityHandler = () => {
    setVisibility(visibility ? false : true);
  };

  const [valid, setValid] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
    mobile: "",
    gender: "",
  });

  const {
    firstName,
    lastName,
    email,
    password,
    confirm_password,
    mobile,
    gender,
  } = valid;
  const [errors, setErrors] = useState();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValid({
      ...valid,
      [name]: value,
    });
  };
  const registerHandler = (e) => {
    e.preventDefault();
    //setErrors(validate(valid));
    const validError = validate(valid);
    if (Object.keys(validError).length !== 0) {
      setErrors(validError);
    } else {
      register();
    }
  };
  const register = () => {
    const onResponse = {
      success: (res) => {
        console.log(res);
        alert("Registration done successfully");
        history.push("./login");
      },
      error: (error) => {
        // alert();
      },
    };
    API.register(onResponse, valid);
  };
  return (
    <div>
      <Navbar />
      <Grid>
        <Paper className={classes.paper}>
          <Typography variant="h4">Register to NeoSTORE</Typography>
          <Typography>
            <TextField
              className={classes.firstName}
              fullWidth
              label="First Name"
              name="firstName"
              onChange={changeHandler}
              size="small"
              variant="outlined"
              value={firstName}
              InputProps={{
                endAdornment: <TextFieldsIcon />,
              }}
            />
          </Typography>
          <p>
            {errors && (
              <small className={classes.errorMessage}>{errors.firstName}</small>
            )}
          </p>

          <Typography>
            <TextField
              className={classes.lastName}
              fullWidth
              label="Last Name"
              name="lastName"
              onChange={changeHandler}
              size="small"
              value={lastName}
              variant="outlined"
              InputProps={{
                endAdornment: <TextFieldsIcon />,
              }}
            />
          </Typography>
          <p>
            {errors && (
              <small className={classes.errorMessage}>{errors.lastName}</small>
            )}
          </p>

          <Typography>
            <TextField
              className={classes.emailTextField}
              fullWidth
              label="Email"
              name="email"
              onChange={changeHandler}
              size="small"
              value={email}
              variant="outlined"
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
              className={classes.passwordTextField}
              fullWidth
              label="Password"
              name="password"
              onChange={changeHandler}
              size="small"
              type={visible ? "text" : "password"}
              value={password}
              variant="outlined"
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
            <TextField
              className={classes.confirm_passwordTextField}
              fullWidth
              label="Confirm Password"
              name="confirm_password"
              onChange={changeHandler}
              size="small"
              type={visibility ? "text" : "password"}
              value={confirm_password}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <i onClick={visibilityHandler} className={classes.eyeIcon}>
                    {visibility ? visibleOn : visibleOff}
                  </i>
                ),
              }}
            />
          </Typography>
          <p>
            {errors && (
              <small className={classes.errorMessage}>
                {errors.confirm_password}
              </small>
            )}
          </p>

          <Typography>
            <TextField
              className={classes.mobile}
              fullWidth
              label="Phone Number"
              name="mobile"
              onChange={changeHandler}
              size="small"
              variant="outlined"
              value={mobile}
              InputProps={{
                endAdornment: <CallIcon />,
              }}
            />
          </Typography>
          <p>
            {errors && (
              <small className={classes.errorMessage}>{errors.mobile}</small>
            )}
          </p>

          <RadioGroup
            aria-label="gender"
            className={classes.radioButton}
            name="gender"
            onChange={changeHandler}
            row={true}
            value={gender}
          >
            <FormControlLabel
              control={<Radio />}
              label="Female"
              value="female"
            />
            <FormControlLabel control={<Radio />} label="Male" value="male" />
            <FormControlLabel control={<Radio />} label="Other" value="other" />
          </RadioGroup>
          <p>
            {errors && (
              <small className={classes.errorMessage}>{errors.gender}</small>
            )}
          </p>

          <Typography>
            <Button
              className={classes.registerButton}
              color="primary"
              onClick={registerHandler}
              variant="contained"
            >
              Register
            </Button>
          </Typography>
        </Paper>
      </Grid>
      <Footer />
    </div>
  );
}

export default Register;

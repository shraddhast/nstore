import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import Footer from "../../../DashboardModule/FooterFolder/Footer";
import Navbar from "../../../DashboardModule/NavbarFolder/Navbar";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import RegisterStyles from "./RegisterStyles";
import validate from "../Validate";

function Register() {
  const classes = RegisterStyles();
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
  const [gender, setGender] = useState();
  const handleChange = (e) => {
    setGender(e.target.value);
  };
  const [valid, setValid] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
    phoneNumber: "",
    radio: "",
  });
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
    setErrors(validate(valid));
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
              value={valid.firstName}
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
              value={valid.lastName}
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
              value={valid.email}
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
              value={valid.password}
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
              className={classes.cPasswordTextField}
              fullWidth
              label="Confirm Password"
              name="cPassword"
              onChange={changeHandler}
              size="small"
              type={visibility ? "text" : "password"}
              value={valid.cPassword}
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
              <small className={classes.errorMessage}>{errors.cPassword}</small>
            )}
          </p>

          <Typography>
            <TextField
              className={classes.phoneNumber}
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              onChange={changeHandler}
              size="small"
              variant="outlined"
              value={valid.phoneNumber}
              InputProps={{
                endAdornment: <CallIcon />,
              }}
            />
          </Typography>
          <p>
            {errors && (
              <small className={classes.errorMessage}>
                {errors.phoneNumber}
              </small>
            )}
          </p>

          <RadioGroup
            aria-label="gender"
            className={classes.radioButton}
            name="radio"
            onChange={handleChange}
            row={true}
            value={gender}
            value={valid.radio}
          >
            <FormControlLabel
              control={<Radio />}
              label="Female"
              value="female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
          <p>
            {errors && (
              <small className={classes.errorMessage}>{errors.radio}</small>
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

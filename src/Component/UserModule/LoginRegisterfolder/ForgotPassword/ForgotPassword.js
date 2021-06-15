import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import { API } from "../../../../API/api";
import Footer from "../../../DashboardModule/FooterFolder/Footer";
import ForgotPasswordStyles from "./ForgotPasswordStyles";
import Navbar from "../../../DashboardModule/NavbarFolder/Navbar";
import validate from "./ValidateForgotPassword";

function ForgotPassword() {
  const classes = ForgotPasswordStyles(false);
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
    verification: "",
    password: "",
    confirm_password: "",
  });
  const { verification, password, confirm_password } = valid;

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValid({
      ...valid,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(valid));

    const validError = validate(valid);
    if (Object.keys(validError).length !== 0) {
      setErrors(validError);
    } else {
      resetPassword();
    }
  };

  function resetPassword() {
    const onResponse = {
      success: (res) => {
        console.log("res", res.success);
        if (res.success) {
          console.log(res);
        }
      },
      error: (error) => {
        alert(error);
      },
    };
    API.resetPassword(onResponse, valid);
  }
  return (
    <div>
      <Navbar />
      <Paper className={classes.paper}>
        <Typography variant="h4">Recover Password</Typography>
        <hr />
        <Typography className={classes.alert}>
          <Typography className={classes.alertMessage}>
            <InfoIcon className={classes.icon} />
            Verification code has been send to your register email id
          </Typography>
        </Typography>

        <Typography>
          <TextField
            className={classes.verificationTextFiled}
            fullWidth
            label="Verification code"
            name="verification"
            onChange={changeHandler}
            size="small"
            variant="outlined"
            value={verification}
          />
        </Typography>
        <p>
          {errors && (
            <small className={classes.errorMessage}>
              {errors.verification}
            </small>
          )}
        </p>
        <Typography>
          <TextField
            className={classes.passwordTextFiled}
            fullWidth
            label="New Password"
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
            className={classes.cPasswordTextFiled}
            fullWidth
            label="Confirm Password"
            name="confirm_password"
            onChange={changeHandler}
            type={visibility ? "text" : "password"}
            size="small"
            variant="outlined"
            value={confirm_password}
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
          <Button
            className={classes.submitButton}
            color="primary"
            onClick={submitHandler}
            variant="contained"
          >
            Submit
          </Button>
        </Typography>
      </Paper>
      <Footer />
    </div>
  );
}

export default ForgotPassword;

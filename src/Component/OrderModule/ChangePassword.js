import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import { API } from "../../API/api";
import GetOrderDetailsStyles from "./GetOrderDetailsStyle";
import validate from "./ValidateChangePassword";
import { useHistory } from "react-router";

function ChangePassword() {
  const classes = GetOrderDetailsStyles();
  const history = useHistory();
  const [visible, setVisible] = useState();
  const [visibility, setVisibility] = useState(false);
  const [visibly, setVisibly] = useState(false);
  const visibleOn = <VisibilityIcon />;
  const visibleOff = <VisibilityOffIcon />;

  const visiblyHandler = () => {
    setVisibly(visibly ? false : true);
  };
  const visibleHandler = () => {
    setVisible(visible ? false : true);
  };
  const visibilityHandler = () => {
    setVisibility(visibility ? false : true);
  };

  const [valid, setValid] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const { password, newPassword, confirmNewPassword } = valid;

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
    changePassword();
  };

  const changePassword = () => {
    const onResponse = {
      success: (res) => {
        if (res.success) {
          alert("Password Changed successfully");
          history.push("./getOrderDetails");
        }
      },
      error: (error) => {},
    };
    API.changePassword(onResponse, valid);
  };
  return (
    <div>
      <Paper className={classes.paperChangePassword}>
        <Typography variant="h4">Change Password</Typography>
        <hr />

        <Typography>
          <TextField
            className={classes.passwordTextFiled}
            fullWidth
            label="Old Password"
            name="password"
            onChange={changeHandler}
            size="small"
            type={visibly ? "text" : "password"}
            value={password}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <i onClick={visiblyHandler} className={classes.eyeIcon}>
                  {visibly ? visibleOn : visibleOff}
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
            className={classes.passwordTextFiled}
            fullWidth
            label="NewPassword"
            name="newPassword"
            onChange={changeHandler}
            size="small"
            type={visible ? "text" : "password"}
            value={newPassword}
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
            <small className={classes.errorMessage}>{errors.newPassword}</small>
          )}
        </p>
        <Typography>
          <TextField
            className={classes.cPasswordTextFiled}
            fullWidth
            label="Confirm Password"
            name="confirmNewPassword"
            onChange={changeHandler}
            type={visibility ? "text" : "password"}
            size="small"
            value={confirmNewPassword}
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
              {errors.confirmNewPassword}
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
    </div>
  );
}

export default ChangePassword;

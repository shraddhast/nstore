import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EditIcon from "@material-ui/icons/Edit";

import GetOrderDetailsStyles from "./GetOrderDetailsStyle";

function AccountCard() {
  const classes = GetOrderDetailsStyles();
  const [open, setOpen] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Shraddha",
    lastName: "Tendulkar",
    gender: "Female",
    DOB: "11/07/1998",
    number: "0987654321",
    email: "shraddhatendulkar@gmail.com",
  });
  const { firstName, lastName, gender, DOB, number, email } = profile;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  const dialogHandler = () => {
    setOpen(open ? false : true);
  };
  const submitEdited = () => {
    setOpen(false);
  };
  return (
    <div>
      <Paper className={classes.paperProfile}>
        <Typography variant="h5" className={classes.profile}>
          Profile
        </Typography>
        <hr />
        <Typography>
          <b>FirstName:</b> {firstName}
        </Typography>
        <Typography>
          <b>LastName:</b> {lastName}
        </Typography>
        <Typography>
          <b>Gender:</b> {gender}
        </Typography>
        <Typography>
          <b>Date of Birth:</b> {DOB}
        </Typography>
        <Typography>
          <b>Number:</b> {number}
        </Typography>
        <Typography>
          <b>Email: </b> {email}
        </Typography>

        <hr />
        <Button
          onClick={dialogHandler}
          startIcon={<EditIcon />}
          variant="outlined"
        >
          Edit
        </Button>

        <Dialog
          className={classes.dialogBox}
          open={open}
          onClose={dialogHandler}
        >
          <DialogTitle>Profile Details</DialogTitle>
          <DialogContent>
            <Typography className={classes.typoProfile}>
              FirstName:
              <TextField
                className={classes.textFieldProfile}
                name="firstName"
                onChange={changeHandler}
                size="small"
                variant="outlined"
                value={firstName}
              />
            </Typography>
            <Typography className={classes.typoProfile}>
              LastName:
              <TextField
                className={classes.textFieldProfile}
                name="lastName"
                onChange={changeHandler}
                size="small"
                variant="outlined"
                value={lastName}
              />
            </Typography>
            <Typography className={classes.typoProfile}>
              Gender:
              <TextField
                className={classes.textFieldProfile}
                name="gender"
                onChange={changeHandler}
                size="small"
                variant="outlined"
                value={gender}
              />
            </Typography>
            <Typography className={classes.typoProfile}>
              DOB:
              <TextField
                className={classes.textFieldProfile}
                name="DOB"
                onChange={changeHandler}
                size="small"
                variant="outlined"
                value={DOB}
              />
            </Typography>
            <Typography className={classes.typoProfile}>
              Number:
              <TextField
                className={classes.textFieldProfile}
                name="number"
                onChange={changeHandler}
                size="small"
                variant="outlined"
                value={number}
              />
            </Typography>
            <Typography className={classes.typoProfile}>
              Email:
              <TextField
                className={classes.textFieldProfile}
                name="email"
                onChange={changeHandler}
                size="small"
                variant="outlined"
                value={email}
              />
            </Typography>
            <Typography>
              <Button
                color="primary"
                onClick={submitEdited}
                variant="contained"
              >
                Submit
              </Button>
            </Typography>
            <DialogContentText></DialogContentText>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </Paper>
    </div>
  );
}

export default AccountCard;

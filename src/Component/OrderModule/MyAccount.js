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

  const dialogHandler = () => {
    setOpen(open ? false : true);
  };
  return (
    <div>
      <Paper className={classes.paperProfile}>
        <Typography variant="h5" className={classes.profile}>
          Profile
        </Typography>
        <hr />
        <Typography>
          <b>FirstName:</b> Shraddha
        </Typography>
        <Typography>
          <b>LastName:</b> Tendulkar
        </Typography>
        <Typography>
          <b>Gender:</b> Female
        </Typography>
        <Typography>
          <b>Date of Birth:</b> 11/07/1998
        </Typography>
        <Typography>
          <b>Number:</b> 987654321
        </Typography>
        <Typography>
          <b>Email: </b>shraddha.tendulkar@gmail.com
        </Typography>

        <hr />
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={dialogHandler}
        >
          Edit
        </Button>

        <Dialog
          open={open}
          onClose={dialogHandler}
          className={classes.dialogBox}
        >
          <DialogTitle>Profile Details</DialogTitle>
          <DialogContent>
            <Typography className={classes.typoProfile}>
              FirstName:
              <TextField
                variant="outlined"
                size="small"
                className={classes.textFieldProfile}
              />
            </Typography>
            <Typography className={classes.typoProfile}>
              LastName:
              <TextField
                variant="outlined"
                size="small"
                className={classes.textFieldProfile}
              />
            </Typography>
            <Typography className={classes.typoProfile}>
              DOB:
              <TextField
                variant="outlined"
                size="small"
                className={classes.textFieldProfile}
              />
            </Typography>
            <Typography className={classes.typoProfile}>
              Number:
              <TextField
                variant="outlined"
                size="small"
                className={classes.textFieldProfile}
              />
            </Typography>
            <Typography className={classes.typoProfile}>
              Email:
              <TextField
                variant="outlined"
                size="small"
                className={classes.textFieldProfile}
              />
            </Typography>
            <Typography>
              <Button variant="contained" color="primary">
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

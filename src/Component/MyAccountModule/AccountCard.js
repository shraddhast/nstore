import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import MyAccountStyles from "./MyAccountStyles";

function AccountCard() {
  const classes = MyAccountStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography>Profile</Typography>
        <hr />
      </Paper>
    </div>
  );
}

export default AccountCard;

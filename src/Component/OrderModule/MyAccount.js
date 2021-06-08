import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import GetOrderDetailsStyles from "./GetOrderDetailsStyle";

function AccountCard() {
  const classes = GetOrderDetailsStyles();
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
        <Button variant="outlined" startIcon={<EditIcon />}>
          Edit
        </Button>
      </Paper>
    </div>
  );
}

export default AccountCard;

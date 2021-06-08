import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import CheckOutStyles from "../CheckOutStyle";

function CheckOutCard() {
  const classes = CheckOutStyles();
  return (
    <Card className={classes.cardRoot}>
      <CardActionArea>
        <CardContent>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold" }}
            className={classes.address}
          >
            Address
          </Typography>
          <hr />
          <Paper>
            <Typography variant="body2" className={classes.address}>
              <Typography> 302 , Abhishek Avenue</Typography>
              <Typography> Indore - 42100</Typography>
              <Typography>India</Typography>
            </Typography>
          </Paper>
        </CardContent>
      </CardActionArea>
      <hr />
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          Add Address
        </Button>
      </CardActions>
    </Card>
  );
}

export default CheckOutCard;

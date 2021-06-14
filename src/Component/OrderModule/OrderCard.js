import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import GetOrderDetailsStyles from "./GetOrderDetailsStyle";

function OrderCard() {
  const classes = GetOrderDetailsStyles();
  return (
    <div>
      <Card className={classes.cardRoot}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>
            <Typography>
              <span className={classes.transit}>TRANSIT</span> Orderby:
            </Typography>
            <Typography>Placed on: / Price:</Typography>
            <hr />
            <CardMedia
              component="img"
              className={classes.cardImage}
              alt="Contemplative Reptile"
              image="https://images-na.ssl-images-amazon.com/images/I/61MAzfI%2B4vL._SX425_.jpg"
            />
            <hr />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small" color="primary">
            Download
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default OrderCard;

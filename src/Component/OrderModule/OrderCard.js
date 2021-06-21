import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Button, Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { API } from "../../API/api";
import GetOrderDetailsStyles from "./GetOrderDetailsStyle";

function OrderCard() {
  const classes = GetOrderDetailsStyles();
  const [products, setProducts] = useState();

  useEffect(() => {
    const onResponse = {
      success: (res) => {
        setProducts(res.data.orders.pop().items);
      },
      error: (error) => {},
    };
    API.getOrderPlace(onResponse);
  }, []);

  return (
    <div>
      {products?.map((product) => {
        const newDate = product.productId.updatedAt;
        const formattedDate = format(
          new Date(newDate),
          "dd/MM/yyyy kk:mm:ss aaaa"
        );

        return (
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardContent className={classes.cardContent}>
                <Typography>
                  <span className={classes.transit}>TRANSIT</span>
                </Typography>
                <Typography>
                  Placed on:{formattedDate} / Price:
                  {product.productId.price}
                </Typography>
                <hr />
                <CardMedia
                  component="img"
                  className={classes.cardImage}
                  alt="Contemplative Reptile"
                  image={product.productId.mainImage}
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
        );
      })}
    </div>
  );
}

export default OrderCard;

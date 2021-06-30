import React from "react";
import { useHistory } from "react-router";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import ProductCartStyles from "./ProductCartStyle";

function ProductCard(props) {
  const classes = ProductCartStyles();
  const history = useHistory();
  const {
    mainImage,
    subImagesUrl,
    name,
    description,
    color,
    price,
    avgRating,
    features,
    id,
  } = props.data;

  const cardHandleClick = (data) => {
    history.push({
      pathname: `/products/${id}`,
    });
  };

  return (
    <div>
      <Card
        className={classes.card}
        onClick={() => {
          cardHandleClick(props.data);
        }}
      >
        <CardActionArea>
          <CardMedia
            alt="Contemplative Reptile"
            className={classes.cardMedia}
            component="img"
            image={mainImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography>{features}</Typography>
            <Typography variant="h6">{price}</Typography>
          </CardContent>
        </CardActionArea>

        <Button
          className={classes.addCartButton}
          color="secondary"
          size="small"
          variant="contained"
        >
          Add to Cart
        </Button>
        <Typography>
          <Rating name="half-rating-read" defaultValue={avgRating} readOnly />
        </Typography>
      </Card>
    </div>
  );
}

export default ProductCard;

import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import Rating from "@material-ui/lab/Rating";

import ProductCartStyles from "./ProductCartStyle";

function ProductCard(props) {
  const classes = ProductCartStyles();
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
  const history = useHistory();
  const handleClick = (data) => {
    history.push({
      pathname: `/products/:${id}`,
      value: { data },
    });
  };
  return (
    <div>
      <Card
        className={classes.card}
        onClick={() => {
          handleClick(props.data);
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="Contemplative Reptile"
            image={mainImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography>{features}</Typography>
            <Typography variant="h6">{price}</Typography>
          </CardContent>
        </CardActionArea>

        <Button
          color="secondary"
          size="small"
          variant="contained"
          className={classes.addCartButton}
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

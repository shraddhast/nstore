import React from "react";
import Rating from "@material-ui/lab/Rating";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
  CardContent,
} from "@material-ui/core";
import { useHistory } from "react-router";

import CardStyles from "./CardStyles";

function Cards(props) {
  const classes = CardStyles();
  const history = useHistory();
  const { mainImage, description, price, avgRating, id } = props.data;
  console.log(props);

  const cardHandler = (data) => {
    history.push({
      pathname: `/products/:${id}`,
      value: { data },
    });
  };
  return (
    <Card
      className={classes.root}
      onClick={() => {
        cardHandler(props.data);
      }}
    >
      <CardActionArea>
        <CardMedia className={classes.media} image={mainImage} />
        <CardContent>
          <Typography variant="p">{description}</Typography>
          <Typography className={price}>{price}</Typography>
        </CardContent>
      </CardActionArea>

      <Typography>
        <Button className={classes.addFeedback}> Add to Cart</Button>
      </Typography>
      <Typography>
        <Rating name="half-rating-read" defaultValue={avgRating} readOnly />
      </Typography>
    </Card>
  );
}

export default Cards;

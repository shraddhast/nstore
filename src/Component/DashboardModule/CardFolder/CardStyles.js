import { makeStyles } from "@material-ui/core";

const CardStyles = makeStyles((theme) => ({
  root: {
    height: "350px",
    width: "90%",
    marginTop: "50px",
  },
  media: {
    height: "150px",
    margin: "7%",
  },
  price: {
    marginTop: "50px",
  },
  addFeedback: {
    background: "orange",
    color: "white",
    "&:hover": {
      background: "darkOrange",
      color: "white",
    },
  },
}));

export default CardStyles;

import { makeStyles } from "@material-ui/core";

const CardStyles = makeStyles((theme) => ({
  root: {
    height: "350px",
    width: "90%",
    marginTop: "50px",
    marginLeft: "5%",
  },
  media: {
    height: "150px",
    margin: "7%",
  },
  price: {
    marginTop: "50px",
  },
  addFeedback: {
    background: "red",
    color: "white",
    "&:hover": {
      background: "darkRed",
      color: "white",
    },
  },
}));

export default CardStyles;

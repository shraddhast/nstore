import { makeStyles } from "@material-ui/core";

const CardStyles = makeStyles((theme) => ({
  addFeedback: {
    background: "red",
    color: "white",
    "&:hover": {
      background: "darkRed",
      color: "white",
    },
  },
  media: {
    height: "150px",
    margin: "7%",
  },
  price: {
    marginTop: "50px",
  },
  root: {
    height: "350px",
    width: "90%",
    marginTop: "50px",
    marginLeft: "5%",
  },
}));

export default CardStyles;

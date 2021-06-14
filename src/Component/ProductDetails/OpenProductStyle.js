import { makeStyles } from "@material-ui/core";

const OpenProductStyles = makeStyles((theme) => ({
  image: {
    height: "250px",
    marginTop: "5%",
  },
  grid: {
    marginTop: "5%",
    textAlign: "left",
  },
  addCart: {
    marginTop: "5%",
  },
  rateProduct: {
    marginTop: "5%",
    marginLeft: "5%",
  },
  share: {
    display: "flex",
    alignItems: "center",
  },
  zoom_img: {
    marginTop: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img_small: {
    height: "75px",
    margin: "5%",
  },
  tabList: {
    textAlign: "left",
  },
}));

export default OpenProductStyles;

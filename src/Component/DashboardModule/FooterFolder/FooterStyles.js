import { makeStyles } from "@material-ui/core";

const FooterStyles = makeStyles((theme) => ({
  grid: {
    background: "black",
    marginTop: "100px",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  aboutCompany: {
    color: "white",
    marginTop: "10%",
    marginBottom: "10%",
  },
  content: {
    color: "white",
    paddingBottom: "10%",
  },
  text: {
    background: "white",
    marginTop: "4%",
  },
  subscribe: {
    background: "white",
    height: "10%",
    marginTop: "2%",
  },
}));

export default FooterStyles;

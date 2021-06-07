import { makeStyles } from "@material-ui/core";

const GetCartDataStyles = makeStyles((theme) => ({
  rootGrid: {
    padding: "3%",
  },
  billPaper: {
    padding: "5%",
  },
  subTotal: {
    textAlign: "left",
    padding: "3%",
  },
  tableHead: {
    textAlign: "center",
  },
  imageCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));

export default GetCartDataStyles;

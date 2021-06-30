import { makeStyles } from "@material-ui/core";

const GetCartDataStyles = makeStyles((theme) => ({
  billPaper: {
    padding: "5%",
  },
  cancelButton: {
    backgroundColor: "black",
    color: "white",
    height: "39px",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  imageCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  payButton: {
    backgroundColor: "black",
    color: "white",
    height: "39px",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  rootGrid: {
    padding: "3%",
  },
  subTotal: {
    textAlign: "left",
    padding: "3%",
  },
  tableHead: {
    textAlign: "center",
  },
}));

export default GetCartDataStyles;

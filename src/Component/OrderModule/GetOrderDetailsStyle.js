import { makeStyles } from "@material-ui/core";

const GetOrderDetailsStyles = makeStyles((theme) => ({
  rootGrid: {
    padding: "2%",
  },
  cardRoot: {
    width: "80%",
    marginLeft: "15%",
  },
  cardContent: {
    textAlign: "left",
  },
  transit: {
    color: "orange",
  },
  myAccount: {
    textAlign: "left",
    marginTop: "2%",
    marginLeft: "2%",
  },
  button: {
    marginTop: "3%",
  },
  cardImage: {
    width: "15%",
  },

  mainGrid: {
    padding: "2%",
  },
  cardRoot: {
    width: "60%",
    marginLeft: "25%",
  },
  paperAddress: {
    padding: "2%",
  },
  address: {
    textAlign: "left",
    padding: "3%",
  },
  button: {
    marginTop: "3%",
  },
  editButton: {
    display: "flex",
    justifyContent: "flex-start",
  },

  paperChangePassword: {
    marginLeft: "10%",
    marginTop: "5%",
    padding: "2%",
    width: "70%",
  },
  alert: {
    color: "red",
  },
  errorMessage: {
    color: "red",
    display: "flex",
    justifyContent: "flex-start",
  },
  verificationTextFiled: {
    marginTop: "3%",
  },
  passwordTextFiled: {
    marginTop: "1%",
  },
  cPasswordTextFiled: {
    marginTop: "1%",
  },
  submitButton: {
    marginTop: "3%",
  },

  paperProfile: {
    marginLeft: "5%",
    padding: "4%",
    textAlign: "left",
    width: "75%",
  },
  profile: {
    fontWeight: "bold",
  },
}));
export default GetOrderDetailsStyles;

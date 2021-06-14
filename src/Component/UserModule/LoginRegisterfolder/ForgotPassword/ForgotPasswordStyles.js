import { makeStyles } from "@material-ui/core";

const ForgotPasswordStyles = makeStyles((theme) => ({
  paper: {
    height: "50%",
    marginLeft: "30%",
    marginTop: "5%",
    padding: "2%",
    width: "35%",
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
}));

export default ForgotPasswordStyles;

import { makeStyles } from "@material-ui/core";

const LoginStyles = makeStyles((theme) => ({
  paper: {
    width: "35%",
    height: "50%",
    marginLeft: "30%",
    marginTop: "5%",
    padding: "2%",
  },
  emailTextField: {
    marginTop: "5%",
  },
  passwordTextField: {
    marginTop: "1%",
  },
  login: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "5%",
  },
  errorMessage: {
    color: "red",
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "10%",
  },
  registerButton: {
    margin: "2%",
  },
  forgotPasswordButton: {
    margin: "2%",
  },
  submitButton: {
    marginLeft: "30%",
    marginTop: "10%",
  },
}));

export default LoginStyles;

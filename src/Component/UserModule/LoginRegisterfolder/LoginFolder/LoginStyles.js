import { makeStyles } from "@material-ui/core";

const LoginStyles = makeStyles((theme) => ({
  emailTextField: {
    marginTop: "5%",
  },
  errorMessage: {
    color: "red",
    display: "flex",
    justifyContent: "flex-start",
  },
  forgotPasswordButton: {
    margin: "2%",
  },
  login: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "5%",
  },
  paper: {
    width: "35%",
    height: "50%",
    marginLeft: "30%",
    marginTop: "5%",
    padding: "2%",
  },
  passwordTextField: {
    marginTop: "1%",
  },
  registerButton: {
    margin: "2%",
  },
  submitButton: {
    marginLeft: "30%",
    marginTop: "10%",
  },
}));

export default LoginStyles;

import { makeStyles } from "@material-ui/core";

const RegisterStyles = makeStyles((theme) => ({
  confirm_passwordTextField: {
    marginTop: "2%",
  },
  emailTextField: {
    marginTop: "2%",
  },
  errorMessage: {
    color: "red",
    display: "flex",
    justifyContent: "flex-start",
  },
  firstName: {
    marginTop: "2%",
  },
  lastName: {
    marginTop: "2%",
  },
  paper: {
    width: "40%",
    height: "50%",
    marginLeft: "25%",
    marginTop: "5%",
    padding: "2%",
  },
  passwordTextField: {
    marginTop: "2%",
  },
  phoneNumber: {
    marginTop: "2%",
  },
  radioButton: {
    margin: "2%",
  },
  registerButton: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "2%",
    marginTop: "5%",
  },
}));

export default RegisterStyles;

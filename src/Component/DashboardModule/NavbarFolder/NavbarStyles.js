import { makeStyles } from "@material-ui/core";

const NavbarStyles = makeStyles((theme) => ({
  appBar: {
    background: "black",
  },
  button: {
    flexGrow: 1,
  },
  buttonCart: {
    background: "white",
    color: "black",
    marginLeft: "10px",
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
  buttonProfile: {
    background: "white",
    color: "black",
    marginLeft: "1%",
    padding: "10px",
    "&:hover": {
      color: "black",
      background: "white",
    },
  },
  inputBase: {
    background: "white",
    borderRadius: "2px",
    color: "black",
    height: "35px",
    width: "20%",
  },
  neoStore: {
    fontWeight: "bold",
    fontSize: "30px",
  },
  store: {
    color: "red",
  },
  searchIcon: {
    width: "100%",
  },
  root: {
    display: "flex",
  },
}));

export default NavbarStyles;

import { makeStyles } from "@material-ui/core";

const NavbarStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "black",
  },
  neoStore: {
    fontWeight: "bold",
    fontSize: "30px",
  },
  store: {
    color: "red",
  },
  button: {
    flexGrow: 1,
  },
  searchIcon: {
    width: "100%",
  },
  inputBase: {
    background: "white",
    borderRadius: "2px",
    color: "black",
    width: "20%",
  },
  buttonCart: {
    background: "white",
    color: "black",
    marginLeft: "1%",
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
  buttonProfile: {
    background: "white",
    color: "black",
    marginLeft: "1%",
    padding: "8px",
    "&:hover": {
      color: "black",
      background: "white",
    },
  },
}));

export default NavbarStyles;

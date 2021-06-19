import { makeStyles } from "@material-ui/core";

const NavbarStyles = makeStyles((theme) => ({
  appBar: {
    background: "black",
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
  button: {
    flexGrow: 1,
  },
  inputBase: {
    background: "white",
    borderRadius: "2px",
    color: "black",
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

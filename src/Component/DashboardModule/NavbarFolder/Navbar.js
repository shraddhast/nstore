import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Menu,
} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Badge from "@material-ui/core/Badge";
import InputBase from "@material-ui/core/InputBase";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import NavbarStyles from "./NavbarStyles";

function Navbar() {
  const classes = NavbarStyles();
  const history = useHistory();
  const count = useSelector((state) => state.cartReducer);
  console.log(count.state);
  const [dropdown, setDropdown] = useState(null);

  const handleClick = (event) => {
    setDropdown(event.currentTarget);
  };
  const handleClose = () => {
    setDropdown(null);
  };
  const homeHandler = () => {
    history.push("./");
  };
  const productHandler = () => {
    history.push("./commonProducts");
  };
  const orderHandler = () => {
    history.push("./getOrderDetails");
  };
  const cartHandler = () => {
    history.push("/getCartData");
  };

  const isLogged = localStorage.getItem("token");
  const loginHandler = () => {
    history.push("./login");
  };
  const logoutHandler = () => {
    localStorage.setItem("token", "");
    history.push("./login");
  };
  const resetPasswordHandler = () => {
    history.push("./getOrderDetails");
  };
  const registerHandler = () => {
    history.push("./register");
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.neoStore}>
              Neo
              <span className={classes.store}>STORE</span>
            </Typography>

            <Typography variant="button" className={classes.button}>
              <Button color="inherit" onClick={homeHandler}>
                Home
              </Button>
              <Button color="inherit" onClick={productHandler}>
                Products
              </Button>
              <Button color="inherit" onClick={orderHandler}>
                Orders
              </Button>
            </Typography>

            <InputBase
              className={classes.inputBase}
              placeholder="Search…"
              startAdornment={<SearchIcon />}
            />

            <Badge badgeContent={count.state} color="primary">
              <Button
                className={classes.buttonCart}
                onClick={cartHandler}
                startIcon={<ShoppingCartIcon />}
              >
                Cart
              </Button>
            </Badge>

            <Button
              className={classes.buttonProfile}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleClick}
              startIcon={<AccountBoxIcon />}
            ></Button>
            <Menu
              anchorEl={dropdown}
              id="simple-menu"
              keepMounted
              open={Boolean(dropdown)}
              onClose={handleClose}
            >
              {isLogged ? (
                <>
                  <MenuItem onClick={logoutHandler}>LogOut</MenuItem>
                  <MenuItem onClick={resetPasswordHandler}>
                    Reset Password
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={loginHandler}>Login</MenuItem>
                  <MenuItem onClick={registerHandler}>Register</MenuItem>
                </>
              )}
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Navbar;

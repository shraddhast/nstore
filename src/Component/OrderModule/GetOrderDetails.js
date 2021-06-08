import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import HomeIcon from "@material-ui/icons/Home";
import ReorderIcon from "@material-ui/icons/Reorder";
import SyncAltIcon from "@material-ui/icons/SyncAlt";

import CheckOutCard from "./CheckOutCard";
import ChangePassword from "./ChangePassword";
import Footer from "../DashboardModule/FooterFolder/Footer";
import GetOrderDetailsStyles from "./GetOrderDetailsStyle";
import MyAccount from "./MyAccount";
import Navbar from "../DashboardModule/NavbarFolder/Navbar";
import OrderCard from "../OrderModule/OrderCard";

function GetOrderDetails() {
  const classes = GetOrderDetailsStyles();
  const [order, setOrder] = useState(true);
  const [profile, setProfile] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const orderHandler = () => {
    setOrder(true);
    setProfile(false);
    setCheckOut(false);
    setChangePassword(false);
  };

  const checkOutHandler = () => {
    setOrder(false);
    setProfile(false);
    setCheckOut(true);
    setChangePassword(false);
  };

  const profileHandler = () => {
    setOrder(false);
    setProfile(true);
    setCheckOut(false);
    setChangePassword(false);
  };

  const passwordHandler = () => {
    setOrder(false);
    setProfile(false);
    setCheckOut(false);
    setChangePassword(true);
  };

  return (
    <div>
      <Navbar />
      <Typography variant="h4" className={classes.myAccount}>
        My Account
      </Typography>
      <hr />
      <Grid container className={classes.rootGrid} spacing={4}>
        <Grid item lg={4}>
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/29/10/businesspeople-design-person-icon-flat-and-vector-9372910.jpg"
            width="150px"
          />
          <Typography>Shraddha</Typography>
          <Typography>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<ReorderIcon />}
              className={classes.button}
              onClick={orderHandler}
            >
              Order
            </Button>
          </Typography>
          <Typography>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<AccountBoxIcon />}
              className={classes.button}
              onClick={profileHandler}
            >
              Profile
            </Button>
          </Typography>
          <Typography>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<HomeIcon />}
              className={classes.button}
              onClick={checkOutHandler}
            >
              Address
            </Button>
          </Typography>
          <Typography>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<SyncAltIcon />}
              className={classes.button}
              onClick={passwordHandler}
            >
              Change Password
            </Button>
          </Typography>
        </Grid>
        <Grid item lg={8}>
          {order ? <OrderCard /> : null}
          {profile ? <MyAccount /> : null}
          {checkOut ? <CheckOutCard /> : null}
          {changePassword ? <ChangePassword /> : null}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default GetOrderDetails;

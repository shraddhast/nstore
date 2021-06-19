import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import HomeIcon from "@material-ui/icons/Home";
import ReorderIcon from "@material-ui/icons/Reorder";
import SyncAltIcon from "@material-ui/icons/SyncAlt";

import { API } from "../../API/api";
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

  const [getAddress, setGetAddress] = useState();

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
    listAddress();
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

  const listAddress = () => {
    const onResponse = {
      success: (res) => {
        setGetAddress(res.data.address);
      },
      error: (error) => {},
    };

    API.listAddress(onResponse);
  };
  return (
    <div>
      <Navbar />
      <Typography variant="h4" className={classes.myAccount}>
        My Account
      </Typography>
      <hr />
      <Grid container className={classes.rootGrid} spacing={4}>
        <Grid item sm={6} md={6} lg={4}>
          <img
            src="https://cdn1.vectorstock.com/i/1000x1000/29/10/businesspeople-design-person-icon-flat-and-vector-9372910.jpg"
            width="150px"
          />
          <Typography>Shraddha</Typography>
          <Typography>
            <Button
              className={classes.button}
              fullWidth
              onClick={orderHandler}
              startIcon={<ReorderIcon />}
              variant="outlined"
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
              className={classes.button}
              fullWidth
              onClick={checkOutHandler}
              startIcon={<HomeIcon />}
              variant="outlined"
            >
              Address
            </Button>
          </Typography>
          <Typography>
            <Button
              className={classes.button}
              fullWidth
              onClick={passwordHandler}
              startIcon={<SyncAltIcon />}
              variant="outlined"
            >
              Change Password
            </Button>
          </Typography>
        </Grid>
        <Grid item sm={6} md={6} lg={8}>
          {order ? <OrderCard /> : null}
          {profile ? <MyAccount /> : null}
          {checkOut ? <CheckOutCard getAddress={getAddress} /> : null}
          {changePassword ? <ChangePassword /> : null}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default GetOrderDetails;

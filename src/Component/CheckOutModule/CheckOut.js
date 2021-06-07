import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import HomeIcon from "@material-ui/icons/Home";
import ReorderIcon from "@material-ui/icons/Reorder";

import CheckOutStyles from "./CheckOutStyle";
import Footer from "../DashboardModule/FooterFolder/Footer";
import Navbar from "../DashboardModule/NavbarFolder/Navbar";

function CheckOut() {
  const classes = CheckOutStyles();
  return (
    <div>
      <Navbar />
      <Typography variant="h4" className={classes.myAccount}>
        My Account
      </Typography>
      <hr />
      <Grid container spacing={4} className={classes.mainGrid}>
        <Grid item lg={4}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1UmkprYBYqxQt60VwwzjxbaDL44EGYmPJQ&usqp=CAU"
            width="150px"
          />
          <Typography>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<ReorderIcon />}
              className={classes.button}
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
            >
              Address
            </Button>
          </Typography>
          <Typography>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<></>}
              className={classes.button}
            >
              Change Password
            </Button>
          </Typography>
        </Grid>
        <Grid item lg={8}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Address
                </Typography>
                <hr />
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default CheckOut;

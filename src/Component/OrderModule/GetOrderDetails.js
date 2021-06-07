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

import Footer from "../DashboardModule/FooterFolder/Footer";
import GetOrderDetailsStyles from "./GetOrderDetailsStyle";
import Navbar from "../DashboardModule/NavbarFolder/Navbar";
function GetOrderDetails() {
  const classes = GetOrderDetailsStyles();
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1UmkprYBYqxQt60VwwzjxbaDL44EGYmPJQ&usqp=CAU"
            width="150px"
          />
          <Typography>
            <Button variant="outlined" fullWidth startIcon={<ReorderIcon />}>
              Order
            </Button>
          </Typography>
          <Typography>
            <Button variant="outlined" fullWidth startIcon={<AccountBoxIcon />}>
              Profile
            </Button>
          </Typography>
          <Typography>
            <Button variant="outlined" fullWidth startIcon={<HomeIcon />}>
              Address
            </Button>
          </Typography>
          <Typography>
            <Button variant="outlined" fullWidth startIcon={<></>}>
              Change Password
            </Button>
          </Typography>
        </Grid>
        <Grid item lg={8}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
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

export default GetOrderDetails;

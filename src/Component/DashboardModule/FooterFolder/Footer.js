import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

import FooterStyles from "./FooterStyles";

function Footer() {
  const classes = FooterStyles();
  return (
    <div>
      <Grid container className={classes.grid}>
        <Grid item sm={12} md={4} lg={4}>
          <Typography variant="h4" className={classes.aboutCompany}>
            About company
          </Typography>
          <Typography variant="p" className={classes.content}>
            Neosoft company is here at your quick and easy services for sharing
            Contact Information:
            <br />
            Email: neosoft@neosoftmail.com
            <br />
            Phone:99990000
            <br />
            MUMBAI,INDIA
          </Typography>
        </Grid>
        <Grid item sm={12} md={4} lg={4}>
          <Typography variant="h4" className={classes.about_com}>
            Information
          </Typography>
          <Typography variant="p" className={classes.content}>
            Terms and Condition
            <br />
            Return Policy <br />
            Contact Us
            <br />
            Privacy Policy
            <br />
            Learn more
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Typography variant="h4" className={classes.about_com}>
            News Letter
          </Typography>
          <Typography variant="p" className={classes.content}>
            Sign up to get exclusive offers from our favorite brands and great
            deals
            <br />
            <TextField className={classes.text} />
            <br />
            <Button className={classes.subscribe}>Subscribe</Button>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;

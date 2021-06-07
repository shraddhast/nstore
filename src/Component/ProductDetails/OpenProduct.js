import { React, useState } from "react";
import {
  TwitterShareButton,
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from "react-share";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactImageZoom from "react-image-zoom";
import "react-tabs/style/react-tabs.css";

import { AppBar, Button, Grid, Paper, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import ShareIcon from "@material-ui/icons/Share";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import Footer from "../DashboardModule/FooterFolder/Footer";
import Navbar from "../DashboardModule/NavbarFolder/Navbar";
import OpenProductStyles from "./OpenProductStyle";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router";

function OpenProduct(props) {
  const classes = OpenProductStyles();
  const { image, title, rating, price, description, features } =
    props.location.value.data;
  console.log(props.location.value.data);
  const [imageVal, setImageVal] = useState(image.image1);
  const [tab, setTab] = useState(0);
  const zoomDetails = {
    height: 250,
    img: imageVal,
    zoomPosition: "original",
    width: 250,
    zoomWidth: 250,
  };
  const history = useHistory();
  const addCartHandler = (data) => {
    history.push({
      pathname: "/getCartData",
      value: { data },
    });
  };
  return (
    <div>
      <Navbar />
      <Grid container justify="center">
        <Grid item lg={6}>
          <div className={classes.zoom_img}>
            <ReactImageZoom {...zoomDetails} />
          </div>

          <Typography>
            <Grid>
              <img
                className={classes.img_small}
                onClick={(e) => setImageVal(e.target.currentSrc)}
                src={image.image1}
              />
              <img
                className={classes.img_small}
                onClick={(e) => setImageVal(e.target.currentSrc)}
                src={image.image2}
              />
              <img
                className={classes.img_small}
                onClick={(e) => setImageVal(e.target.currentSrc)}
                src={image.image3}
              />
            </Grid>
          </Typography>
        </Grid>
        <Grid item lg={6} className={classes.grid}>
          <Typography variant="h4">{title}</Typography>
          <Typography>
            <Rating name="half-rating-read" defaultValue={rating} readOnly />
          </Typography>
          <hr />
          <Typography>Price:{price}</Typography>
          <Typography>Color:</Typography>
          <Typography className={classes.share}>
            Share: <ShareIcon />
          </Typography>

          <Typography>
            <TwitterShareButton title="Hello" url="https://stackoverflow.com/">
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <EmailShareButton title="Hello" url="https://stackoverflow.com/">
              <EmailIcon size={32} round />
            </EmailShareButton>

            <FacebookShareButton title="Hello" url="https://stackoverflow.com/">
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <WhatsappShareButton title="Hello" url="https://stackoverflow.com/">
              <WhatsAppIcon size={32} round />
            </WhatsappShareButton>

            <PinterestShareButton
              title="Hello"
              url="https://stackoverflow.com/"
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>
          </Typography>

          <Button
            variant="contained"
            color="primary"
            className={classes.addCart}
            onClick={() => addCartHandler(props.location.value.data)}
          >
            Add to cart
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.rateProduct}
          >
            Rate product
          </Button>
        </Grid>
      </Grid>

      <Grid container>
        <Tabs selectedIndex={tab} onSelect={(index) => setTab(index)}>
          <TabList className={classes.tabList}>
            <Tab> Description </Tab>
            <Tab> Features </Tab>
            <hr />
          </TabList>
          <TabPanel>{description}</TabPanel>
          <TabPanel>{features}</TabPanel>
        </Tabs>
      </Grid>

      <Footer />
    </div>
  );
}

export default OpenProduct;

import { React, useState, useEffect } from "react";
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

import { API } from "../../API/api";
import Footer from "../DashboardModule/FooterFolder/Footer";
import Navbar from "../DashboardModule/NavbarFolder/Navbar";
import OpenProductStyles from "./OpenProductStyle";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router";

function OpenProduct(props) {
  const classes = OpenProductStyles();
  const [details, setDetails] = useState({});
  const {
    mainImage,
    avgRating,
    price,
    description,
    features,
    name,
    id,
    subImages,
  } = details;

  const [imageVal, setImageVal] = useState("");
  const [tab, setTab] = useState(0);
  const history = useHistory();

  const addCartHandler = () => {
    history.push({
      pathname: "/getCartData",
    });
    addToCart();
  };
  const addToCart = () => {
    const onResponse = {
      success: (res) => {
        console.log(res);
      },
      error: (error) => {},
    };
    const params = {
      productId: id,
      quantity: 1,
    };
    API.addToCart(onResponse, params);
  };

  useEffect(() => {
    dataFetching();
  }, []);

  const dataFetching = () => {
    const onResponse = {
      success: (res) => {
        setDetails(res.data);
        setImageVal(res.data.mainImage);
      },
      error: (error) => {},
    };
    const id = props.match.params.id;
    API.singleProduct(onResponse, id);
  };
  return (
    <div>
      <Navbar />
      <Grid container justify="center">
        <Grid item lg={6}>
          <div className={classes.imageGrid}>
            <img
              alt="main product"
              height="250px"
              src={imageVal}
              marginTop="500px"
              width="400px"
            />
          </div>
          <Typography>
            <Grid>
              <img
                className={classes.img_small}
                onClick={(e) => setImageVal(e.target.currentSrc)}
                src={mainImage}
              />
              <img
                className={classes.img_small}
                onClick={(e) => setImageVal(e.target.currentSrc)}
                src={details?.subImages ? details?.subImages[0] : ""}
              />
              <img
                className={classes.img_small}
                onClick={(e) => setImageVal(e.target.currentSrc)}
                src={details?.subImages ? details?.subImages[1] : ""}
              />
            </Grid>
          </Typography>
        </Grid>
        <Grid item lg={6} className={classes.grid}>
          <Typography variant="h4">{name}</Typography>
          <Typography>
            <Rating name="half-rating-read" value={avgRating || 0} readOnly />
          </Typography>
          <hr />
          <Typography> Price:{price}</Typography>
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
            onClick={() => addCartHandler()}
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

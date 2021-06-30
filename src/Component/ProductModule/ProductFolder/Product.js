import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import StarIcon from "@material-ui/icons/Star";

import { API } from "../../../API/api";
import Footer from "../../DashboardModule/FooterFolder/Footer";
import Navbar from "../../DashboardModule/NavbarFolder/Navbar";
import ProductCard from "../CardFolder.js/ProductCard";
import ProductStyles from "./ProductStyles";
import SideButton from "../CategoryColorSelectionFolder/SideButton";

function Product() {
  const classes = ProductStyles();
  const [products, setProducts] = useState();

  const ratingHandler = () => {
    const onResponse = {
      success: (res) => {
        setProducts(res.data.docs);
      },
      error: (error) => {},
    };
    //API call for sorting as per rating
    API.sortRating(onResponse);
  };

  const lowPriceHandler = () => {
    // @function setProducts               useState() hook function to update the product details
    const onResponse = {
      success: (res) => {
        setProducts(res.data.docs);
      },
      error: (error) => {},
    };
    //API call for sorting as per low to high price
    API.sortLowPrice(onResponse);
  };

  const highPriceHandler = () => {
    // @function setProducts               useState() hook function to update the product details
    const onResponse = {
      success: (res) => {
        setProducts(res.data.docs);
      },
      error: (error) => {},
    };
    //API call for sorting as per high to low  price
    API.sortHighPrice(onResponse);
  };

  //useEffect() hook
  useEffect(() => {
    const onResponse = {
      success: (res) => {
        const data = res.data.docs;
        data.pop();
        setProducts(data);
      },
      error: (error) => {},
    };
    API.listProduct(onResponse);
  }, []);

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <SideButton />
        </Grid>
        <Grid xs={12} sm={12} md={9} lg={9} container spacing={2}>
          <Grid container justify="flex-end" className={classes.icons}>
            <Button onClick={ratingHandler}>
              Sort By:
              <StarIcon />
            </Button>
            <Button onClick={lowPriceHandler}>
              ₹<ArrowDownwardIcon />
            </Button>
            <Button onClick={highPriceHandler}>
              ₹<ArrowUpwardIcon />
            </Button>
          </Grid>

          {products?.map((data) => (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <ProductCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Product;

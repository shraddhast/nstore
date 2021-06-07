import React from "react";
import { Button, Grid } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import StarIcon from "@material-ui/icons/Star";

import Footer from "../../DashboardModule/FooterFolder/Footer";
import Navbar from "../../DashboardModule/NavbarFolder/Navbar";
import productData from "../CardFolder.js/ProductData";
import SideButton from "../SideButtonFolder/SideButton";
import ProductCard from "../CardFolder.js/ProductCard";
import ProductStyles from "./ProductStyles";

function Product() {
  const classes = ProductStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <SideButton />
        </Grid>
        <Grid xs={12} sm={12} md={9} lg={9} container spacing={2}>
          <Grid container justify="flex-end" className={classes.icons}>
            <Button>
              Sort By:
              <StarIcon />
            </Button>
            <Button>
              ₹<ArrowDownwardIcon />
            </Button>
            <Button>
              ₹<ArrowUpwardIcon />
            </Button>
          </Grid>

          {productData.map((data) => (
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

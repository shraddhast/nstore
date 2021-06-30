import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { API } from "../../../API/api";
import SideButtonStyles from "./SideButtonStyles";

function SideButton() {
  const classes = SideButtonStyles();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [color, setColor] = useState([]);

  const allProductHandler = () => {
    /**
     * @author Shraddha Tendulkar
     * @function setProductData           useState() hook function to update the product values
     */
    const onResponse = {
      success: (res) => {
        setProducts(res.data.docs);
      },
      error: (error) => {},
    };
    // API to fetch Products
    API.listProduct(onResponse);
  };

  const getCategories = () => {
    const onResponse = {
      success: (res) => {
        setCategories(res.data);
      },
      error: (error) => {},
    };
    //API to fetch categories
    API.category(onResponse);
  };

  const getColor = () => {
    const onResponse = {
      success: (res) => {
        setColor(res.data);
      },
      error: (error) => {},
    };
    //API to fetch color
    API.color(onResponse);
  };

  const getProductsByCategory = (category) => {
    const onResponse = {
      success: (res) => {
        setProducts(res.data.docs);
      },
      error: (error) => {},
    };
    const params = {
      category: category._id,
    };
    //API to fetch product by category
    API.getProductsByCategory(onResponse, params);
  };
  const getProductsByColor = (category) => {
    const onResponse = {
      success: (res) => {
        setProducts(res.data.docs);
      },
      error: (error) => {},
    };
    const params = {
      category: category._id,
    };
    //API to fetch product by color
    API.getProductsByColor(onResponse, params);
  };

  //useEffect() hook
  useEffect(() => {
    getCategories();
    getColor();
  }, []);
  return (
    <div>
      <Paper variant="elevation" className={classes.allProduct}>
        <Button onClick={allProductHandler}> All Product</Button>
      </Paper>
      <Typography className={classes.categories}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Categories</Typography>
          </AccordionSummary>
          {categories?.map((category) => (
            <Typography>
              <Button onClick={() => getProductsByCategory(category)}>
                {category.name}
              </Button>
            </Typography>
          ))}
        </Accordion>
      </Typography>
      <Typography className={classes.categories}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Colours</Typography>
          </AccordionSummary>
          {color?.map((color) => (
            <Typography>
              <Button onClick={() => getProductsByColor(color)}>
                {color.name}
              </Button>
            </Typography>
          ))}
        </Accordion>
      </Typography>
    </div>
  );
}

export default SideButton;

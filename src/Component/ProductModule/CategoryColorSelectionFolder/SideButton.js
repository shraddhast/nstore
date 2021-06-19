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

  const allProductHandler = () => {
    const onResponse = {
      success: (res) => {
        setProducts(res.data.docs);
      },
      error: (error) => {},
    };
    API.listProduct(onResponse);
  };

  const getCategories = () => {
    const onResponse = {
      success: (res) => {
        setCategories(res.data);
      },
      error: (error) => {},
    };
    API.category(onResponse);
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
    API.getProductsByCategory(onResponse, params);
  };

  useEffect(() => {
    getCategories();
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
          <Typography>
            <Button>Black</Button>
          </Typography>
          <Typography>
            <Button>Blue</Button>
          </Typography>
        </Accordion>
      </Typography>
    </div>
  );
}

export default SideButton;

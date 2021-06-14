import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { API } from "../../../API/api";
import Cards from "./Cards";
import data from "./CardData";

function CardRoot() {
  const [products, setProducts] = useState();
  useEffect(() => {
    const onResponse = {
      success: (res) => {
        setProducts(res.data.docs);
        console.log(res.data.docs);
      },
      error: (error) => {},
    };
    API.listProduct(onResponse);
  }, []);
  return (
    <div>
      <Typography>Popular Products</Typography>
      <Link to="./">
        <Typography>View all</Typography>
      </Link>

      <Grid container>
        {products &&
          products.map((data) => (
            <Grid item xs={12} sm={6} md={4} lg={4} spacing={2}>
              <Cards data={data} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default CardRoot;

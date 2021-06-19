import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

import { API } from "../../../API/api";
import Cards from "./Cards";

function CardRoot() {
  const [products, setProducts] = useState();
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
      <Typography>Popular Products</Typography>
      <Link to="./">
        <Typography>View all</Typography>
      </Link>

      <Grid container>
        {products?.map((data) => (
          <Grid item xs={12} sm={6} md={4} lg={4} spacing={2}>
            <Cards data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CardRoot;

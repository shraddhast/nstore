import React, { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepButton,
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import Footer from "../DashboardModule/FooterFolder/Footer";
import GetCartDataStyles from "./GetCartDataStyles";
import Navbar from "../DashboardModule/NavbarFolder/Navbar";

function GetCartData(props) {
  const classes = GetCartDataStyles();
  const { image, title, rating, price } = props.location.value.data;
  console.log(props.location.value.data);

  const [count, setCount] = useState(0);

  const Decrement = () => {
    setCount(count - 1);
  };
  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Navbar />
      <Stepper>
        <Step>
          <StepLabel>Cart</StepLabel>
        </Step>
        <Step>
          <StepLabel>Delivery Address</StepLabel>
        </Step>
      </Stepper>
      <Grid container spacing={5} className={classes.rootGrid}>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHead}>Product</TableCell>
                  <TableCell className={classes.tableHead}>Quality</TableCell>
                  <TableCell className={classes.tableHead}>Price</TableCell>
                  <TableCell className={classes.tableHead}>Total</TableCell>
                  <TableCell className={classes.tableHead}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.imageCell}>
                    <img src={image.image1} width="40px" height="40px" />
                    {title}
                  </TableCell>
                  <TableCell>
                    <Button onClick={Increment}>+</Button>
                    <input value={count} style={{ width: "9px" }} />
                    <Button onClick={Decrement}>-</Button>
                  </TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>1234</TableCell>
                  <TableCell>
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12} sm={8} md={8} lg={4}>
          <Paper className={classes.billPaper}>
            <Typography variant="h4">Review Order</Typography>
            <Typography className={classes.subTotal}>Sub Total :</Typography>
            <hr />
            <Typography className={classes.subTotal}>GST(5%):</Typography>
            <hr />
            <Typography className={classes.subTotal}>Order Total: </Typography>
            <Button variant="contained" color="primary" fullWidth>
              Proceed to Buy
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default GetCartData;

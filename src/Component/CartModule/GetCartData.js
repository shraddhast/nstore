import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
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
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";

import { API } from "../../API/api";
import Footer from "../DashboardModule/FooterFolder/Footer";
import GetCartDataStyles from "./GetCartDataStyles";
import Navbar from "../DashboardModule/NavbarFolder/Navbar";

function GetCartData() {
  const classes = GetCartDataStyles();
  const history = useHistory();
  const [address, setAddress] = useState();
  const [count, setCount] = useState(1);
  const [dialog, setDialog] = useState(false);
  const [grandTotal, setGrandTotal] = useState();
  const [products, setProducts] = useState([]);
  const GST = (5 / 100) * grandTotal;
  const finalTotal = grandTotal + GST;

  const dialogHandler = () => {
    setDialog(dialog ? false : true);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Increment = () => {
    setCount(count + 1);
  };

  const deleteHandler = (id) => {
    const onResponse = {
      success: (res) => {
        setProducts(products.filter((product) => product.productId.id !== id));
      },
      error: (error) => {},
    };
    API.deleteFromCart(onResponse, id);
  };

  const buyHandler = () => {
    dialogHandler();
    listAddress();
  };
  const listAddress = () => {
    const onResponse = {
      success: (res) => {
        const data = res.data.address.pop();
        setAddress(data);
      },
      error: (error) => {},
    };
    API.listAddress(onResponse);
  };

  const addressApproveHandler = (id) => {
    const onResponse = {
      success: (res) => {
        history.push("./getOrderDetails");
      },
      error: (error) => {},
    };
    API.orderPlace(onResponse, { addressId: id });
    setDialog(false);
  };

  useEffect(() => {
    const onResponse = {
      success: (res) => {
        setProducts(res.data.products);
        setGrandTotal(res.data.grandTotal);
      },
      error: (error) => {},
    };
    API.getFromCart(onResponse);
  }, []);
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
                {products?.map((item) => (
                  <TableRow>
                    <TableCell className={classes.imageCell}>
                      <img
                        height="40px"
                        src={item.productId.mainImage}
                        style={{ marginRight: "2%" }}
                        width="40px"
                      />
                      {item.productId.name} <br />
                      Status:In Stock
                    </TableCell>
                    <TableCell className={classes.tableHead}>
                      <Button onClick={Decrement} startIcon={<RemoveIcon />} />
                      <input value={count} style={{ width: "9px" }} />
                      <Button onClick={Increment} startIcon={<AddIcon />} />
                    </TableCell>
                    <TableCell>{item.productId.price}</TableCell>
                    <TableCell>{item.productId.price}</TableCell>
                    <TableCell>
                      <DeleteIcon
                        onClick={() => deleteHandler(item.productId.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12} sm={8} md={8} lg={4}>
          <Paper className={classes.billPaper}>
            <Typography variant="h4">Review Order</Typography>
            <Typography className={classes.subTotal}>
              Sub Total :{grandTotal}
            </Typography>
            <hr />
            <Typography className={classes.subTotal}>GST(5%):{GST}</Typography>
            <hr />
            <Typography className={classes.subTotal}>
              Order Total:{finalTotal}
            </Typography>
            <Button
              fullWidth
              color="primary"
              onClick={buyHandler}
              variant="contained"
            >
              Proceed to Buy
            </Button>
            <Dialog open={dialog} onClose={dialogHandler}>
              <DialogTitle>Address</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {address?.addressLine}, {address?.pincode},{address?.city},
                  {address?.state},{address?.country}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={dialogHandler} color="primary">
                  Cancel
                </Button>
                {console.log(address?._id)}
                <Button
                  onClick={() => addressApproveHandler(address?._id)}
                  color="primary"
                >
                  Finish
                </Button>
              </DialogActions>
            </Dialog>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default GetCartData;

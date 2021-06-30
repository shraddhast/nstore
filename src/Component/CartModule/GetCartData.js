import React, { useState, useEffect } from "react";
import addNotification from "react-push-notification";
import { useDispatch } from "react-redux";
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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { API } from "../../API/api";
import cartArray from "../../Redux/Action";
import Footer from "../DashboardModule/FooterFolder/Footer";
import GetCartDataStyles from "./GetCartDataStyles";
import Navbar from "../DashboardModule/NavbarFolder/Navbar";
import ProductTable from "./ProductTable";
import PaymentMode from "./PaymentMode";

function GetCartData() {
  const classes = GetCartDataStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [address, setAddress] = useState();
  const [dialog, setDialog] = useState(false);
  const [grandTotal, setGrandTotal] = useState();
  const [products, setProducts] = useState([]);
  const value = (5 / 100) * grandTotal;
  const GST = value.toFixed(2);
  const finalTotal = grandTotal + GST;

  const addressApproveHandler = (id) => {
    const onResponse = {
      success: (res) => {
        addNotification({
          title: "NEOSTORE",
          subtitle: "ORDER",
          message: "Order has been successfully placed",
          theme: "darkblue",
          //native: "true",
        });
        getFromCart();
        history.push("./getOrderDetails");
      },
      error: (error) => {},
    };
    API.orderPlace(onResponse, { addressId: id });
    setDialog(false);
  };
  const buyHandler = () => {
    dialogHandler();
    listAddress();
  };
  const dialogHandler = () => {
    setDialog(dialog ? false : true);
  };
  const deleteHandler = (id) => {
    const onResponse = {
      success: (res) => {
        setProducts(products.filter((product) => product.productId.id !== id));
        console.log(res, "delete response");
      },
      error: (error) => {},
    };
    API.deleteFromCart(onResponse, id);
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

  useEffect(() => {
    getFromCart();
  }, []);

  const getFromCart = () => {
    const onResponse = {
      success: (res) => {
        setProducts(res.data.products);
        dispatch(cartArray(res.data.products.length));
        setGrandTotal(res.data.grandTotal);
      },
      error: (error) => {},
    };
    API.getFromCart(onResponse);
  };
  return (
    <div>
      <Navbar />

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
                  <ProductTable deleteHandler={deleteHandler} item={item} />
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
                  <Typography>Address:{address?.addressLine}</Typography>
                  <Typography>PinCode:{address?.pincode}</Typography>
                  <Typography>City:{address?.city},</Typography>
                  <Typography>State:{address?.state}</Typography>
                  <Typography>Country:{address?.country}</Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={dialogHandler}
                  className={classes.cancelButton}
                >
                  Cancel
                </Button>
                <PaymentMode />
                <Button
                  onClick={() => addressApproveHandler(address?._id)}
                  className={classes.payButton}
                >
                  COD and Finish
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

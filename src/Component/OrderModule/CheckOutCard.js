import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, Typography, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CancelIcon from "@material-ui/icons/Cancel";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { API } from "../../API/api";
import GetOrderDetailsStyles from "./GetOrderDetailsStyle";

function CheckOutCard(props) {
  const classes = GetOrderDetailsStyles();
  const [address, setAddress] = useState();
  const [addressData, setAddressData] = useState({
    addressLine: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });
  const { addressLine, pincode, city, state, country } = addressData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });
  };

  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(false);

  const openDialogHandler = () => {
    setOpen(open ? false : true);
  };
  const dialogHandler = () => {
    setDialog(dialog ? false : true);
  };

  const cancelHandler = (id) => {
    const onResponse = {
      success: (res) => {
        listAddress();
      },
      error: (error) => {},
    };
    API.deleteAddress(onResponse, id);
  };

  const editHandler = (id) => {
    const onResponse = {
      success: (res) => {
        setAddress(addressData);
        listAddress();
      },
      error: (error) => {},
    };
    API.updateAddress(onResponse, addressData, id);
    setOpen(false);
  };

  const postAddressHandler = () => {
    const onResponse = {
      success: (res) => {
        setAddress(address);
        listAddress();
      },
      error: (error) => {},
    };
    API.newAddress(onResponse, addressData);
    setDialog(false);
  };

  useEffect(() => {
    listAddress();
  }, []);

  const listAddress = () => {
    const onResponse = {
      success: (res) => {
        setAddress(res.data.address);
      },
      error: (error) => {},
    };
    API.listAddress(onResponse);
  };
  return (
    <div>
      <Paper className={classes.paperAddress}>
        <Typography
          className={classes.address}
          style={{ fontWeight: "bold" }}
          variant="h5"
        >
          Address
        </Typography>
        <hr />

        {address?.map((addresses) => (
          <>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Button
                  className={classes.cancelButton}
                  onClick={() => cancelHandler(addresses._id)}
                  startIcon={<CancelIcon />}
                ></Button>
                <Typography variant="body2" className={classes.address}>
                  <Typography> {addresses.addressLine}</Typography>
                  <Typography> {addresses.pincode}</Typography>
                  <Typography>
                    {addresses.city} ,{addresses.state}- {addresses.country}
                  </Typography>
                </Typography>
                <Button
                  className={classes.editButton}
                  color="primary"
                  onClick={openDialogHandler}
                  variant="contained"
                >
                  Edit
                </Button>
              </CardContent>
            </Card>
            <Dialog
              className={classes.dialogBox}
              open={open}
              onClose={openDialogHandler}
            >
              <Paper className={classes.paperEditAddress}>
                <DialogTitle>Edit Address</DialogTitle>
                <DialogContent>
                  <Typography className={classes.typoProfile}>
                    Address:
                    <TextField
                      className={classes.textFieldProfile}
                      name="addressLine"
                      onChange={handleChange}
                      size="small"
                      variant="outlined"
                      value={addressLine}
                    />
                  </Typography>
                  <Typography className={classes.typoProfile}>
                    Pincode:
                    <TextField
                      className={classes.textFieldProfile}
                      name="pincode"
                      onChange={handleChange}
                      size="small"
                      variant="outlined"
                      value={pincode}
                    />
                  </Typography>
                  <Typography className={classes.typoProfile}>
                    City:
                    <TextField
                      className={classes.textFieldProfile}
                      name="city"
                      onChange={handleChange}
                      size="small"
                      variant="outlined"
                      value={city}
                    />
                  </Typography>
                  <Typography className={classes.typoProfile}>
                    State:
                    <TextField
                      className={classes.textFieldProfile}
                      name="state"
                      onChange={handleChange}
                      size="small"
                      variant="outlined"
                      value={state}
                    />
                  </Typography>
                  <Typography className={classes.typoProfile}>
                    Country:
                    <TextField
                      className={classes.textFieldProfile}
                      name="country"
                      onChange={handleChange}
                      size="small"
                      variant="outlined"
                      value={country}
                    />
                  </Typography>
                </DialogContent>
                <DialogActions className={classes.submitEdit}>
                  <Typography>
                    <Button
                      className={classes.submitEdit}
                      color="primary"
                      id={addresses}
                      onChange={handleChange}
                      onClick={() => editHandler(addresses._id)}
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </Typography>
                </DialogActions>
              </Paper>
            </Dialog>
          </>
        ))}

        <hr />
        <Button
          onClick={dialogHandler}
          color="primary"
          size="small"
          variant="contained"
        >
          Add Address
        </Button>
        <Dialog
          className={classes.dialogBox}
          open={dialog}
          onClose={dialogHandler}
        >
          <Paper className={classes.paperEditAddress}>
            <DialogTitle>Add Address</DialogTitle>
            <DialogContent>
              <Typography className={classes.typoProfile}>
                Address:
                <TextField
                  className={classes.textFieldProfile}
                  name="addressLine"
                  onChange={handleChange}
                  size="small"
                  value={addressLine}
                  variant="outlined"
                />
              </Typography>
              <Typography className={classes.typoProfile}>
                Pincode:
                <TextField
                  className={classes.textFieldProfile}
                  name="pincode"
                  onChange={handleChange}
                  size="small"
                  value={pincode}
                  variant="outlined"
                />
              </Typography>
              <Typography className={classes.typoProfile}>
                City:
                <TextField
                  className={classes.textFieldProfile}
                  name="city"
                  onChange={handleChange}
                  size="small"
                  value={city}
                  variant="outlined"
                />
              </Typography>
              <Typography className={classes.typoProfile}>
                State:
                <TextField
                  className={classes.textFieldProfile}
                  name="state"
                  onChange={handleChange}
                  size="small"
                  value={state}
                  variant="outlined"
                />
              </Typography>
              <Typography className={classes.typoProfile}>
                Country:
                <TextField
                  className={classes.textFieldProfile}
                  name="country"
                  onChange={handleChange}
                  size="small"
                  value={country}
                  variant="outlined"
                />
              </Typography>
            </DialogContent>
            <DialogActions className={classes.submitEdit}>
              <Typography>
                <Button
                  color="primary"
                  onClick={postAddressHandler}
                  variant="contained"
                >
                  Submit
                </Button>
              </Typography>
            </DialogActions>
          </Paper>
        </Dialog>
      </Paper>
    </div>
  );
}

export default CheckOutCard;

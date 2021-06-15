import React, { useState } from "react";
import { Button, Grid, Paper, Typography, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { API } from "../../API/api";
import GetOrderDetailsStyles from "./GetOrderDetailsStyle";
import { useHistory } from "react-router";

function CheckOutCard(props) {
  const classes = GetOrderDetailsStyles();
  const history = useHistory();
  const [addressData, setAddressData] = useState({
    addressLine: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });
  const { addressLine, pincode, city, state, country } = addressData;

  // const [arrayState, setArrayState] = useState({
  //   array: [],
  // });
  // const { array } = arrayState;

  const { getAddress } = props;

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

  const postAddressHandler = () => {
    newAddress();
  };
  const newAddress = () => {
    const onResponse = {
      success: (res) => {
        console.log("res", res.data.address);
        // setArrayState({ array: res.data.address });
      },
      error: (error) => {},
    };
    API.newAddress(onResponse, addressData);
  };

  const editHandler = (e) => {
    e.preventDefault();
    updateAddress();
    setDialog(false);
  };
  function updateAddress() {
    const onResponse = {
      success: (res) => {
        console.log("res", res);
        setAddressData(addressData);
      },
      error: (error) => {},
    };
    API.updateAddress(onResponse, addressData);
  }

  return (
    <div>
      <Paper className={classes.paperAddress}>
        <Typography
          variant="h5"
          style={{ fontWeight: "bold" }}
          className={classes.address}
        >
          Address
        </Typography>
        <hr />
        {getAddress &&
          getAddress.map((address) => (
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography variant="body2" className={classes.address}>
                  <Typography> {address.addressLine}</Typography>
                  <Typography> {address.pincode}</Typography>
                  <Typography>
                    {address.city} ,{address.state}- {address.country}
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
          ))}

        <Dialog
          open={open}
          onClose={openDialogHandler}
          className={classes.dialogBox}
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
                  color="primary"
                  className={classes.submitEdit}
                  onChange={handleChange}
                  onClick={editHandler}
                  variant="contained"
                >
                  Submit
                </Button>
              </Typography>
            </DialogActions>
          </Paper>
        </Dialog>

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
          open={dialog}
          onClose={dialogHandler}
          className={classes.dialogBox}
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

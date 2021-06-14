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

import GetOrderDetailsStyles from "./GetOrderDetailsStyle";

function CheckOutCard() {
  const classes = GetOrderDetailsStyles();

  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(false);

  const openDialogHandler = () => {
    setOpen(open ? false : true);
  };
  const dialogHandler = () => {
    setDialog(dialog ? false : true);
  };
  return (
    <Card className={classes.cardRoot}>
      <CardActionArea>
        <CardContent>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold" }}
            className={classes.address}
          >
            Address
          </Typography>
          <hr />
          <Paper className={classes.paperAddress}>
            <Typography variant="body2" className={classes.address}>
              <Typography> 302 , Abhishek Avenue</Typography>
              <Typography> Indore - 42100</Typography>
              <Typography>India</Typography>
            </Typography>
            <Button
              className={classes.editButton}
              color="primary"
              onClick={openDialogHandler}
              variant="contained"
            >
              Edit
            </Button>

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
                      id="standard-multiline-static"
                      variant="outlined"
                      size="small"
                      className={classes.textFieldProfile}
                    />
                  </Typography>
                  <Typography className={classes.typoProfile}>
                    Pincode:
                    <TextField
                      variant="outlined"
                      size="small"
                      className={classes.textFieldProfile}
                    />
                  </Typography>
                  <Typography className={classes.typoProfile}>
                    City:
                    <TextField
                      variant="outlined"
                      size="small"
                      className={classes.textFieldProfile}
                    />
                  </Typography>
                  <Typography className={classes.typoProfile}>
                    State:
                    <TextField
                      variant="outlined"
                      size="small"
                      className={classes.textFieldProfile}
                    />
                  </Typography>
                  <Typography className={classes.typoProfile}>
                    Country:
                    <TextField
                      variant="outlined"
                      size="small"
                      className={classes.textFieldProfile}
                    />
                  </Typography>
                </DialogContent>
                <DialogActions className={classes.submitEdit}>
                  <Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.submitEdit}
                    >
                      Submit
                    </Button>
                  </Typography>
                </DialogActions>
              </Paper>
            </Dialog>
          </Paper>
        </CardContent>
      </CardActionArea>
      <hr />
      <CardActions>
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
                  id="standard-multiline-static"
                  variant="outlined"
                  size="small"
                  className={classes.textFieldProfile}
                />
              </Typography>
              <Typography className={classes.typoProfile}>
                Pincode:
                <TextField
                  variant="outlined"
                  size="small"
                  className={classes.textFieldProfile}
                />
              </Typography>
              <Typography className={classes.typoProfile}>
                City:
                <TextField
                  variant="outlined"
                  size="small"
                  className={classes.textFieldProfile}
                />
              </Typography>
              <Typography className={classes.typoProfile}>
                State:
                <TextField
                  variant="outlined"
                  size="small"
                  className={classes.textFieldProfile}
                />
              </Typography>
              <Typography className={classes.typoProfile}>
                Country:
                <TextField
                  variant="outlined"
                  size="small"
                  className={classes.textFieldProfile}
                />
              </Typography>
            </DialogContent>
            <DialogActions className={classes.submitEdit}>
              <Typography>
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </Typography>
            </DialogActions>
          </Paper>
        </Dialog>
      </CardActions>
    </Card>
  );
}

export default CheckOutCard;

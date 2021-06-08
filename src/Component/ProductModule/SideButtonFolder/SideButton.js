import React from "react";
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

import SideButtonStyles from "./SideButtonStyles";

function SideButton() {
  const classes = SideButtonStyles();
  return (
    <div>
      <Paper variant="elevation" className={classes.allProduct}>
        <Button> All Product</Button>
      </Paper>
      <Typography className={classes.categories}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Categories</Typography>
          </AccordionSummary>
          <Typography>
            <Button>Sofa</Button>
          </Typography>
          <Typography>
            <Button>Bed</Button>
          </Typography>
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
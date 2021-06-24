import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TableCell, TableRow } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";

import { API } from "../../API/api";
import GetCartDataStyles from "./GetCartDataStyles";

function ProductTable(props) {
  const classes = GetCartDataStyles();
  const [count, setCount] = useState(1);
  const { deleteHandler, item } = props;

  const Decrement = (id) => {
    if (count > 1) {
      setCount(count - 1);
    }
    const onResponse = {
      success: (res) => {
        console.log(res);
      },
      error: (error) => {},
    };

    API.updateFromCart(onResponse, { quantity: count }, id);
  };
  const Increment = (id) => {
    setCount(count + 1);
    const onResponse = {
      success: (res) => {
        console.log(res);
      },
      error: (error) => {},
    };
    API.updateFromCart(onResponse, { quantity: count }, id);
  };

  return (
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
        <Button
          onClick={() => Decrement(item.productId.id)}
          startIcon={<RemoveIcon />}
        />
        <input value={count} style={{ width: "9px" }} />
        <Button
          onClick={() => Increment(item.productId.id)}
          startIcon={<AddIcon />}
        />
      </TableCell>
      <TableCell>{item.productId.price}</TableCell>
      <TableCell>{item.totalAmount * count}</TableCell>
      <TableCell>
        <DeleteIcon onClick={() => deleteHandler(item.productId.id)} />
      </TableCell>
    </TableRow>
  );
}

export default ProductTable;

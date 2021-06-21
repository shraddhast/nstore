import React, { useEffect } from "react";
import { useHistory } from "react-router";

import GetOrderDetails from "./GetOrderDetails";

function OrderModuleProtectedRoute() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      history.push("./getOrderDetails");
    } else {
      history.push("./");
    }
  }, []);
  return (
    <div>
      <GetOrderDetails />
    </div>
  );
}

export default OrderModuleProtectedRoute;

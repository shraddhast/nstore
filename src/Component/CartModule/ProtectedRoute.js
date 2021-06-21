import React, { useEffect } from "react";
import { useHistory } from "react-router";

import GetCartData from "./GetCartData";

function ProtectedRoute() {
  const token = localStorage.getItem("token");
  const history = useHistory();
  useEffect(() => {
    if (token) {
    } else {
      alert(
        "You are not logged-in. Please login if you are an existing user or Register if you are new user to proceed further"
      );
      history.push("./login");
    }
  }, []);
  return (
    <div>
      <GetCartData />
    </div>
  );
}

export default ProtectedRoute;

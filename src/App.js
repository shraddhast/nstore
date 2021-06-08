import "./App.css";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Component/DashboardModule/Dashboard";
import ForgotPassword from "./Component/UserModule/LoginRegisterfolder/ForgotPassword/ForgotPassword";
import Login from "./Component/UserModule/LoginRegisterfolder/LoginFolder/Login";
import Product from "./Component/ProductModule/ProductFolder/Product";
import Register from "./Component/UserModule/LoginRegisterfolder/RegistrationFolder/Register";
import OpenProduct from "./Component/ProductDetails/OpenProduct";
import GetCartData from "./Component/CartModule/GetCartData";
import GetOrderDetails from "./Component/OrderModule/GetOrderDetails";
import CheckOut from "./Component/CheckOutModule/CheckOut";
import MyAccount from "./Component/MyAccountModule/MyAccount";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/commonProducts" component={Product} />
        <Route exact path="/products/:id" component={OpenProduct} />
        <Route exact path="/getCartData" component={GetCartData} />
        <Route exact path="/getOrderDetails" component={GetOrderDetails} />
        <Route exact path="/checkOut" component={CheckOut} />
        <Route exact path="/myAccount" component={MyAccount} />
      </Switch>
    </div>
  );
}

export default App;

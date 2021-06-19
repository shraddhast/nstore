import "./App.css";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Component/DashboardModule/Dashboard";
import ForgotPassword from "./Component/UserModule/LoginRegisterfolder/ForgotPassword/ForgotPassword";
import GetCartData from "./Component/CartModule/GetCartData";
import GetOrderDetails from "./Component/OrderModule/GetOrderDetails";
import Login from "./Component/UserModule/LoginRegisterfolder/LoginFolder/Login";
import OpenProduct from "./Component/ProductDetails/OpenProduct";
import Product from "./Component/ProductModule/ProductFolder/Product";
import Register from "./Component/UserModule/LoginRegisterfolder/RegistrationFolder/Register";

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
      </Switch>
    </div>
  );
}

export default App;

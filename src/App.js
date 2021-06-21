import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Component/DashboardModule/Dashboard"));
const ForgotPassword = lazy(() =>
  import(
    "./Component/UserModule/LoginRegisterfolder/ForgotPassword/ForgotPassword"
  )
);
const Login = lazy(() =>
  import("./Component/UserModule/LoginRegisterfolder/LoginFolder/Login")
);
const OpenProduct = lazy(() =>
  import("./Component/ProductDetails/OpenProduct")
);
const Product = lazy(() =>
  import("./Component/ProductModule/ProductFolder/Product")
);
const Register = lazy(() =>
  import(
    "./Component/UserModule/LoginRegisterfolder/RegistrationFolder/Register"
  )
);
const ProtectedRoute = lazy(() =>
  import("./Component/CartModule/ProtectedRoute")
);
const OrderModuleProtectedRoute = lazy(() =>
  import("./Component/OrderModule/OrderModuleProtectedRoute")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div> please wait.....</div>}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/commonProducts" component={Product} />
          <Route exact path="/products/:id" component={OpenProduct} />
          <Route exact path="/getCartData" component={ProtectedRoute} />
          <Route
            exact
            path="/getOrderDetails"
            component={OrderModuleProtectedRoute}
          />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

import "./App.css";
import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Notifications } from "react-push-notification";

import Lazy from "./Lazy";
import PushNotification from "./Component/PushNotification";
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
      <Notifications />
      <Suspense fallback={<Lazy />}>
        <Switch>
          <Route exact path="/notification" component={PushNotification} />
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

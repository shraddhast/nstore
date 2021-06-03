import "./App.css";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Component/DashboardModule/Dashboard";
import ForgotPassword from "./Component/UserModule/LoginRegisterfolder/ForgotPassword/ForgotPassword";
import Login from "./Component/UserModule/LoginRegisterfolder/LoginFolder/Login";
import Register from "./Component/UserModule/LoginRegisterfolder/RegistrationFolder/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
      </Switch>
    </div>
  );
}

export default App;

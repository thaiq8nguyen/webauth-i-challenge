import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Management from "./pages/Management";
import PrivateRoute from "./components/Routing/PrivateRoute";

function AppRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <PrivateRoute path="/management" component={Management} />
        </Switch>
      </Router>
    </>
  );
}

export default AppRouter;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function AppRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/registration" component={Registration}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default AppRouter;

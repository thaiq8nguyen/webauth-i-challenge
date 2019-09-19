import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../../contexts/Auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  return (
    <>
      <Route
        {...rest}
        render={props => {
          if (!isAuthenticated) {
            return (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            );
          }

          return <Component {...props} />;
        }}
      />
    </>
  );
};

export default PrivateRoute;

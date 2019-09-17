import React, { useContext, useEffect } from "react";
import AuthContext from "../../contexts/Auth/authContext";
import { Formik } from "formik";
import { Container, Grid } from "semantic-ui-react";
import LoginForm from "./LoginForm";

const Login = ({ history }) => {
  const authContext = useContext(AuthContext);
  const { isLoading, isAuthenticated, loginError, loginUser } = authContext;
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/management");
    }
  }, [isAuthenticated, history]);
  return (
    <>
      <Container>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column width={5}>
            <Formik
              initialValues={{
                email: "tnguyen@email.dev",
                password: "student"
              }}
              onSubmit={(values, actions) => {
                loginUser(values);
              }}
              render={formikProps => (
                <LoginForm
                  {...formikProps}
                  isLoggingIn={isLoading}
                  loginError={loginError}
                />
              )}
            />
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default Login;

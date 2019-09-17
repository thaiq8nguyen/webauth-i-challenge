import React, { useContext, useEffect } from "react";
import AuthContext from "../../contexts/Auth/authContext";
import { Formik } from "formik";
import { Container, Grid } from "semantic-ui-react";
import RegistrationForm from "./RegistrationForm";

const Registration = ({ history }) => {
  const authContext = useContext(AuthContext);
  const {
    isLoading,
    isAuthenticated,
    registerUser,
    registrationError
  } = authContext;

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
                first_name: "Thai",
                last_name: "Nguyen",
                email: "tnguyen@email.net",
                password: "very_secure_password"
              }}
              onSubmit={(values, actions) => {
                registerUser(values);
              }}
              render={formikProps => (
                <RegistrationForm
                  {...formikProps}
                  isRegistering={isLoading}
                  registrationError={registrationError}
                />
              )}
            />
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default Registration;

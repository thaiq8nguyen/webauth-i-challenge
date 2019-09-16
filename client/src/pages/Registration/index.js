import React, { useContext } from "react";
import AuthContext from "../../contexts/Auth/authContext";
import { Formik } from "formik";
import { Container, Grid } from "semantic-ui-react";
import RegistrationForm from "./RegistrationForm";
import AuthState from "../../contexts/Auth/authState";
const Registration = () => {
  const authContext = useContext(AuthContext);
  const { isLoading, registerUser, registrationError } = authContext;
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

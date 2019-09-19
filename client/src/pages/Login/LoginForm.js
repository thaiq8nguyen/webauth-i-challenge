import React from "react";
import { Button, Card, Form, Header, Grid, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/login.module.scss";
const LoginForm = ({
  values,
  handleChange,
  handleSubmit,
  isLoggingIn,
  loginError
}) => {
  return (
    <>
      <Card fluid>
        {loginError && (
          <Card.Content textAlign="left">
            <Message negative visible>
              <Header as="h4">Login Error</Header>
              {loginError.message}
            </Message>
          </Card.Content>
        )}
        <Card.Content>
          <Form onSubmit={handleSubmit}>
            <Header textAlign="left" className={styles.title}>
              User Login
            </Header>
            <Form.Input
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              type="text"
            />
            <Form.Input
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
            />
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Button
                    loading={isLoggingIn}
                    type="submit"
                    primary
                    size="small"
                  >
                    Login
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Message>
                    <p>
                      Not registered yet?{" "}
                      <Link to="/registration">Register</Link>
                    </p>
                  </Message>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Card.Content>
      </Card>
    </>
  );
};

export default LoginForm;

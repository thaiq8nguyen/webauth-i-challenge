import React from "react";
import {
  Button,
  Card,
  Form,
  Header,
  Grid,
  List,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";
const RegistrationForm = ({
  values,
  handleChange,
  handleSubmit,
  isRegistering,
  registrationError
}) => {
  return (
    <>
      <Card fluid>
        {registrationError && (
          <Card.Content textAlign="left">
            <Message negative visible>
              <Header as="h4">Registration Errors</Header>
              <List>
                {registrationError.message.map(error => (
                  <List.Item key={error}>&#8226; {error}</List.Item>
                ))}
              </List>
            </Message>
          </Card.Content>
        )}
        <Card.Content>
          <Form onSubmit={handleSubmit}>
            <Header textAlign="left">User Registration</Header>
            <Form.Input
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              placeholder="First Name"
              type="text"
            />
            <Form.Input
              name="last_name"
              value={values.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              type="text"
            />
            <Form.Input
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              type="text"
            />
            <Form.Input
              name="Password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
            />
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Button
                    loading={isRegistering}
                    type="submit"
                    primary
                    size="small"
                  >
                    Register
                  </Button>
                </Grid.Column>
                <Grid.Column>
                  <Message>
                    <p>
                      Already registered? <Link to="/">Login</Link>
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

export default RegistrationForm;

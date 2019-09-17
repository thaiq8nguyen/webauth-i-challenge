import React, { useEffect, useState } from "react";
import { Card, Header, Grid, Table } from "semantic-ui-react";
import Navbar from "../../components/Navbar";
import { client } from "../../utils/apiClient";
const Management = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    client
      .get("/api/users")
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(errors => {
        console.log(errors);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <Header>Users Management</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Card fluid>
              <Card.Content>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>First Name</Table.HeaderCell>
                      <Table.HeaderCell>Last Name</Table.HeaderCell>
                      <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {users.length > 0 &&
                      users.map((user, index) => (
                        <Table.Row key={index}>
                          <Table.Cell>{user.first_name}</Table.Cell>
                          <Table.Cell>{user.last_name}</Table.Cell>
                          <Table.Cell>{user.email}</Table.Cell>
                        </Table.Row>
                      ))}
                  </Table.Body>
                </Table>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Management;

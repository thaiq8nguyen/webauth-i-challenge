import React from "react";
import { Header, Grid } from "semantic-ui-react";
import Navbar from "../../components/Navbar";
const Management = () => {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid.Column>
          <Header>Users Management</Header>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Management;

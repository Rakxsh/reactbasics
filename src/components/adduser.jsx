import React, { Component } from "react";
import { Typography, Container } from "@material-ui/core";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={{ paddingTop: "70px" }}>
        <Typography variant="h1">Add User</Typography>
      </Container>
    );
  }
}

export default AddUser;
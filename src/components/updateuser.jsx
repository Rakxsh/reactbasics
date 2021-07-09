import React, { Component } from "react";
import { Typography, Container } from "@material-ui/core";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container style={{ paddingTop: "70px" }}>
        <Typography variant="h1">Update User</Typography>
      </Container>
    );
  }
}

export default UpdateUser;
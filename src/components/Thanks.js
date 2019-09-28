import React, { Component } from "react";
import { Header } from "semantic-ui-react";

class Thanks extends Component {
  state = {};
  render() {
    return (
      <div style={{ paddingTop: "100px", marginBottom: "25%" }}>
        <Header
          as="h1"
          style={{
            fontSize: "5em",
            color: "rgb(47, 137, 60)",
            paddingBottom: "40px"
          }}
        >
          Thank you for your donation!
        </Header>
      </div>
    );
  }
}

export default Thanks;

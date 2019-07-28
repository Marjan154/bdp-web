import React, { Component } from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";
import DropdownNav from "./Dropdown";
import styles from "../styles/nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  render() {
    return (
      <div style={{ marginBottom: "5em" }}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment>
            <Menu
              fixed="top"
              inverted
              style={{ background: "rgb(165, 18, 18)" }}
            >
              <Container>
                <Menu.Item as="a" header style={{ padding: "25px" }}>
                  <Image
                    size="tiny"
                    src={require("../images/logoBDP.png")}
                    style={{ marginRight: "1.5em" }}
                  />
                  Bangladesh Development Project
                </Menu.Item>
                <Menu.Item as={Link} to="/">
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to="/projects">
                  Projects
                </Menu.Item>
                <Menu.Item as={Link} to="/donate">
                  Donate
                </Menu.Item>
                <Menu.Item as={Link} to="/team">
                  Team
                </Menu.Item>
                <DropdownNav />
              </Container>
            </Menu>
          </Segment>
        </Visibility>
      </div>
    );
  }
}

export default Nav;

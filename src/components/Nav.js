import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import DropdownNav from "./Dropdown";
import styles from "../styles/nav.css";
import { Link } from "react-router-dom";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class Nav extends Component {
  state = {};

  isArticle = this.props.isArticle;
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  render() {
    const { fixed } = this.state;
    return (
      <div>
        <Responsive
          getWidth={getWidth}
          minWidth={Responsive.onlyTablet.minWidth}
        >
          <Visibility
            once={false}
            onBottomPassed={this.hideFixedMenu}
            // onBottomPassedReverse={this.showFixedMenu}
          >
            {/* <Segment> */}
            <Menu
              className="navbar"
              fixed={fixed ? "top" : null}
              inverted
              style={{ background: "rgb(165, 18, 18)" }}
            >
              <Container>
                <Menu.Item
                  as={Link}
                  to="/"
                  header
                  // style={{ padding: "25px" }}
                >
                  <Image
                    size="tiny"
                    src={require("../images/logoBDP.png")}
                    style={{ marginRight: "1.5em" }}
                  />
                  Bangladesh Development Project
                </Menu.Item>
                <Menu.Item as={Link} to="/" style={{ height: "100px" }}>
                  Home
                </Menu.Item>
                <DropdownNav />
                <Menu.Item as={Link} to="/projects" style={{ height: "100px" }}>
                  Projects
                </Menu.Item>
                <Menu.Item as={Link} to="/donate" style={{ height: "100px" }}>
                  Donate
                </Menu.Item>
                <Menu.Item as={Link} to="/team" style={{ height: "100px" }}>
                  Team
                </Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as="a"
                    style={{
                      background: "transparent",
                      borderColor: "white",
                      borderRadius: "10px"
                    }}
                  >
                    Donate
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            {/* </Segment> */}
          </Visibility>
        </Responsive>
      </div>
    );
  }
}

export default Nav;

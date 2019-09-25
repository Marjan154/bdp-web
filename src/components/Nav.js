import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Responsive,
  Visibility
} from "semantic-ui-react";
import DropdownNav from "./Dropdown";
import styles from "../styles/nav.css";
import { Link, withRouter } from "react-router-dom";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class Nav extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  render() {
    return (
      <div>
        <Responsive minWidth={768}>
          <div>
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
                    <Menu.Item
                      as={Link}
                      to="/"
                      header
                      style={{ padding: "25px" }}
                    >
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
                    <DropdownNav />
                    <Menu.Item as={Link} to="/projects">
                      Projects
                    </Menu.Item>
                    <Menu.Item as={Link} to="/donate">
                      Donate
                    </Menu.Item>
                    <Menu.Item as={Link} to="/team">
                      Team
                    </Menu.Item>
                    <Menu.Item position="right" id="donate_button">
                      <Button inverted size="large" as={Link} to="/donate">
                        Donate
                      </Button>
                    </Menu.Item>
                  </Container>
                </Menu>
              </Segment>
            </Visibility>
          </div>
        </Responsive>
        {this.props.location.pathname !== "/" && <MobileContainer />}
      </div>
    );
  }
}

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
          <Menu.Item as={Link} to="/issues">
            Issues
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
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 350,
              padding: "1em 0em",
              backgroundImage: "none",
              backgroundColor: "white"
            }}
            vertical
          >
            <Container>
              <Menu
                inverted
                pointing
                secondary
                size="large"
                style={{ background: "rgb(165, 18, 18)" }}
              >
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button inverted size="large" as={Link} to="/donate">
                    Donate
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

export default withRouter(Nav);

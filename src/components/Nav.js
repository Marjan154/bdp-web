import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import DropdownNav from "./Dropdown";
import { Link } from "react-router-dom";

const FixedMenuLayout = () => (
  <div style={{ marginBottom: "5em" }}>
    <Segment>
      <Menu fixed="top" inverted style={{ background: "rgb(165, 18, 18)" }}>
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
        </Container>
      </Menu>
    </Segment>
  </div>
);

export default FixedMenuLayout;

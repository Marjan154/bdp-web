import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <Dropdown
        className="d-inline-block"
        onMouseOver={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle caret>Issues</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to="/education">Education</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/healthcare">Healthcare</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/prostitution">Prostitution</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/childlabor">Child Labor</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/childlabor">Early Marriage</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Example;

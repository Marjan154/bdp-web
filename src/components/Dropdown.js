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
        <DropdownToggle tag={Link} to="/issues" caret>
          Issues
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag={Link} to="/issues/education">
            Education
          </DropdownItem>
          <DropdownItem tag={Link} to="issues/healthcare">
            Healthcare
          </DropdownItem>
          <DropdownItem tag={Link} to="/issues/prostitution">
            Prostitution
          </DropdownItem>
          <DropdownItem tag={Link} to="/issues/childlabor">
            Child labor
          </DropdownItem>
          <DropdownItem tag={Link} to="/issues/earlymarriage">
            Early Marriage
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Example;

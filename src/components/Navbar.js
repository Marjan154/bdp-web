import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          {/* {" "} */}
          {/* <Link to="/issues/">Issues</Link>  */}
          <Dropdown />
        </li>
        <li>
          {" "}
          <Link to="/projects/">Projects</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/donate/">Donate</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

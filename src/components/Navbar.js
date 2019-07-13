import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link to="/Home">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Issues/">Issues</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Projects/">Projects</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Donate/">Donate</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

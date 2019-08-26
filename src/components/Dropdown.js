import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "../styles/nav.css";
import Navbar from "./Navbar";

const options = [
  { key: 1, text: "Education", value: 1, as: Link, to: "/issues/education" },
  { key: 2, text: "Healthcare", value: 2, as: Link, to: "/issues/healthcare" },
  {
    key: 3,
    text: "Prostitution",
    value: 3,
    as: Link,
    to: "/issues/prostitution"
  },
  { key: 4, text: "Child labor", value: 4, as: Link, to: "/issues/childlabor" },
  {
    key: 5,
    text: "Early Marriage",
    value: 5,
    as: Link,
    to: "/issues/earlymarriage"
  }
];

const DropdownNav = () => (
  <Dropdown
    item
    simple
    text="Issues"
    options={options}
    style={{ color: "white", height: "100px" }}
  />
);

export default DropdownNav;

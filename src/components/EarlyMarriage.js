import React, { Component } from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import "../styles/earlymarriage.css";
import TemplateIssue from "./TemplateIssue";

const data = [
  {
    id: "1",
    issue: "earlymarriage",
    title: "Pedophilia Related to Child Brides",
    author: "Marjan",
    articleFile: "earlymarriage1",
    img: "healthcard1.jpg"
  },
  {
    id: "2",
    issue: "earlymarriage",
    title: "Pedophilia Related to Child Brides",
    author: "Marjan",
    articleFile: "earlymarriage1",
    img: "healthcard1.jpg"
  },
  {
    id: "3",
    issue: "earlymarriage",
    title: "Early Marriage",
    author: "Marjan",
    articleFile: "earlymarriage1",
    img: "healthcard1.jpg"
  }
];
const mainImg = require("../images/pinkMarriage.jpg");
const mainSummary = (
  <div>
    Bangladesh has the fourth highest rate for early childhood marriages in the
    world. Due to various factors such as cultural values and norms, social
    pressures, and poverty, many girls are married between the ages of 15-16.
    59% of girls are married before age 18, and 22% are married before they are
    even 15 years old.
  </div>
);
const actionline = (
  <p style={{ color: "black" }}>
    Interested in learning more about BDP’s 5 core areas of focus? Read our
    research articles below and get inspired to change Bangladesh for the better
    too!
  </p>
);

class EarlyMarriage extends Component {
  state = {};
  render() {
    return (
      <TemplateIssue
        mainTitle={<div>Early Marriage</div>}
        mainImg={mainImg}
        mainSummary={mainSummary}
        actionline={actionline}
        data={data}
      />
    );
  }
}

export default EarlyMarriage;

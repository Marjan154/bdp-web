import React, { Component } from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import "../styles/earlymarriage.css";
import TemplateIssue from "./TemplateIssue";

const data = [
  {
    id: "1",
    issue: "earlymarriage",
    title: "Early Marriage",
    author: "Marjan",
    articleFile: "earlymarriage1",
    img: "healthcard1.jpg"
  },
  {
    id: "2",
    issue: "earlymarriage",
    title: "Early Marriage",
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
  },
];
const mainImg = require("../images/pinkMarriage.jpg");
const mainSummary = (
  <div>
    The health care in Bengladesh is poor. We need your help.
  </div>
);
const actionline = (
  <p style={{ color: "black" }}>
    Donate Now
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

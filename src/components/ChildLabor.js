import React, { Component } from "react";
import TemplateIssue from "./TemplateIssue";

const data = [
  {
    id: "1",
    issue: "childlabor",
    title: "Child Labor in Shipbreaking Industries",
    author: "Mohuya Khan",
    articleFile: "childlabor1.js",
    img: "laborArticle1.jpg"
  },
  {
    id: "2",
    issue: "childlabor",
    title: "A Look Into Child Labor in Bangladesh",
    author: "Tausif Islam",
    articleFile: "childlabor2.js",
    img: "laborArticle2.jpg"
  },
  {
    id: "3",
    issue: "childlabor",
    title: "Fashion at a Cost: Child Labor in Bangladesh’s Sweatshops",
    author: "Farhana Hussain",
    articleFile: "childlabor3.js",
    img: "laborArticle3.jpg"
  }
];
const mainImg = require("../images/MainLabor.jpg");
const mainSummary = (
  <div>
    Children are forced to work in unimaginable conditions at a very young age,
    because they can barely feed themselves, let alone get educated. We need to
    put and end to this vicious cycle of poverty, labor and uneducation.
  </div>
);
const actionline = (
  <p style={{ color: "black" }}>
    Interested in learning more about BDP’s 5 core areas of focus? Read our
    research articles below and get inspired to change Bangladesh for the better
    too!
  </p>
);

class ChildLabor extends Component {
  state = {};
  render() {
    return (
      <TemplateIssue
        mainTitle={<div>Child Labor</div>}
        mainImg={mainImg}
        mainSummary={mainSummary}
        actionline={actionline}
        data={data}
      />
    );
  }
}

export default ChildLabor;

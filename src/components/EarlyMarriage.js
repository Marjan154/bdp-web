import React, { Component } from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import "../styles/earlymarriage.css";
import TemplateIssue from "./TemplateIssue";

const data = [
  {
    id: "1",
    name: "Ashabul Khan",
    title: "President & Founder",
    description:
      "I am Ashabul Khan, born and raised in Dhaka, Bangladesh. I graduated from Hunter College with a major in Political Science and a minor in Maths. I like studying history and playing piano during my pastime. I also like playing cricket and soccer during summer. I love traveling around the world. My dream is to see a Bangladesh free of poverty, illiteracy, and malnutrition.",
    img: "Ashabul.jpg"
  },
  {
    id: "2",
    name: "Tahmid Zawad",
    title: "Vice President",
    description: "Vice President Bio",
    img: "Tahmid.jpg"
  },
  {
    id: "3",
    title: "Tanjeela newaz",
    description: "Cultural Chair",
    img: "Tanjeela.jpg"
  }
];
const mainImg = require("../images/Education.jpg");
const mainSummary = (
  <p>
    This is a template that is great for small businesses. It doesn't have too
    much fancy flare to it, but it makes a great use of the standard Bootstrap
    core components. Feel free to use this template for any project you want!
  </p>
);
const actionline = (
  <p>
    This call to action card is a great place to showcase some important
    information or display a clever tagline!
  </p>
);

class EarlyMarriage extends Component {
  state = {};
  render() {
    return (
      <TemplateIssue
        mainImg={mainImg}
        mainSummary={mainSummary}
        actionline={actionline}
        data={data}
      />
    );
  }
}

export default EarlyMarriage;

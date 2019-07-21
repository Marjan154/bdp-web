import React, { Component } from "react";
import "../styles/issues.css";
import { Card, Icon, Image, Grid, Container } from "semantic-ui-react";
import BigCard from "./BigCard";
import { Link } from "react-router-dom";

const des = (
  <div>
    BDP took on a special initiative to sponsor Iftaar dinner for a large cohort
    of poor and helpless people. BDP was able to fundraise enough to feed 1000
    people over a span of FIVE days!
  </div>
);

class Issues extends Component {
  state = {};
  render() {
    return (
      <div>
        <BigCard
          image="https://d30fl32nd2baj9.cloudfront.net/media/2017/05/21/health.jpg/ALTERNATES/w640/Health.jpg"
          description={des}
          title="Healthcare"
          linkroute="/healthcare"
        />
        <BigCard
          image="https://d30fl32nd2baj9.cloudfront.net/media/2017/05/21/health.jpg/ALTERNATES/w640/Health.jpg"
          description={<div>this is description</div>}
          title="Prostitution"
          linkroute="/prostitution"
        />

        <BigCard
          image="https://d30fl32nd2baj9.cloudfront.net/media/2017/05/21/health.jpg/ALTERNATES/w640/Health.jpg"
          description={<div>this is description</div>}
          title="Education"
          linkroute="/education"
        />

        <BigCard
          image="https://d30fl32nd2baj9.cloudfront.net/media/2017/05/21/health.jpg/ALTERNATES/w640/Health.jpg"
          description={<div>this is description</div>}
          title="Child marriage"
          linkroute="/earlymarriage"
        />

        <BigCard
          image="https://d30fl32nd2baj9.cloudfront.net/media/2017/05/21/health.jpg/ALTERNATES/w640/Health.jpg"
          description={<div>this is description</div>}
          title="Child Labor"
          linkroute="/childlabor"
        />
      </div>
    );
  }
}

export default Issues;

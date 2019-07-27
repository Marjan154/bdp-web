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
const healthDes = (
  <div>
    Access to healthcare is a greater issue in third world countries.
    Bangladesh, a developing nation, suffers from a large socioeconomic gap in
    access to care. This gap creates an inefficient delivery of proper
    healthcare which leads to major health concerns.
  </div>
);

const laborDes = (
  <div>
    Child labor is really common in Bangladesh with about 4.5 million of the
    children are in the workforce. Poverty is the main cause of child labor in
    Bangladesh. Education can be expensive in Bangladesh and not everyone can
    afford it. Most of these children are from very poor families and their
    parents can’t afford to provide an education. Therefore, the young kids are
    forced to work to support the family.
  </div>
);

const prostitutionDes = (
  <div>
    Prositution is legalized in Bangladesh,even though their state religion,
    Islam forbids it. Women are abused and treated cruelly while recieving
    little to no compensation in return.
  </div>
);

const educationDes = (
  <div>
    Pooverty in Bangaldesh is widespread, it is no surprise that education is
    limited. Children cannot offord to have education, becuase they cannot pay
    the fees or are to busy paying to survive
  </div>
);

const marriageDes = (
  <div>
    Young girls are forced or sold into marriage with men, which leds them into
    a lifetime of abuse and mistreatment
  </div>
);

class Issues extends Component {
  state = {};
  render() {
    return (
      <div>
        <BigCard
          image="https://d30fl32nd2baj9.cloudfront.net/media/2017/05/21/health.jpg/ALTERNATES/w640/Health.jpg"
          description={healthDes}
          title="Healthcare"
          linkroute="/healthcare"
        />
        <BigCard
          image="https://d30fl32nd2baj9.cloudfront.net/media/2017/05/21/health.jpg/ALTERNATES/w640/Health.jpg"
          description={prostitutionDes}
          title="Prostitution"
          linkroute="/prostitution"
        />

        <BigCard
          image="https://d30fl32nd2baj9.cloudfront.net/media/2017/05/21/health.jpg/ALTERNATES/w640/Health.jpg"
          description={educationDes}
          title="Education"
          linkroute="/education"
        />

        <BigCard
          image="https://d30fl32nd2baj9.cloudfront.net/media/2017/05/21/health.jpg/ALTERNATES/w640/Health.jpg"
          description={marriageDes}
          title="Child marriage"
          linkroute="/earlymarriage"
        />

        <BigCard
          image="https://d30fl32nd2baj9.cloudfront.net/media/2017/05/21/health.jpg/ALTERNATES/w640/Health.jpg"
          description={laborDes}
          title="Child Labor"
          linkroute="/childlabor"
        />
      </div>
    );
  }
}

export default Issues;

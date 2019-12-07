import React, { Component } from "react";
import "../../styles/projects.css";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

import educationVideo from "../../images/education_video.mp4";

class EducationProject extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div style={{ padding: "50px" }}>
        <Header as="h1" style={{ fontSize: "3em", color: "rgb(47, 137, 60)" }}>
          {
            <div style={{ padding: "50px" }}>
              Sponsor Education 2019 Project
            </div>
          }
        </Header>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <p style={{ fontSize: "1.5em" }}>
              Education is the world's greatest equalizer. Unfortunately, many
              of the youth cannot afford to pay for their tuition fees. With
              only $12, you can sponsor an entire month of education for a child
              in need.
            </p>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated="left" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src={require("../../images/Education_Flyer.jpg")}
                style={{ border: "solid 1px black" }}
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <video
                width="500"
                height="400"
                controls
                style={{
                  backgroundColor: "black",
                  border: "solid 1px black"
                }}
              >
                <source src={educationVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <p style={{ fontSize: "1.5em", textAlign: "left" }}>
              The great Muhammad Ali once said, “Service to others is the rent
              you pay for your room here on earth.” With Thanksgiving around the
              corner, the Bangladesh Development Project team would like all of
              our supporters to unite and participate in #GivingTuesday which is
              a global generosity movement unleashing the power of people and
              organizations to transform their communities and the world.
              <br />
              <br />
              Our first major project deals with opening our own scholarship
              program where we will screen and select a cohort of primary school
              students in Bangladesh and sponsor them for an entire year.
              Sponsoring one child for an entire year amounts to less than a
              Venti Iced-Coffee a day. For $3.67 a day (or $110 a month), one
              child will be able pursue his/her dreams and fulfill their basic
              human right in attaining a formal education.
              <br />
              <br />
              Your general donations will allow us to successfully spearhead
              multiple projects in 2020 for the underprivileged children in
              Bangladesh consisting of orphans as well as the financially and
              academically disadvantaged. We are in full-swing and have a big
              year ahead of us with concrete goals in mind for our long-term
              projects in Bangladesh. We hope to inspire ALL of you to give,
              collaborate, and celebrate generosity.
            </p>
            <Link to="/donate">
              <Button
                size="huge"
                style={{ background: "rgb(47, 137, 60)", color: "white" }}
              >
                I want to help
              </Button>
            </Link>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default EducationProject;

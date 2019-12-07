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

class EducationProject extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    const content = (
      <div>
        As the holy month of Ramadan nears its end, BDP took on a special
        initiative to sponsor Iftaar dinner for a large cohort of poor and
        helpless people. BDP was able to fundraise enough to feed 1000 people
        over a span of five days. What better way to end Ramadan than being able
        to feed those who do not get to enjoy the same luxuries that we do and
        eat properly to break their fast? We are extremely proud of you for
        supporting us on this very important initiative through your generous
        donations. This is a huge milestone for BDP and we wish that you all
        continue to support us in our journey to serve as a beacon of hope for
        our motherland.
      </div>
    );

    return (
      <div className="articlebody" style={{ padding: "50px" }}>
        <Header as="h1" style={{ fontSize: "3em", color: "rgb(47, 137, 60)" }}>
          {
            <div style={{ padding: "50px" }}>
              Sponsor Education 2019 Project
            </div>
          }
        </Header>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column floated="left" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src={require("../../images/Education_Flyer.jpg")}
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <p style={{ fontSize: "1em" }}>
                The great Muhammad Ali once said, “Service to others is the rent
                you pay for your room here on earth.” With Thanksgiving around
                the corner, the Bangladesh Development Project team would like
                all of our supporters to unite and participate in #GivingTuesday
                which is a global generosity movement unleashing the power of
                people and organizations to transform their communities and the
                world. Our first major project deals with opening our own
                scholarship program where we will screen and select a cohort of
                primary school students in Bangladesh and sponsor them for an
                entire year. Sponsoring one child for an entire year amounts to
                less than a Venti Iced-Coffee a day. For $3.67 a day (or $110 a
                month), one child will be able pursue his/her dreams and fulfill
                their basic human right in attaining a formal education. Your
                general donations will allow us to successfully spearhead
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default EducationProject;

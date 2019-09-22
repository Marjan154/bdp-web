import React, { Component } from "react";
import "../styles/projects.css";
import Slideshow from "./Slideshow.js";
import { Header } from "semantic-ui-react";

class Projects extends Component {
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

    const mainImg = require("../images/5.jpg");
    return (
      <div className="articlebody" style={{ padding: "50px" }}>
        <div>
          <Header
            as="h1"
            style={{ fontSize: "3em", color: "rgb(47, 137, 60)" }}
          >
            {<div>Ramadan 2019 Iftar Project</div>}
          </Header>
          <div />
        </div>

        <div>
          <p style={{ fontSize: "1.33em", color: "black", padding: "20px" }}>
            {content}
          </p>
        </div>
        <Slideshow />
      </div>
    );
  }
}

export default Projects;

{
  /* <div>
                  As the holy month of Ramadan nears its end, BDP took on a
                  special initiative to sponsor Iftaar dinner for a large cohort
                  of poor and helpless people. BDP was able to fundraise enough
                  to feed 1000 people over a span of FIVE days! Through our
                  trusted connections in Bangladesh, we have arranged the
                  seating and Iftar boxes which consist of: Rice/Pulao Chicken
                  Roast Piazu (fried onion) 2 Dates Banana Water Jilapi What
                  better way to end Ramadan than being able to feed those who do
                  not get to enjoy the same luxuries that we do and eat properly
                  to break their fast? We are extremely proud of you for
                  supporting us on this very important initiative through your
                  generous donations and shoutouts! YOU were the ones keeping
                  this initiative alive and allowing this to come to fruition.
                  This is a huge milestone for BDP and we wish that you all
                  continue to support us in our journey to serve as a beacon of
                  hope for our motherland. ✊🏾🇧🇩🙏🏽 #BDPiftaar #dhaka #bangladesh
                  #Ramadan #Ramadan2019 #GivingBack #humanitarian #unicef #jaago
                  #oxfam #helpinghands #savethechildren #childrenontheedge #brac
                  #BSAofNY #bangladeshstudentsassociation #bengalisofnewyork
                  #humansofnewyork #bangladeshdevelopmentproject
                </div> */
}

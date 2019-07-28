import React, { Component } from "react";
import "../styles/projects.css";
import { Container, Grid, Image, Card, Icon } from "semantic-ui-react";
import ArticlesTemplate from "./ArticlesTemplate";
import { Slide } from "react-slideshow-image";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {}

  render() {
    const slideImages = [
      require("../images/1.jpg"),
      require("../images/2.jpg"),
      require("../images/3.jpg")
    ];

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    };
    const content = (
      <div>
        As the holy month of Ramadan nears its end, BDP took on a special
        initiative to sponsor Iftaar dinner for a large cohort of poor and
        helpless people. BDP was able to fundraise enough to feed 1000 people
        over a span of FIVE days! Through our trusted connections in Bangladesh,
        we have arranged the seating and Iftar boxes which consist of:
        Rice/Pulao Chicken Roast Piazu (fried onion) 2 Dates Banana Water Jilapi
        What better way to end Ramadan than being able to feed those who do not
        get to enjoy the same luxuries that we do and eat properly to break
        their fast? We are extremely proud of you for supporting us on this very
        important initiative through your generous donations and shoutouts! YOU
        were the ones keeping this initiative alive and allowing this to come to
        fruition. This is a huge milestone for BDP and we wish that you all
        continue to support us in our journey to serve as a beacon of hope for
        our motherland. ✊🏾🇧🇩🙏🏽 #BDPiftaar #dhaka #bangladesh #Ramadan
        #Ramadan2019 #GivingBack #humanitarian #unicef #jaago #oxfam
        #helpinghands #savethechildren #childrenontheedge #brac #BSAofNY
        #bangladeshstudentsassociation #bengalisofnewyork #humansofnewyork
        #bangladeshdevelopmentproject
      </div>
    );
    const mainImg = require("../images/5.jpg");
    return (
      <div style={{ padding: "50px" }}>
        <Slide {...properties}>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[0]})`
              }}
            >
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[1]})`
              }}
            >
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[2]})`
              }}
            >
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>

        {/* <ArticlesTemplate
          mainImg={mainImg}
          mainTitle={<div>Ramadan 2019 Iftar Project</div>}
          content={content}
        /> */}
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

import React, { Component } from "react";
import Carousel from "semantic-ui-carousel-react";
import {Image} from "semantic-ui-react";


class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const elements = [
        {
          render: () => {
            return (
              <Image
                src={require("../images/1.jpg")}
                style={{ margin: "auto" }}
              />
            );
          }
        },
        {
          render: () => {
            return (
              <Image
                src={require("../images/2.jpg")}
                style={{ margin: "auto" }}
              />
            );
          }
        },
        {
          render: () => {
            return (
              <Image
                src={require("../images/3.jpg")}
                style={{ margin: "auto" }}
              />
            );
          }
        }
      ];
      
    return (

        <div style={{ width: "60%", margin: "0 auto" }}>
            <Carousel
                elements={elements}
                duration={3000}
                animation="slide left"
                // showNextPrev={false}
                showIndicators={true}
            />
        </div>
    );
  }
}

export default Slideshow;

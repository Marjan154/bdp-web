import React, { Component } from "react";
import Carousel from "semantic-ui-carousel-react";
import { Image } from "semantic-ui-react";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ramadanImage = [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg"
    ];
    const elements = ramadanImage.map(rimg => ({
      render: () => {
        return (
          <Image
            src={require(`../images/ramadan/${rimg}`)}
            style={{ margin: "auto" }}
          />
        );
      }
    }));

    return (
      <div style={{ width: "60%", margin: "0 auto", padding: "100px" }}>
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

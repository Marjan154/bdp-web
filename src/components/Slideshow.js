import React, { Component } from "react";
import Carousel from "semantic-ui-carousel-react";
import { Image } from "semantic-ui-react";
// import * as fs from 'fs';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ramadanImage: [
        { 
          img: "1.jpg"
        },
        {
          img: "2.jpg"
        },
        {
          img: "3.jpg"
        }
      ]
    };
  }

  componentDidMount() {
    console.log(this.state.ramadanImage);
    // console.log(files);
  }

  render() {
    const elements = this.state.ramadanImage.map(member=>{
      console.log(member.img);
      {
      render: ()=>{
        return (
          <Image
            src={require(`../images/ramadan/${member.img}`)}
            style={{ margin: "auto" }}
          />
        );
      }
          
      }});
      // let  elements  = [
      // {
      //   render: () => {
      //     return (
      //       <Image
      //         src={require("../images/1.jpg")}
      //         style={{ margin: "auto" }}
      //       />
      //     );
      //   }
      // },
      // {
      //   render: () => {
      //     return (
      //       <Image
      //         src={require("../images/2.jpg")}
      //         style={{ margin: "auto" }}
      //       />
      //     );
      //   }
      // },
      // {
      //   render: () => {
      //     return (
      //       <Image
      //         src={require("../images/3.jpg")}
      //         style={{ margin: "auto" }}
      //       />
      //     );
      //   }
      // }
    // ];

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

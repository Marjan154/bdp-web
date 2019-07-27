import React, { Component } from "react";
import BigCard from "./BigCard";
import "../styles/healthcare.css";

class Healthcare extends Component {
  state = {};
  render() {
    return (
      <div>
        <BigCard
          image="https://d30fl32nd2baj9.cloudfront.net/media/2017/05/21/health.jpg/ALTERNATES/w640/Health.jpg"
          description={
            <div>
              Access to healthcare is a greater issue in third world countries.
              Bangladesh, a developing nation, suffers from a large
              socioeconomic gap in access to care. This gap creates an
              inefficient delivery of proper healthcare which leads to major
              health concerns.
            </div>
          }
          title="Healthcare"
        />
        Healthcare
      </div>
    );
  }
}

export default Healthcare;

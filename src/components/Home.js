import React, { Component } from "react";
import "../styles/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="bg">
        <div>
          <h1 id="welcome">Bangladesh Development Welcomes You!</h1>

          <div id="mission">
            As young Bangladeshis in the United States, we believe that it is
            imperative to shed light on the injustices imposed on
            underprivileged children in Bangladesh. Unjust labor laws, unequal
            educational opportunities, and healthcare inequities are realities
            that we cannot escape. Let us unite and work diligently to ensure
            that no Bangladeshis are left behind.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

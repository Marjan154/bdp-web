import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Issues from "./components/Issues";
import Projects from "./components/Projects";
import Healthcare from "./components/Healthcare";
import ChildLabor from "./components/ChildLabor";
import Prositution from "./components/Prostitution";
import Education from "./components/Education";
import EarlyMarriage from "./components/EarlyMarriage";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/issues" component={Issues} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/issues/healthcare" component={Healthcare} />
          <Route exact path="/issues/childlabor" component={ChildLabor} />
          <Route exact path="/issues/prostitution" component={Prositution} />
          <Route exact path="/issues/education" component={Education} />
          <Route exact path="/issues/earlymarriage" component={EarlyMarriage} />
          <Route exact path="/team" component={Team} />
        </div>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Issues from "./components/Issues";
import Projects from "./components/Projects";
import Childlabor from "./components/ChildLabor";
import Education from "./components/Education";
import EarlyMarriage from "./components/EarlyMarriage";
import Prostitution from "./components/Prostitution";
import Healthcare from "./components/Healthcare"

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
          <Route exact path="/childlabor" component={Childlabor} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/earlymarriage" component={EarlyMarriage} />
          <Route exact path="/prostitution" component={Prostitution} />
          <Route exact path="/healthcare" component={Healthcare} />
        </div>
      </Router>
    </div>
  );
}

export default App;

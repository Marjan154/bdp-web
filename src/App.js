import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
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
        <Route exact path="/" component={Home} />
        <Route path="/donate" component={Donate} />
        <Route path="/issues" component={Issues} />
        <Route path="/projects" component={Projects} />
        <Route path="/issues/healthcare" component={Healthcare} />
        <Route path="/issues/childlabor" component={ChildLabor} />
        <Route path="/issues/prostitution" component={Prositution} />
        <Route path="/issues/education" component={Education} />
        <Route path="/issues/earlymarriage" component={EarlyMarriage} />
        <Route path="/team" component={Team} />
        <Route path="/nav" component={Nav} />
      </Router>
    </div>
  );
}

export default App;

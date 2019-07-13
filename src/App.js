import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Issues from "./components/Issues";
import Projects from "./components/Projects";

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
        </div>
      </Router>
    </div>
  );
}

export default App;

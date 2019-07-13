import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    </div>
  );
}

export default App;

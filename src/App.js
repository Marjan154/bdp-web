import React from "react";
import "./App.css";
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
import ArticlesTemplate from "./components/ArticlesTemplate";
import Thanks from "./components/Thanks";
import Ramadan2019 from "./components/projects/Ramadan2019";
import EducationProject from "./components/projects/Education2019";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  let isArticle = window.location.href.includes("/articles/") ? true : false;
  return (
    <div className="App">
      <Router basename="/">
        <Nav isArticle={isArticle} />
        <ScrollToTop>
          {/* <div> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/issues" component={Issues} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/ramadan2019" component={Ramadan2019} />
          <Route
            exact
            path="/projects/education2019"
            component={EducationProject}
          />
          <Route exact path="/issues/healthcare" component={Healthcare} />
          <Route exact path="/issues/childlabor" component={ChildLabor} />
          <Route exact path="/issues/prostitution" component={Prositution} />
          <Route exact path="/issues/education" component={Education} />
          <Route exact path="/issues/earlymarriage" component={EarlyMarriage} />
          <Route exact path="/thankyou" component={Thanks} />
          <Route
            exact
            path="/issues/articles/:issuetype/:articleid"
            component={ArticlesTemplate}
          />
          <Route exact path="/team" component={Team} />
          <Route exact path="/nav" component={Nav} />
          <Route exact path="/articles" component={ArticlesTemplate} />
          {/* </div> */}
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

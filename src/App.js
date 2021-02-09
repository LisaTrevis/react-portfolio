import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Recommendations from "./pages/Recommendations";

import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="hero-page">
              <Hero />
            </div>
          </Route>
          <Route path="/skills">
            <div className="skills-page">
              <Skills />
            </div>
          </Route>
          <Route path="/education">
            <div className="education-page">
              <Education />
            </div>
          </Route>
          <Route path="/experience">
            <div className="experience-page">
              <Experience />
            </div>
          </Route>
          <Route path="/recommendations">
            <div className="recommendations-page">
              <Recommendations />
            </div>
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
      <Submenu />
    </div>
  );
}

export default App;

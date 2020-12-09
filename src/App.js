import React from "react";
import './index.css';
import About from './Components/about/about'
import Contact from './Components/contact/contact'
import Projects from './Components/projects/projects'
import Head from './Components/header/head'


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

export default function App() {
  return (

    <Router>
      <Head />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Projects />
          </Route>
      </Switch>


    </Router>
  );
}



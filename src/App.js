import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import NationalHistory from "./NationalHistory";
import ChapterHistory from "./ChapterHistory";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/national-history" component={NationalHistory} />
          <Route exact path="/chapter-history" component={ChapterHistory} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

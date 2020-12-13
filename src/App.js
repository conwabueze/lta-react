import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import NationalHistory from "./NationalHistory";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/national-history" component={NationalHistory} />
        </Switch>
      </div>
    );
  }
}

export default App;

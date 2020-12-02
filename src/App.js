import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/national-history" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Border from "./Border";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <Border>
          <NavLink to="/">
            <img src="./imgs/logo.png" alt="logo" className="nav-logo" />
          </NavLink>
          <div className="Navbar-links">
            <NavLink to="/national-history">national history</NavLink>
            <NavLink to="/chapter-history">chapter history</NavLink>
            <NavLink to="/sister-history">sister history</NavLink>
          </div>
        </Border>
      </nav>
    );
  }
}

export default Navbar;

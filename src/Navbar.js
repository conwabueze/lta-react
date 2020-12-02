import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import logo from "./imgs/logo.png";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <NavLink to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </NavLink>
        <div className="Navbar-links">
          <NavLink to="/national-history">national history</NavLink>
          <NavLink to="/chapter-history">chapter history</NavLink>
          <NavLink to="/sister-history">sister history</NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;

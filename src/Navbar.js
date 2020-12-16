import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNavOpen: false,
    };

    this.openMobileNav = this.openMobileNav.bind(this);
    this.clickedNavLink = this.clickedNavLink.bind(this);
  }

  openMobileNav() {
    if (this.state.mobileNavOpen) this.setState({ mobileNavOpen: false });
    else this.setState({ mobileNavOpen: true });
  }

  clickedNavLink(e) {
    if (e.target.className === "Navbar-link")
      this.setState({ mobileNavOpen: false });
  }

  render() {
    const mobileNav = this.state.mobileNavOpen ? "Navbar-open" : "";

    return (
      <header className="Navbar">
        <div className="Navbar-container">
          <NavLink to="/">
            <img src="./imgs/logo.png" alt="logo" className="Navbar-logo" />
          </NavLink>

          <button onClick={this.openMobileNav} className="Navbar-hamburger">
            {String.fromCharCode(9776)}
          </button>

          <div className={`Navbar-links ${mobileNav}`}>
            <button onClick={this.openMobileNav} className={`Navbar-closeBtn`}>
              {String.fromCharCode(9747)}
            </button>
            <div
              onClick={this.clickedNavLink}
              className={`Navbar-links-container`}
            >
              <NavLink to="/national-history" className="Navbar-link">
                national history
              </NavLink>
              <NavLink
                to="/chapter-history"
                id="Navbar-middle-child"
                className="Navbar-link"
              >
                chapter history
              </NavLink>
              <NavLink to="/sister-history" className="Navbar-link">
                sister history
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;

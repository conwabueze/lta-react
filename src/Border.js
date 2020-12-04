import React, { Component } from "react";
import "./Border.css";

class Banner extends Component {
  render() {
    return <div className="Border">{this.props.children}</div>;
  }
}

export default Banner;

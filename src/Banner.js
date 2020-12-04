import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  static defaultProps = {
    imgSrc: "/imgs/home/home-header1.jpg",
    imgAlt: "Home",
    bannerH1: "Delta Zeta Chapter",
    bannerH2: "stony brook university",
    bannerH3: "latin by traditon not by definition",
  };
  render() {
    return (
      <div className="Banner">
        <div className="Banner-img-container">
          <img
            className="Banner-img"
            src={this.props.imgSrc}
            alt={this.props.imgAlt}
          />
        </div>
        <div className="Banner-header-container">
          <h1>{this.props.bannerH1}</h1>
          <h2>{this.props.bannerH2}</h2>
          <h3>{this.props.bannerH3}</h3>
        </div>
      </div>
    );
  }
}

export default Banner;

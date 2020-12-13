import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
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

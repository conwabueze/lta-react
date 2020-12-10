import React, { Component } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner
          imgSrc="/imgs/home/home-header1.jpg"
          imgAlt="Home"
          bannerH1="Delta Zeta Chapter"
          bannerH2="stony brook university"
          bannerH3="latin by traditon not by definition"
        />
      </div>
    );
  }
}

export default Home;

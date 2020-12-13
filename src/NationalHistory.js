import React, { Component } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import "./Home.css";

class NationalHistory extends Component {
  render() {
    return (
      <div>
        <Banner
          imgSrc="/imgs/national-history/national-history-header.png"
          imgAlt="national history"
          bannerH1="national history"
        />
        <Footer />
      </div>
    );
  }
}

export default NationalHistory;

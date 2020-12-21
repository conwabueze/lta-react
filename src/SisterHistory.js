import React, { Component } from "react";
import Banner from "./Banner";
import "./SisterHistory.css";
import SisterHistoryData from "./data/SisterHistoryData.json";
import SisterGallery from "./SisterGallery";

class SisterHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLineData: SisterHistoryData["founding-mothers"],
    };

    this.changeCurentLine = this.changeCurentLine.bind(this);
  }

  changeCurentLine(e) {
    this.setState({ currentLineData: SisterHistoryData[e.target.className] });
  }

  render() {
    const bannerInfo = this.state.currentLineData["banner-info"];
    const sistersInfo = this.state.currentLineData["sisters-info"];
    return (
      <div className="SisterHistory">
        <div className="SisterHistory-line-nav" onClick={this.changeCurentLine}>
          <button type="button" className="founding-mothers">
            founding mothers
          </button>
          <button type="button" className="founding-line">
            founding line
          </button>
          <button type="button">line 1</button>
          <button type="button">line 2</button>
          <button type="button">line 3</button>
          <button type="button">line 4</button>
          <button type="button">line 5</button>
          <button type="button">line 6</button>
          <button type="button">line 7</button>
        </div>
        <Banner
          imgSrc={bannerInfo.imgSrc}
          imgAlt={bannerInfo.imgAlt}
          bannerH1={bannerInfo.bannerH1}
          bannerH2={bannerInfo.bannerH2}
        />
        <SisterGallery sistersInfo={sistersInfo} />
      </div>
    );
  }
}

export default SisterHistory;

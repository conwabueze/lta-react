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
          <button type="button" className="line-1">
            line 1
          </button>
          <button type="button" className="line-2">
            line 2
          </button>
          <button type="button" className="line-3">
            line 3
          </button>
          <button type="button" className="line-4">
            line 4
          </button>
          <button type="button" className="line-5">
            line 5
          </button>
          <button type="button" className="line-6">
            line 6
          </button>
          <button type="button" className="line-7">
            line 7
          </button>
          <button type="button" className="line-8">
            line 8
          </button>
          <button type="button" className="line-9">
            line 9
          </button>
          <button type="button" className="line-10">
            line 10
          </button>
          <button type="button" className="line-11">
            line 11
          </button>
          <button type="button" className="line-12">
            line 12
          </button>
        </div>
        <Banner
          imgSrc={bannerInfo.imgSrc}
          imgAlt={bannerInfo.imgAlt}
          bannerH1={bannerInfo.bannerH1}
          bannerH2={bannerInfo.bannerH2}
          bannerH3={bannerInfo.bannerH3}
        />
        <SisterGallery sistersInfo={sistersInfo} />
      </div>
    );
  }
}

export default SisterHistory;

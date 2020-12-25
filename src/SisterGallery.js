import React, { Component } from "react";
import "./SisterGallery.css";
import SisterDetail from "./SisterDetail";

class SisterGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSisterInfo: "",
      showSisterInfo: false,
    };

    this.viewSister = this.viewSister.bind(this);
    this.exitSister = this.exitSister.bind(this);
  }

  viewSister(e) {
    const sisterIndex = e.target.parentNode.id;
    this.setState({
      currentSisterInfo: this.props.sistersInfo[sisterIndex],
      showSisterInfo: true,
    });
  }

  exitSister() {
    this.setState({
      currentSisterInfo: "",
      showSisterInfo: false,
    });
  }

  renderGallery() {
    const sistersInfo = this.props.sistersInfo;
    let index = 0;
    return sistersInfo.map((sister) => (
      <div key={index} id={index++} className="SisterGallery-card">
        <img
          className="SisterGallery-img"
          src={sister.imgSrc}
          alt={sister.name}
        />
        <h1 className="SisterGallery-name">{sister.name}</h1>
      </div>
    ));
  }

  render() {
    const renderSisterDetail =
      this.state.currentSisterInfo !== "" ? (
        <SisterDetail
          sisterInfo={this.state.currentSisterInfo}
          exitSister={this.exitSister}
        />
      ) : (
        ""
      );

    const hideGalleryContainer = this.state.showSisterInfo
      ? "hide-gallery"
      : "";

    return (
      <div className="SisterGallery">
        <div
          className={`SisterGallery-container ${hideGalleryContainer}`}
          onClick={this.viewSister}
        >
          {this.renderGallery()}
        </div>
        {renderSisterDetail}
      </div>
    );
  }
}

export default SisterGallery;

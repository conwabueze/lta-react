import React, { Component } from "react";
import "./SisterDetail.css";

class SisterDetail extends Component {
  render() {
    const { imgSrc, name, facts } = this.props.sisterInfo;
    return (
      <div className={`SisterDetail`}>
        <div className="SisterDetail-container">
          <button
            onClick={this.props.exitSister}
            className="SisterDetail-exitBtn"
          >
            {String.fromCharCode(8592)}
          </button>
          <div className="SisterDetail-content">
            <img className="SisterDetail-img" src={imgSrc} alt={name} />
            <h1 className="SisterDetail-name">{name}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default SisterDetail;

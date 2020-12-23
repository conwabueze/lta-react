import React, { Component } from "react";
import "./SisterDetail.css";
import PearlBullet from "./PearlBullet";

class SisterDetail extends Component {
  render() {
    const { imgSrc, name, facts } = this.props.sisterInfo;
    let keyCount = 0;
    const renderFacts =
      facts.length > 0 ? (
        <ul className="SisterDetail-facts">
          {facts.map((fact) => {
            return <PearlBullet key={keyCount++} pearlBulletText={fact} />;
          })}
        </ul>
      ) : (
        ""
      );

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
            {renderFacts}
          </div>
        </div>
      </div>
    );
  }
}

export default SisterDetail;

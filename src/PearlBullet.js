import React from "react";
import pearlBullet from "./imgs/pearl-bulletpoint.png";
import "./PearlBullet.css";

function PearlBullet(props) {
  return (
    <li
      style={{
        backgroundImage: `url(${pearlBullet})`,
      }}
      className="PearlBullet"
    >
      {props.pearlBulletText}
    </li>
  );
}

export default PearlBullet;

import React from "react";
import pearlBullet from "./imgs/national-history/pearl-bulletpoint.png";

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

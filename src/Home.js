import React, { Component } from "react";
import Banner from "./Banner";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Banner
          imgSrc="/imgs/home/home-header1.jpg"
          imgAlt="Home"
          bannerH1="Delta Zeta Chapter"
          bannerH2="stony brook university"
          bannerH3="latin by traditon not by definition"
        />
        <div className="Home-content">
          <div className="Home-content-container">
            <h1 className="Home-content-header">
              rooted in our <span>Purpose</span>
            </h1>
            <p className="Home-content-body">
              Since our establishment in 1975, Lambda Theta Alpha Latin
              Sorority, Incorporated has strived to empower women from all
              cultures as well as make noteworthy contributions to our
              communities. Today, our organization accomplishes this while
              upholding a sisterhood based on Unity, Love, and Respect. We
              develop strong leaders who provide and practice political, social,
              and cultural activities. We also promote Latino unity through
              charitable and educational programs to maintain a higher standard
              of learning. Delta Zeta has been dedicated to carrying out our
              mission since it’s establishment in 2006. Feel free to browse
              through our website to learn more about our organization, chapter,
              and sisters!
            </p>

            {/* <p class="Home-content-body-sec">
              Thank You for visiting our Website
            </p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

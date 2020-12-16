import React, { Component } from "react";
import Banner from "./Banner";
import "./NationalHistory.css";
import PearlBullet from "./PearlBullet";

class NationalHistory extends Component {
  render() {
    return (
      <div className="NationalHistory">
        <Banner
          imgSrc="/imgs/national-history/national-history-header.png"
          imgAlt="national history"
          bannerH1="national history"
        />
        <div className="NationalHistory-content">
          <div className="NationalHistory-content-container">
            <section className="our-history-section">
              <h1 className="our-history-header">our history</h1>
              <p className="our-history-body-main">
                Traditionally, the role of the Latina woman was that of
                maintaining the family institution and falling into the realm of
                the machismo stigma. However, as the Latino migration to the
                United States increased, so did the emergence of independent
                Latina women who were eager to be at the forefront of an era of
                a new educational, political and social consciousness. College
                and university enrollment mirrored this influx. With this
                growth, the need for support groups and outreach programs were
                at an all time high, primarily for the low percentage of Latina
                women in higher education.
                <br></br>
                <br></br>
                In 1975, Kean University introduced bilingual and
                Latino/Caribbean studies. Although this enabled the educational
                advancement of the Latina woman, still missing was the support
                needed to bridge the equality gap. It was during this time that
                17 women convened to discuss the formation of a sorority for
                Latina women. Its focus would be to actively integrate itself
                into the social, political and community service arena that
                other students had been involved with. Together, they could
                collaborate and assist with any student-run programs, thus
                making their voices as loud as the majority voice and their
                concerns equally as important.
              </p>
            </section>

            <section className="founding-mothers-section">
              <h1 className="founding-mothers-header ">founding mothers</h1>
              <p className="founding-mothers-body-main ">
                The year 1975 saw the birth of what started as a vision – an
                idea of an organization, a sisterhood that would cater to the
                needs of Latinas and, more importantly, the universal woman.
                Thanks to the tremendous strides made by our 17 founding
                mothers, this dream was realized, and took form as the entity:
                Lambda Theta Alpha Latin Sorority, Incorporated, the first
                Latina sorority in the nation.
              </p>
              <div className="image-container">
                <img
                  className="founding-mother-img"
                  src="imgs/national-history/founding-mothers.png"
                  alt=""
                />
              </div>
            </section>

            <section className="quick-facts-section">
              <h1 className="quick-facts-header">quick facts</h1>
              <ul className="quick-facts-list">
                <PearlBullet pearlBulletText="Founded at Kean University in Union, New Jersey" />
                <PearlBullet pearlBulletText="Established as an academic sorority" />
                <PearlBullet pearlBulletText="Sorority colors are burgundy and grey" />
                <PearlBullet pearlBulletText="Established as an academic sorority" />
                <PearlBullet
                  pearlBulletText="Sorority goals are scholarly excellence, empowerment of the
                  universal woman, political &amp; cultural awareness and
                  community activism"
                />
                <PearlBullet pearlBulletText="Principles are unity, love and respect" />
                <PearlBullet
                  pearlBulletText="Over 160 established undergraduate and alumnae chapters all
                  over the U.S. and Puerto Rico"
                />
                <PearlBullet pearlBulletText="National philanthropy is St. Jude Children’s Research Hospital" />
                <PearlBullet pearlBulletText="Members have a hand sign and traditional call " />
                <PearlBullet
                  pearlBulletText="LTA does not
                  step, but we do salute and stroll"
                />
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default NationalHistory;

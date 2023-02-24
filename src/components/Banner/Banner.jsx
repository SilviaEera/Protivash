import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner container">
      <div className="bannerWrapper">
        <div className="schoolInfo">
          <div className="rowOne">
            <div className="schoolLife itemName">
              <span className="lineOne">School Life</span>
              <span className="lineTwo">More</span>
            </div>
            <div className="academics itemName">
              <span className="lineOne">Academics</span>
              <span className="lineTwo">More</span>
            </div>
            <div className="admission itemName">
              <span className="lineOne">Admission</span>
              <span className="lineTwo">More</span>
            </div>
          </div>
          <div className="rowTwo">
            <p className="tagLine">
              <span className="colorText">A Day in The Life.</span> Please join
              us as we walk through a day in the life of a Protivas School
              student. <u>Request a tour ➜</u>
            </p>
          </div>
        </div>

        <div className="aboutSchool">
          <div className="aboutSchoolLeft">
            <h2 className="aboutSchoolHeading">What sets us apart</h2>
            <p className="aboutSchoolDetailsLeft">
              <span className="letterHead">W</span>hen you look at schools, ask
              about the kinds of studies that they offer. Some schools are
              academic, aimed at teaching children plan. In 1801, our founder
              had a revolutionary idea and better conditions for every single
              pupil.
            </p>
          </div>
          <div className="aboutSchoolRight">
            <p className="aboutSchoolDetailsRight">
              Visit our school and speak with our parents and staff for a more.
              to educate and empower young women. Vision of education inspire us
              today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

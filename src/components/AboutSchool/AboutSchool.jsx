import React from "react";
import "./AboutSchool.css";
import { BsCircleFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { HiArrowCircleRight } from "react-icons/hi";
import { BsFillBellFill } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { BsFlagFill } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
const AboutSchool = () => {
  return (
    <div className="aboutSchool">
      <div className="aboutSchoolWrapper">
        <div className="schoolValues">
          <h2 className="schoolValueHeading">School values and excellence</h2>
          <p className="schoolValueDetails">
            Get ahead of the competition and discover trends before become
            yesterday's news. Start today smarter than you yesterday.
          </p>
          <div className="valueOptions">
            <p className="valueOption">
              <BsCircleFill
                className="valueOptionIcon"
                style={{ color: "#1170f7", fontSize: "14" }}
              />
              International reputation
            </p>
            <p className="valueOption">
              <BsCircleFill
                className="valueOptionIcon"
                style={{ color: "#5fb364", fontSize: "14" }}
              />
              Prepares future leaders
            </p>
            <p className="valueOption">
              <BsCircleFill
                className="valueOptionIcon"
                style={{ color: "#f6b71e", fontSize: "14" }}
              />
              Moral and spiritual compass
            </p>
            <p className="valueOption">
              <BsCircleFill
                className="valueOptionIcon"
                style={{ color: "#de1b1f", fontSize: "14" }}
              />
              Curriculum and instruction
            </p>

            <div className="valueOptionBtn">
              <p className="valueBtnDetails">Find Out More</p>
              <HiArrowCircleRight className="valueBtnIcon" />
            </div>
          </div>
        </div>
        <div className="aboutSchoolInfo">
          <div className="aboutSchoolInfoWrapper">
            <div className="wrapperContainer">
              <div className="iconContainer">
                <FaBookReader className="aboutSchoolInfoIcon" />
              </div>
              <p className="aboutSchoolInfoDetails">
                Best Teachers For OurStudents
              </p>
            </div>
          </div>
          <div className="aboutSchoolInfoWrapper">
            <div className="wrapperContainer">
              <div className="iconContainer">
                <BsFillBellFill className="aboutSchoolInfoIcon" />
              </div>
              <p className="aboutSchoolInfoDetails">School Hours 8 AM ~ 1 PM</p>
            </div>
          </div>
          <div className="aboutSchoolInfoWrapper">
            <div className="wrapperContainer">
              <div className="iconContainer">
                <BsGlobe2 className="aboutSchoolInfoIcon" />
              </div>
              <p className="aboutSchoolInfoDetails">
                Parental Access On Student Info
              </p>
            </div>
          </div>
          <div className="aboutSchoolInfoWrapper">
            <div className="wrapperContainer">
              <div className="iconContainer">
                <BsFlagFill className="aboutSchoolInfoIcon" />
              </div>
              <p className="aboutSchoolInfoDetails">Best Facilities in Town</p>
            </div>
          </div>
          <div className="aboutSchoolInfoWrapper">
            <div className="wrapperContainer">
              <div className="iconContainer">
                <FaHandPointRight className="aboutSchoolInfoIcon" />
              </div>
              <p className="aboutSchoolInfoDetails">
                Latest Tech Used In Class
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;

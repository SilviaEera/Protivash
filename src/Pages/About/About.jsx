import React, { useEffect, useState } from "react";
import "./About.css";
import aboutPhoto from "../../assets/page-title-bg.jpg";
import AboutUsCard from "./AboutUsCard";
import aboutCardImg from "../../assets/aboutUsCardImg1.jpg";
import loader from "../../assets/loader.gif";

const About = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <img src={loader} alt="" />
        </div>
      ) : (
        <div className="about container">
          <div className="aboutWrapper">
            <div className="aboutHeader">
              <img className="aboutHeaderImg" src={aboutPhoto} alt="" />
              <div className="aboutUsImgDetails">
                <h2 className="aboutUsHeading">About US</h2>
              </div>
            </div>
            <div className="aboutUsCardsContainer">
              <div className="aboutUsCardsWrapper">
                <AboutUsCard
                  img={aboutCardImg}
                  spanDetail={"SCHOOL"}
                  h3Text={"History"}
                />
                <AboutUsCard
                  img={aboutCardImg}
                  spanDetail={"TEACHERS"}
                  h3Text={"Staff"}
                />
                <AboutUsCard
                  img={aboutCardImg}
                  spanDetail={"HEAD OF SCHOOL"}
                  h3Text={"Welcome"}
                />
                <AboutUsCard
                  img={aboutCardImg}
                  spanDetail={"TESTIMONIAL"}
                  h3Text={"Alumni"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;

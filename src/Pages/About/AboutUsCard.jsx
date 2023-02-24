import React from "react";
import "./About.css";
// import aboutCardImg from "../../assets/aboutUsCardImg1.jpg";
const AboutUsCard = (props) => {
  const { img, spanDetail, h3Text } = props;
  return (
    <div className="aboutUsCard">
      <div className="aboutUsCardImg">
        <img className="aboutCardImg" src={img} alt="" />
      </div>
      <div className="aboutCardDetails">
        <span>{spanDetail}</span>
        <h3>{h3Text}</h3>
      </div>
    </div>
  );
};

export default AboutUsCard;

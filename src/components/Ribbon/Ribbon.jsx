import { HiArrowCircleRight } from "react-icons/hi";

import "./Ribbon.css";

const Ribbon = () => {
  return (
    <div className="ribbon">
      <div className="ribbonWrapper">
        <div className="ribbonTagLine">
          <p>
            <span className="colorText">A Day in The Life.</span> Please join us
            as we walk through a day in the life of a Protivas School student.{" "}
            <u>Request a tour ➜</u>
          </p>
        </div> 
        <div className="ribbonRight">
          <p>Take A Stroll With Us</p>
          <HiArrowCircleRight className="ribbonBtnIcon" />
        </div>
      </div>
    </div>
  );
};

export default Ribbon;

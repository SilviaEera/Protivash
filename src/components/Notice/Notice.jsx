import React from "react";
import "./Notice.css";

const Notice = () => {
  const mouseOver = () => {
    document.getElementById("maq").stop();
  };
  const mouseOut = () => {
    document.getElementById("maq").start();
  };
  return (
    <div className="notice container">
      <h2 className="noticeHeader">Notice Board</h2>
      <div className="noticeWrapper">
        <marquee
          id="maq"
          behaviour
          direction="up"
          scrollamount="2"
          className="scrollNotice"
          onMouseOver={() => mouseOver()}
          onMouseOut={() => mouseOut()}
        >
          <h3>
            Hello World! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Dolore eos quod.
          </h3>
          <h3>
            Hello World! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur ratione molestiae,
          </h3>
          <h3>
            Hello World! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Quae, vel.
          </h3>
          <h3>Hello World! Lorem ipsum dolor sit amet.</h3>
          <h3>
            Hello World! Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </h3>
        </marquee>
      </div>
    </div>
  );
};

export default Notice;

import React from "react";
import "./Comment.css";

const Comment = () => {
  return (
    <div className="comment container">
      <div className="commentWrapper">
        <div className="commentBox">
          <div className=" commentBoxContainer">
            <div className="boxWrapper">
              <h2>Contact Us</h2>
              <p>
                <label htmlFor="">Student Name</label>
                <span className="textBox">
                  <input type="text" />
                </span>
              </p>
              <p>
                <label htmlFor="">Your Email</label>
                <span className="textBox">
                  <input type="text" />
                </span>
              </p>
              <p>
                <label htmlFor="">Phone Number</label>
                <span className="textBox">
                  <input type="text" />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="slogan">
          <h2>Belief that a balanced education leads to a powerful life</h2>
        </div>
      </div>
    </div>
  );
};

export default Comment;

import React from "react";
import "./Blog.css";
import img1 from "../../assets/schoolImg1.jpg";
import img2 from "../../assets/schoolImg2.jpg";
import img3 from "../../assets/schoolImg3.jpg";
import img4 from "../../assets/schoolImg4.jpg";

const Blog = () => {
  return (
    <div className="schoolBlog container">
      <h2 className="blogHeading">Sneak A Peek</h2>
      <div className="schoolBlogWrapper">
        <div className="schoolBlogLeft">
          <div className="imgContainer">
            <img src={img1} alt="" className="imgOne schoolImg" />
          </div>
          <div className="blogImgDetails">
            <p className="imgDate">10 January, 2023</p>
            <h3 className="blogImgDetailsHeading">Scholastic Awards Honor</h3>
          </div>
        </div>
        <div className="schoolBlogRight">
          <div className="blogRightWrapper">
            <div className="imgContainer">
              <img src={img2} alt="" className="imgTwo schoolImg" />
            </div>
            <div className="blogImgDetails">
              <p className="imgDate">10 January, 2023</p>
              <h3 className="blogImgDetailsHeading">Scholastic Awards Honor</h3>
            </div>
          </div>
          <div className="blogRightWrapper">
            <div className="imgContainer">
              <img src={img3} alt="" className="imgTwo schoolImg" />
            </div>
            <div className="blogImgDetails">
              <p className="imgDate">10 January, 2023</p>
              <h3 className="blogImgDetailsHeading">Scholastic Awards Honor</h3>
            </div>
          </div>
          <div className="blogRightWrapper">
            <div className="imgContainer">
              <img src={img4} alt="" className="imgTwo schoolImg" />
            </div>
            <div className="blogImgDetails">
              <p className="imgDate">10 January, 2023</p>
              <h3 className="blogImgDetailsHeading">Scholastic Awards Honor</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

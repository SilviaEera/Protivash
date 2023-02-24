import React from "react";
import AboutSchool from "../../components/AboutSchool/AboutSchool";
import Banner from "../../components/Banner/Banner";
import Comment from "../../components/Comment/Comment";
import Name from "../../components/NameComp/Name";
import Notice from "../../components/Notice/Notice";
import Ribbon from "../../components/Ribbon/Ribbon";
import Blog from "../../components/SchoolBlog/Blog";

const Home = () => {
  return (
    <div className="home">
      <Name />
      <Banner />
      <AboutSchool />
      <Ribbon />
      <Blog />
      <Comment />
      <Notice />
    </div>
  );
};

export default Home;

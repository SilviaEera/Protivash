import React, { useRef } from "react";
import "./Header.css";
import HeaderLogo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const toggleBtn = () => {
    document
      .getElementsByClassName("navBarLinks")[0]
      .classList.toggle("active");
  };

  const showNavBar = () => {};
  return (
    <div className="header container">
      <div className="headerWraper">
        <div className="navBar">
          <div className="navLogo">
            <img src={HeaderLogo} alt="" className="HeaderLogoImg" />
          </div>
          <a href="#" className="toggleBtn" onClick={toggleBtn}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div className="navBarLinks">
            <ul className="navList">
              <NavLink to={"/"}>
                <li className="navListItem">Home</li>
              </NavLink>
              <NavLink to={"/about"}>
                <li className="navListItem">About</li>
              </NavLink>
              <NavLink to={"/notice"}>
                <li className="navListItem">Notice</li>
              </NavLink>
              <NavLink to={"/teachers"}>
                <li className="navListItem">Teachers</li>
              </NavLink>
              <NavLink to={"/gallery"}>
                <li className="navListItem">Gallery</li>
              </NavLink>
              <NavLink to={"/contact"}>
                <li className="navListItem">Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="navDesign"></div>
      </div>
    </div>
  );
};

export default Header;

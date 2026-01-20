import React from "react";
import "./header.css";
import HeaderIntro from "./HeaderIntro";
import HeaderAboutCard from "./HeaderAboutCard";

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <HeaderIntro />
        <HeaderAboutCard />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./header.css";
import HeaderIntro from "./HeaderIntro";
import HeaderAboutCard from "./HeaderAboutCard";
import bg from "../../assets/background-home.png";

const Header = () => {
  return (

    <header className="header" style={{ "--bg-img": `url(${bg})` }}>
      <div className="container header_container">
        <HeaderIntro />
        <HeaderAboutCard />
      </div>
    </header>
  );
};

export default Header;

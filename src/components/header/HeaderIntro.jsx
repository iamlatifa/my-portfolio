import React from "react";
import CTA from "./CTA";

const HeaderIntro = () => {
  return (
    <div className="header_text">
      <h5>Hello, I'm</h5>
      <h1>Latifa Anayouss</h1>
      <h2 className="header_role">Full-Stack Developer Backend & Data-Oriented</h2>

      <p className="header_tagline">
        I design and build data-driven web applications with a strong focus on backend logic, APIs, and structured data workflows.
      </p>

      <CTA />
    </div>
  );
};

export default HeaderIntro;

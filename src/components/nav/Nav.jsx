import React, { useEffect, useState } from "react";
import "./nav.css";
import { FaUser, FaBook, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import ThemeToggle from "../toggle/ThemeToggle";

const sections = ["header", "project", "experience", "contact"];

const Nav = ({ theme, setTheme }) => {
  const [activeNav, setActiveNav] = useState("header");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // section must be 60% visible
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      <a href="#header" className={activeNav === "header" ? "active" : ""}>
        <FaUser />
      </a>

      <a href="#project" className={activeNav === "project" ? "active" : ""}>
        <FaProjectDiagram />
      </a>

      <a
        href="#experience"
        className={activeNav === "experience" ? "active" : ""}
      >
        <FaBook />
      </a>

      <a href="#contact" className={activeNav === "contact" ? "active" : ""}>
        <MdContactMail />
      </a>

      <div className="nav-toggle">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
};

export default Nav;

import React from "react";
import "./header.css";
import { useEffect, useState } from "react";
import me from "../../assets/me-removebg-preview.png";

const HeaderAboutCard = () => {
  const [hintFlip, setHintFlip] = useState(false);

  useEffect(() => {
    setHintFlip(true);
    const timer = setTimeout(() => setHintFlip(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`about_flip-card ${hintFlip ? "flip-hint" : ""}`}>
      <div className="about_flip-inner">

        <div className="about_flip-front">
          <img src={me} alt="Latifa Anayouss" />
        </div>

        <div className="about_flip-back">
          <h4>About Me</h4>

          <p>
            I’m a full-stack developer with a strong backend and data focus.
          </p>

          <p>
            I work mainly with Python, Django, and REST APIs, building reliable systems that handle structured data efficiently.
          </p>

          <p>
            On the frontend, I use React and modern UI tools to create clean, user-friendly interfaces that connect seamlessly with backend logic.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HeaderAboutCard;

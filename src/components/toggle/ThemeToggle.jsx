import React, { useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./themeToggle.css";




export default function ThemeToggle({ theme, setTheme }) {
  const getTheme = () => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setTheme("dark")
      : setTheme("light");
  }

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listner =() => setTheme(media.matches ? "dark" : "light");
    
    media.addEventListener("change", listner);
    return () => media.removeEventListener("change", listner);


  }, []);



  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  
  return (
    <button
        className={`theme-toggle ${theme}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
        >
        {theme === "light"
            ? <FiMoon className="icon" />
            : <FiSun className="icon" />
        }
    </button>

    
  );
}

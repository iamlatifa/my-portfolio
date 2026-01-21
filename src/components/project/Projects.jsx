import React from "react";
import "./project.css";
import IMG1 from "../../assets/attendance.png";
import IMG2 from "../../assets/kivy_app.png";
import IMG4 from "../../assets/import.png";


const projects = [
  {
    id: 3,
    image: IMG1,
    title: "E-Attendance",
    github: "https://github.com/iamlatifa/Attendance_app",
    description: "Digital document management system"
  
  },  
  {
    id: 4,
    image: IMG4,
    title: "Banking Data Processor",
    github: "https://github.com/iamlatifa/MyPortfolioProjects/tree/main/Banking_Data_Processor_app",
    description: "A Django application that processes banking files validates data.",
  },
  {
    id: 5,
    image: IMG2,
    title: "kivy todo app",
    github: "https://github.com/iamlatifa/todo_kivy_app/blob/main/todo_app",
    description: "a todo app built using kivy framework in pythonh",
  },
];
const Projects = () => {
  return (
    <section id="project">
      <h5>Featured Projects</h5>
      <h2>My Work</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, description }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              {description && <p className="project_description">{description}</p>}
              <div className="project-item-cta">
                {github && (
                  <a href={github} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Github
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import "./experience.css";
import css from '../../assets/css.png'
import html from '../../assets/html-5.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import bs from '../../assets/bootstrap.png'
import mysql from '../../assets/mysql.png'
import tailw from '../../assets/tailwind.png'
import node from '../../assets/nodejs.png'
import oracle from '../../assets/oracle.png'
import python from '../../assets/python.png'
import laravel from '../../assets/laravel.png'
import mongo from '../../assets/mongodb.png'
import django from '../../assets/django.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={html} className="experience_details-icon" alt="html"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={css} className="experience_details-icon" alt="css"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={js} className="experience_details-icon" alt="js"/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={react} className="experience_details-icon" alt="react"/>
              <div>                
                <h4>REACTJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={bs} className="experience_details-icon" alt="bs"/>
              <div>           
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={tailw} className="experience_details-icon" alt="tailwind"/>
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <img src={mysql} className="experience_details-icon" alt="mysql"/>
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={oracle} className="experience_details-icon" alt="node"/>
              <div>
                <h4>oracle PL-sql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={mongo} className="experience_details-icon" alt="mongodb"/>
              <div>
                <h4>MONGODB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={laravel} className="experience_details-icon" alt="laravel"/>
              <div>
                <h4>LARAVEL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <img src={python} className="experience_details-icon" alt="python"/>
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            
            <article className="experience_details">
              <img src={django} className="experience_details-icon" alt="node"/>
              <div>
                <h4>DJANGO</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <p className="hero-label">Hey,I'm</p>
        <h1 className="hero-name">
          Lokesh <span>Gundapaneni</span>
        </h1>
        <h3 className="tag-name">Java Full Stack Developer</h3>
        <p className="hero-description">
          Final-year B.Tech CSE student passionate about building clean,scalable web applications with Java & React.
        </p>
        <div className="hero-buttons">
          <NavLink to="/projects" className="btn primary-btn">
            ViewProjects
          </NavLink>
          <NavLink to="/contact" className="btn secondary-btn">
            GetInTouch
          </NavLink>
        </div>
        <div className="stats">
            <div>
              <h2>8.44</h2>
              <p>CGPA</p>
            </div>
            <div>
              <h2>80+</h2>
              <p>Leetcode</p>
            </div>
            <div>
              <h2>3+</h2>
              <p>Projects</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
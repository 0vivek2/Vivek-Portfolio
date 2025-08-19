import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-grid">
          
          {/* Left Side - Image */}
          <div className="about-image">
            <img 
              src="./profile.jpeg" 
              alt="Profile" 
            />
          </div>

         
          <div className="about-text">
            <p>
              Hi, I'm <strong>Vivek</strong>, a passionate front-end developer who loves 
              creating interactive, user-friendly, and visually appealing websites. 
              I enjoy transforming ideas into reality through clean code and modern UI design.
            </p>

            <p>
              When I'm not coding, I like exploring new technologies, 
              building side projects, and continuously improving my skills.
            </p>

            <h3>Skills</h3>
            <ul className="skills-list">
              <li>⚡ React & Vite</li>
              <li>⚡ JavaScript (ES6+)</li>
              <li>⚡ HTML & CSS</li>
              <li>⚡ Git & GitHub</li>
              <li>⚡ Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

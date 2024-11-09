import React from 'react';

const Skills = () => {
  return (
    <section className="Skills" id="Skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <div className="skills-container">
        <div className="skills-box">
          <i className="fa-solid fa-code"></i>
          <h3>Web Development</h3>
          <p>Technologies : <br/> MERN Stack,<br/>HTML/CSS,JavaScript</p>
          <a href="#" className="btn">Read More</a>
        </div>
        {/* Add other skills boxes */}
      </div>
    </section>
  );
};

export default Skills;
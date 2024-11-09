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
        <div className="skills-box">
          <i className="fa-solid fa-palette"></i>
          <h3>UI/UX Designing</h3>
          <p>Technologies : HTML/CSS,Bootstrap,JavaScript, <br/> ReactJs,Photoshop,CorelDraw</p>
          <a href="#" className="btn">Read More</a>
        </div>
        <div className="skills-box">
          <i className="fa-solid fa-laptop-code"></i>
          <h3>Programing</h3>
          <p>Technologies : <br/> C/C++,Java,Python</p> <br/>
          <a href="#" className="btn">Read More</a>
        </div>

      </div>
    </section>
  );
};

export default Skills;
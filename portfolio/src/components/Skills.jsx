import React from 'react';

const Skills = () => {
  return (
    <section className="Skills" id="Skills">
      <h2 className="heading">My <span>Skills</span></h2>
      <div className="skills-container">
        <div className="skills-box">
          <i className="fa-solid fa-code"></i>
          <h3>Backend Development</h3>
          <p>Technologies : <br/>Frameworks: Spring Boot, Flask, Express.js, PHP<br/>Backend Programming: Node.js, Java, Python, PHP <br/>APIs: RESTful APIs with Node.js, Express.js, and PHP<br/>Database Systems: MySQL, MongoDB </p>
          <a href="https://www.linkedin.com/in/deemal-vidarshana/" className="btn">Read More</a>
        </div>
        <div className="skills-box">
          <i className="fa-solid fa-palette"></i>
          <h3>Frontend Development</h3>
          <p>Technologies : <br/> Frontend Frameworks: React.js<br/>Responsive Design: HTML, CSS, and JavaScript,<br/>Project Management Tools: GitHub<br/>Additional Tools & Technologies: Tailwind CSS, Bootstrap, Figma <br/>Photoshop</p>
          <a href="https://www.linkedin.com/in/deemal-vidarshana/" className="btn">Read More</a>
        </div>
        <div className="skills-box">
          <i className="fa-solid fa-laptop-code"></i>
          <h3>Programming </h3>
          <p>Technologies: <br/>Programming: Java, Python, JavaScript, PHP, C++ <br/>AI/ML: TensorFlow, Keras, scikit-learn, PyTorch, LangChain <br/>Cloud: Google Cloud Infrastructure  & Services, Associate Cloud Engineer, Kubernetes</p>
          <a href="https://www.linkedin.com/in/deemal-vidarshana/" className="btn">Read More</a>
        </div>

      </div>
    </section>
  );
};

export default Skills;
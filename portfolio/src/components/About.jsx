import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/aboutpic.png" alt="aboutpic" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>FullStack Web Developer</h3>
        <p>
          Hello! I'm Ayush Patel, a passionate and versatile developer...
          {/* Rest of your about text */}
        </p>
        <a href="#" className="btn">Read more</a>
      </div>
    </section>
  );
};

export default About;
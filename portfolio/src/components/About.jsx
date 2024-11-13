import React from 'react';
import AboutImage from '../assets/aboutpic.png';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={AboutImage} alt="aboutpic" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Computer Engineering (undergraduate)</h3>
        <p>
        Hi, I’m Deemal Vidarshana! I’m a Computer Engineering student at the University of Jaffna, deeply passionate about using technology to make a real-world impact. I’m driven by a love for problem-solving and innovation, constantly exploring new ideas in software development, artificial intelligence, and cloud computing.<br/>
Throughout my journey, I’ve embraced both collaborative and independent projects that have helped me grow technically and personally. Whether tackling challenging algorithms, diving into data, or experimenting with new frameworks, I thrive on learning and pushing myself to reach new heights. For me, technology isn’t just about building solutions; it’s about creating meaningful change and making tasks easier, faster, and smarter.<br/>
I’m excited to connect with others who share this passion for tech and to contribute to projects where I can bring my skills, curiosity, and dedication. Let’s build something amazing together!
        </p>
        <a href="https://www.linkedin.com/in/deemal-vidarshana/" className="btn">Read more</a>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import profileImage from '../assets/profiledp.png';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, Myself</h3>
        <h1>Ayush Patel</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>
          Interested in working together? Let's have a talk
          <br />
          I have recently been working on the following projects mentioned below.
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/rinku.psj" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://x.com/Ayushhh_p" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://wa.me/7007411355" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://www.linkedin.com/in/ayush-patel-860793296/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/___ayush_patel_/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <a href="#" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src={profileImage} alt="profile" />
      </div>
    </section>
  );
};

export default Home;
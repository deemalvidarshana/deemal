import React from 'react';
import profileImage from '../assets/profiledp.png';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, Myself</h3>
        <h1>Deemal Vidarshana</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>
          Interested in working together? Let's have a talk
          <br />
          I have recently been working on the following projects mentioned below.
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/people/Deemal-Wijekoon/pfbid0DvCnonYsFVmdV4WG5XY71muyiBsVsdXGJfodz39eJHxFJHBZFnUTeyXMrvA8xq7Yl/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://wa.me/0778232071" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="http://linkedin.com/in/deemal-vidarshana" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/deemal_wijekoon/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <a href="https://drive.google.com/uc?export=download&id=10iMeT4Y9G9IEh68MSXFJP8mgFCyJ7f-5" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src={profileImage} alt="profile" />
      </div>
    </section>
  );
};

export default Home;
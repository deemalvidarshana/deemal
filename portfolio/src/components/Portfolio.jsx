import React from 'react';
import ProjectImage from '../assets/project-foodtrail.png';
import GamerZone from '../assets/GamerZone.png';
import KumbhPrayagraj from '../assets/KumbhPrayagraj.jpg';
import four from '../assets/4.jpg';
import two from '../assets/2.jpg';
import six from '../assets/6.jpg';

const Portfolio = () => {
  return (
    <section className="Portfolio" id="Portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={ProjectImage} alt="food-trail-website" />
          <div className="portfolio-layer">
            <h4>Food-trail</h4>
            <p>Using-HTML-CSS-JS-and-bootstrap</p>
            <a href="https://food-trail-website.vercel.app/index.html">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
        
        <div className="portfolio-box">
          <img src={GamerZone} alt="" />
          <div className="portfolio-layer">
            <h4>GamerZone</h4>
            <p>Coming Soon</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={KumbhPrayagraj} alt="" />
          <div className="portfolio-layer">
            <h4>Kumbh Prayagraj</h4>
            <p>Coming Soon</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={four} alt="" />
          <div className="portfolio-layer">
            <h4>Spotify Clone</h4>
            <p>Coming Soon</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={two} alt="" />
          <div className="portfolio-layer">
            <h4>Amazon Clone</h4>
            <p>Coming Soon</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={six} alt="" />
          <div className="portfolio-layer">
            <h4>GYM Website</h4>
            <p>Coming Soon</p>
            <i className="fa-solid fa-up-right-from-square"></i>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Portfolio;
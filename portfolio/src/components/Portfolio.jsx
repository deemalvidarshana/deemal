import React from 'react';

const Portfolio = () => {
  return (
    <section className="Portfolio" id="Portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src="/images/project-foodtrail.png" alt="food-trail-website" />
          <div className="portfolio-layer">
            <h4>Food-trail</h4>
            <p>Using-HTML-CSS-JS-and-bootstrap</p>
            <a href="https://food-trail-website.vercel.app/index.html">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
        {/* Add other portfolio boxes */}
      </div>
    </section>
  );
};

export default Portfolio;
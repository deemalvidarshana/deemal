import React from 'react';
import Algo from '../assets/algo.jpg';
import IEEE from '../assets/IEEE.jpg';
import Mora from '../assets/mora.jpg';
import Github from '../assets/Github.jpg';
import Download from '../assets/download.png';
import Cisco from '../assets/cisco.png';

const Achievement = () => {
  return (
    <section className="Portfolio" id="achievement">
      <h2 className="heading">Achievements <span>Certifications</span></h2>
      <div className="portfolio-container">

        {/* Portfolio Box 1 */}
        <div className="portfolio-box">
          <img src={IEEE} alt="IEEEXtreme Competition" />
          <div className="portfolio-layer">
            <h4>2nd Runner Up</h4>
            <p>IEEEXtreme 18.0 - 2nd runner up (Jaffna branch) | 48th (Sri Lanka) | 658 (worldwide) in a 24-hour global coding competition by IEEE</p>
            <a href="https://food-trail-website.vercel.app/index.html">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

  

        {/* Portfolio Box 3 */}
        <div className="portfolio-box">
          <img src={Algo} alt="Algo Explore Competition" />
          <div className="portfolio-layer">
            <h4>6th Place</h4>
            <p>Achieved 6th Place in Group G in the Algo Explore Competition 2024 organized by NSBM! Grateful for the challenge and experience.</p>
            <a href="#">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

              {/* Portfolio Box 2 */}
              <div className="portfolio-box">
          <img src={Mora} alt="MoraXtreme Competition" />
          <div className="portfolio-layer">
            <h4>20th Place</h4>
            <p>20th Place out of 382 teams with 1000+ participants in MoraXtreme 9.0 organized by University of Moratuwa Faculty of Engineering(2024)</p>
            <a href="#">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        {/* Portfolio Box 4 */}
        <div className="portfolio-box">
          <img src={Github} alt="GitHub Actions Certification" />
          <div className="portfolio-layer">
            <h4>GitHub Actions</h4>
            <p>Passed the GitHub Actions exam, demonstrating expertise in automating workflows and CI/CD pipelines.</p>
            <a href="#">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        {/* Portfolio Box 5 */}
        <div className="portfolio-box">
          <img src={Download} alt="GitHub Actions Certification" />
          <div className="portfolio-layer">
            <h4>Cloud Engineer Professional Certificate </h4>
            <p>completed the "Preparing for Google Cloud Certification: Cloud Engineer" Professional Certificate by Google Cloud and Coursera!</p>
            <a href="#">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        {/* Portfolio Box 6 */}
        <div className="portfolio-box">
          <img src={Cisco} alt="GitHub Actions Certification" />
          <div className="portfolio-layer">
            <h4>Introduction to Cybersecurity Certificate </h4>
            <p> Earned Introduction to Cybersecurity certification from Cisco Networking Academy! Gained key skills in cyber threats, online safety, and security strategies. </p>
            <a href="#">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievement;

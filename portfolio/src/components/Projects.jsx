import React from 'react';
import text from '../assets/text.jpg';
import Plant from '../assets/plant.jpg';
import Blog from '../assets/blog.jpg';
import mail from '../assets/mail.jpg';
import bot from '../assets/bot.jpg';
import VLC from '../assets/vlc.jpg';
import reader from '../assets/reader.jpg';
import store from '../assets/store.jpg';
import regi from '../assets/regi.jpg';

const Projects = () => {
  return (
    <section className="Portfolio" id="Portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={text} alt="" />
          <div className="portfolio-layer">
            <h4>Image to Text converter</h4>
            <p>"OCR Image To Text Converter" offers seamless text extraction from images. With real-time progress tracking and Tesseract.js integration, digitizing documents is easy.</p>
            <a href="https://techtinkerspace.me/">
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
        
        <div className="portfolio-box">
          <img src={Plant} alt="" />
          <div className="portfolio-layer">
            <h4>Plant Diseases Model</h4>
            <p>building and evaluating a deep learning model to detect plant diseases. This provides an end-to-end pipeline for preprocessing data, training a deep learning model</p>
            <a href="https://github.com/deemalvidarshana/Plant-Diseases-Model">
            <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={Blog} alt="" />
          <div className="portfolio-layer">
            <h4>Itz me Blog App</h4>
            <p>Built a feature-rich blog app with full admin control (create, edit, delete, search posts) and user interactions (view, like, dislike). Fully responsive for seamless experience on all devices!</p>
            <a href="https://github.com/deemalvidarshana/Itz-Me-Blog-App">
            <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={mail} alt="" />
          <div className="portfolio-layer">
            <h4>Mailify</h4>
            <p>Developed and deployed a web app for email management, enabling users to send, view, edit, delete, search, and organize emails into custom folders for easy categorization</p>
            <a href="https://github.com/deemalvidarshana/Mailify">
            <i className="fa-solid fa-up-right-from-square"></i>
          </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={bot} alt="" />
          <div className="portfolio-layer">
            <h4>My ChatBot</h4>
            <p>Developed a chatbot that uses PDF document content to answer user questions accurately. Built with a custom prompt to ensure concise, context-specific responses.</p>
            <a href="https://github.com/deemalvidarshana/MyChatBot">
            <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={VLC} alt="" />
          <div className="portfolio-layer">
            <h4>Water Level Controller</h4>
            <p>Developed an Arduino-based smart water management system with automated level control, Bluetooth remote access, and solar power for eco-friendly operation!</p>
            <a href="https://github.com/deemalvidarshana/Smart-water-level-controller">
            <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={reader} alt="" />
          <div className="portfolio-layer">
            <h4>Text reader</h4>
            <p>This Text Reader Application is a simple web application built with React that allows users to input text and have it read aloud using the browser's speech synthesis capabilities.</p>
            <a href="https://github.com/deemalvidarshana/text-reader-react">
            <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={store} alt="" />
          <div className="portfolio-layer">
            <h4>Itz me store </h4>
            <p>eveloped an e-commerce site with HTML, CSS, PHP & MySQL, featuring admin control, user-friendly shopping, and secure data handling.</p>
            <a href="https://github.com/deemalvidarshana/Student-Registration-App-">
            <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
      
        <div className="portfolio-box">
          <img src={regi} alt="" />
          <div className="portfolio-layer">
            <h4>Student Registration app </h4>
            <p>A simple Java Swing application for managing student registration information without using SQL databases. This application allows users to add, update, delete, and download student details in a CSV format.</p>
            <a href="https://github.com/deemalvidarshana/itzmestore">
            <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
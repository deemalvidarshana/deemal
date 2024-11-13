import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Achievement from './components/Achievement';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  useEffect(() => {
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal('.home-content,heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    const typed = new Typed('.multiple-text', {
      strings: ['FullStack Web Developer', 'Web Designer', 'Programmer'],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Achievement/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
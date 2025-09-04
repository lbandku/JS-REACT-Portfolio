// src/App.jsx
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

import 'boxicons/css/boxicons.min.css';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('mode') === 'dark-mode'
  );

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('mode', darkMode ? 'dark-mode' : 'light-mode');
  }, [darkMode]);

  return (
    <main id="top">
      <section id="home">
        <NavBar />
      </section>

      <section id="hero-section">
        <Hero />
      </section>

      <section id="about-section">
        <About />
      </section>

      <section id="projects-section">
        <Projects />
      </section>

      <section id="contact-form">
        <Contact />
      </section>

      <Footer />

    </main>
  );
}

export default App;


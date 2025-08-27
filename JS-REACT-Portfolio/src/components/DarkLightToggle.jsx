// src/components/DarkLightToggle.jsx
import React, { useState, useEffect } from 'react';

const DarkLightToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('mode') === 'dark-mode');
  const [rotate, setRotate] = useState(false);

  // Apply dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('mode', 'dark-mode');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('mode', 'light-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setRotate(true);
    setDarkMode(prev => !prev);

    // Reset rotation after animation ends (360deg ~ 1s)
    setTimeout(() => setRotate(false), 1000);
  };

  return (
    <div
      className={`dark-light ${darkMode ? 'active' : ''} ${rotate ? 'rotate' : ''}`}
      onClick={toggleDarkMode}
      style={{ cursor: 'pointer' }}
      aria-label="Toggle dark/light mode"
    >
      <i className={`bx bx-moon moon ${darkMode ? '' : 'active'}`}></i>
      <i className={`bx bx-sun sun ${darkMode ? 'active' : ''}`}></i>
    </div>
  );
};

export default DarkLightToggle;



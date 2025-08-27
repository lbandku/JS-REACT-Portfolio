// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from 'react';
import DarkLightToggle from './DarkLightToggle'; // ✅ Import the toggle

const NavBar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const navRef = useRef(null);

  const openSidebar = () => setSidebarActive(true);
  const closeSidebar = () => setSidebarActive(false);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarActive && navRef.current && !navRef.current.contains(e.target)) {
        setSidebarActive(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [sidebarActive]);

return (
  <nav ref={navRef} className={sidebarActive ? 'active' : ''}>
    {/* Toggle button fixed to top-right */}
    <div className="dark-light-toggle-fixed">
      <DarkLightToggle />
    </div>

    <div className="nav-bar">
      <div className="nav-left">
        <i
          className="bx bx-menu sidebarOpen"
          onClick={openSidebar}
          style={{ cursor: 'pointer' }}
          aria-label="Open sidebar menu"
        ></i>

        <span className="logo navLogo">
          <a href="#home">Jax's Portfolio</a>
        </span>
      </div>

      <div className={`menu ${sidebarActive ? 'active' : ''}`}>
        <div className="logo-toggle">
          <span className="logo">
            <a href="#home">Jax's Portfolio</a>
          </span>
          <i
            className="bx bx-x sidebarClose"
            onClick={closeSidebar}
            style={{ cursor: 'pointer' }}
            aria-label="Close sidebar menu"
          ></i>
        </div>

        <ul className="nav-links">
          <li><a href="#home" onClick={closeSidebar}>Home</a></li>
          <li><a href="#about-section" onClick={closeSidebar}>About</a></li>
          <li><a href="#projects-section" onClick={closeSidebar}>Projects</a></li>
          <li><a href="#contact-form" onClick={closeSidebar}>Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);
};

export default NavBar;

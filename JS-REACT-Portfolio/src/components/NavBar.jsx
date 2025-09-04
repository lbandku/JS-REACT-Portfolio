// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from "react";
import DarkLightToggle from "./DarkLightToggle";

// Inline brand (no chevrons, scalable)
const Brand = ({ size = 24 }) => (
  <a
    href="#home"
    aria-label="Home"
    style={{
      display: "inline-flex",
      alignItems: "baseline",
      gap: 6,
      lineHeight: 1,
      color: "var(--text-color)",
      textDecoration: "none",
    }}
  >
    <span style={{ fontWeight: 800, fontSize: size, letterSpacing: ".3px" }}>
      GiG.
    </span>
    <span
      style={{
        fontWeight: 700,
        fontSize: Math.round(size * 0.55),
        marginLeft: -6,
        opacity: 0.95,
        letterSpacing: ".3px",
      }}
    >
      Design
    </span>
  </a>
);

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
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sidebarActive]);

  // Close on Escape + lock scroll when open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeSidebar();
    document.addEventListener("keydown", onKey);

    if (sidebarActive) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
        document.removeEventListener("keydown", onKey);
      };
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [sidebarActive]);

  return (
    <nav ref={navRef} className={sidebarActive ? "active" : ""} role="navigation" aria-label="Primary">
      {/* Fixed dark/light toggle in top-right (your existing CSS handles this) */}
      <div className="dark-light-toggle-fixed">
        <DarkLightToggle />
      </div>

      {/* Keep your existing .nav-bar behavior; just add a bit more right padding
          so the nav links don't sit under the toggle */}
      <div className="nav-bar" style={{ paddingRight: 84 }}>
        <div className="nav-left" style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: 0 }}>
          {/* Mobile hamburger */}
          <button
            type="button"
            className="sidebarOpen"
            onClick={openSidebar}
            aria-label="Open menu"
            aria-expanded={sidebarActive}
            aria-controls="primary-menu"
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              color: "var(--text-color)",
            }}
          >
            <i className="bx bx-menu" aria-hidden="true" />
          </button>

          {/* Brand (bigger, no chevrons) */}
          <span className="logo navLogo" style={{ display: "inline-flex", alignItems: "center" }}>
            <Brand size={26} />
          </span>
        </div>

        {/* Slide-out menu (mobile) */}
        <div
          className={`menu ${sidebarActive ? "active" : ""}`}
          id="primary-menu"
          aria-hidden={!sidebarActive}
        >
          <div className="logo-toggle">
            <span className="logo" style={{ display: "inline-flex", alignItems: "center" }}>
              <Brand size={22} />
            </span>
            <button
              type="button"
              className="sidebarClose"
              onClick={closeSidebar}
              aria-label="Close menu"
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                color: "var(--text-color)",
              }}
            >
              <i className="bx bx-x" aria-hidden="true" />
            </button>
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

// src/components/Projects.jsx

import React, { useMemo, useState } from "react";

const TAGS = ["All", "Vanilla JS", "React", "Full-Stack", "API"];

/**
 * Centralize image paths here once.
 * If you later rename files to /assets/projects/{id}.jpg (e.g., bookstore.jpg),
 * the fallback below will auto-resolve without editing this map.
 */
const IMAGES = {
  bookstore: "/assets/BookSwap_TopPreserve_Tight_Shot1_1200x675.jpg",
  weather:   "/assets/Weather_NoTopStrip_Centered_1600x900.jpg",
  ecommerce: "/assets/LightGallery_Centered16x9_1200x675.jpg",
};
const IMAGE_FALLBACK_BASE = "/assets/projects"; // optional convention fallback

const PROJECTS = [
  {
    id: "bookstore",
    title: "Bookstore Project",
    desc: "Vanilla JavaScript DOM app to fetch, add, and update books from an API.",
    href: "https://dom-bookstore.onrender.com",
    tags: ["Vanilla JS", "API"],
    toneClass: "item1",
    alt: "Book Swap app—header, logo, add-book form, and inventory table."
  },
  {
    id: "weather",
    title: "Weather App",
    desc: "React app with a responsive UI providing real-time weather by city or zipcode.",
    href: "https://react-weather-app-qwp1.onrender.com",
    tags: ["React", "API"],
    toneClass: "item2",
    alt: "WeatherSearch landing—title, tagline, weather artwork, and a location search field."
  },
  {
    id: "ecommerce",
    title: "E-Commerce Project",
    desc: "Full-stack (React, Node/Express, MongoDB) store with filters, cart, Stripe checkout, and admin dashboard.",
    href: "https://e-commerce-wallpaper-store-project-1.onrender.com",
    tags: ["React", "Full-Stack"],
    toneClass: "item3",
    alt: "ScreenTones Wallpaper Gallery (light mode) with filters, search, and product grid."
  }
];

function imageFor(p) {
  return IMAGES[p.id] || `${IMAGE_FALLBACK_BASE}/${p.id}.jpg`;
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section id="projects-section" className="container" style={{ marginBottom: 40 }}>
      {/* Filter chips */}
      <div className="filters" role="tablist" aria-label="Project filters">
        {TAGS.map((tag) => (
          <button
            key={tag}
            type="button"
            role="tab"
            aria-selected={active === tag}
            className={`chip ${active === tag ? "active" : ""}`}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filtered.map((p) => (
        <article key={p.id} className="column">
          <div className={p.toneClass}>
            <img src={imageFor(p)} alt={p.alt || `${p.title} screenshot`} loading="lazy" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a className="projbutton" href={p.href} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}

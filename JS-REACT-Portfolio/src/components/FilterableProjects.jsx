import React, { useMemo, useState } from 'react';
import Carousel from './Carousel';

const PROJECTS = [
  {
    id: 'bookstore',
    title: 'Bookstore Project',
    desc: 'Vanilla JavaScript DOM app to fetch, add, and update books from an API.',
    href: 'https://dom-bookstore.onrender.com',
    tags: ['All', 'Vanilla JS', 'API'],
    toneClass: 'item1',
    images: ['/assets/projects/BookSwap_1200x675.jpg'],
    alt: 'Book Swap app—header, logo, add-book form, and inventory table.'
  },
  {
    id: 'weather',
    title: 'Weather App',
    desc: 'React app with a responsive UI providing real-time weather by city or ZIP.',
    href: 'https://react-weather-app-n9zd.onrender.com',
    tags: ['All', 'React', 'API'],
    toneClass: 'item2',
    images: ['/assets/projects/Weather_NoTopStrip_Centered_1200x675.jpg'],
    alt: 'WeatherSearch landing—title, tagline, weather artwork, and a location search field.'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Project',
    desc: 'Full-stack (React, Node/Express, MongoDB) store with filters, cart, Stripe checkout, and admin dashboard.',
    href: 'https://e-commerce-wallpaper-store-project-1.onrender.com',
    tags: ['All', 'React', 'Full-Stack'],
    toneClass: 'item3',
    images: ['/assets/projects/LightGallery_Centered16x9_1200x675.jpg'],
    alt: 'ScreenTones Wallpaper Gallery (light mode) with filters, search, and product grid.'
  }
];

const ALL_TAGS = ['All', 'React', 'Vanilla JS', 'API', 'Full-Stack'];

export default function FilterableProjects() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    return active === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(active));
  }, [active]);

  return (
    <section id="projects-section" className="container" style={{ marginBottom: 40 }}>
      {/* Filter chips */}
      <div className="filters" role="tablist" aria-label="Project filters">
        {ALL_TAGS.map(tag => (
          <button
            key={tag}
            role="tab"
            aria-selected={active === tag}
            className={`chip ${active === tag ? 'active' : ''}`}
            onClick={() => setActive(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filtered.map(p => (
        <article key={p.id} className="column">
          <div className={p.toneClass}>
            {/* Carousel satisfies the Project Carousel requirement; you can add more images later */}
            <Carousel images={p.images} alt={p.alt} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a className="projbutton" href={p.href} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </article>
      ))}
    </section>
  );
}


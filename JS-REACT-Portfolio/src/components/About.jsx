// src/components/About.jsx
import React from "react";

const SKILLS = [
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React",      icon: "devicon-react-original colored" },
  { name: "Node.js",    icon: "devicon-nodejs-plain colored" },
  { name: "MongoDB",    icon: "devicon-mongodb-plain colored" },
  { name: "HTML",       icon: "devicon-html5-plain colored" },
  { name: "CSS",        icon: "devicon-css3-plain colored" },
  { name: "Python",     icon: "devicon-python-plain colored" },
];

export default function About() {
  return (
    <section id="about" className="about-me">
      <img
        src="/assets/prof_avatar_grn_mvgrad2.png"
        className="avatar"
        alt="Professional avatar"
      />

      <h1>About Me</h1>

      <p className="about-blurb">
        I build accessible, high-performance web apps with care—sweating the details so every interaction feels effortless.
      </p>

      <div className="tech-icons" role="list">
        {SKILLS.map((s) => (
          <div className="icon-group" role="listitem" key={s.name}>
            <i className={s.icon} aria-hidden="true" />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

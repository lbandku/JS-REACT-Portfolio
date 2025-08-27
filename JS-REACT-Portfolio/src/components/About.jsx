import React from 'react';

const About = () => {
  return (
    <section className="about-me">
      <img src="/assets/prof_avatar_grn_mvgrad2.png" className="avatar" alt="Professional Avatar Image" />
      <br></br>
      <h1>About Me</h1>

      <div className="about">
        <h3>
          I'm a web developer skilled in modern technologies, with a passion for creating responsive and interactive user experiences.
        </h3>

<div className="tech-icons">
    <div className="tech-icon">
    <i className="devicon-javascript-plain colored"></i>
    <span>JavaScript</span>
  </div>
    <div className="tech-icon">
    <i className="devicon-react-original colored"></i>
    <span>React</span>
  </div>
  <div className="tech-icon">
    <i className="devicon-nodejs-plain colored"></i>
    <span>Node.js</span>
  </div>
    <div className="tech-icon">
    <i className="devicon-mongodb-plain colored"></i>
    <span>MongoDB</span>
  </div>
  <div className="tech-icon">
    <i className="devicon-html5-plain colored"></i>
    <span>HTML</span>
  </div>
  <div className="tech-icon">
    <i className="devicon-css3-plain colored"></i>
    <span>CSS</span>
  </div>
  <div className="tech-icon">
    <i className="devicon-python-plain colored"></i>
    <span>Python</span>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;

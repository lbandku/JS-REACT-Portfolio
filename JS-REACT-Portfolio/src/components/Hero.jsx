import React from 'react';
import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <div className="hero-section">
      <Typewriter text="Where Every Click Bubbles with Possibility" />
      <br /><br /><br />
      <h1>Hello, I'm Jax.</h1>
      <br />
      <h3>Website Designer | Software Developer | Tech Student</h3>
      <br />
      <a href="#projects-section">
        <button type="button" className="button">View Projects</button>
      </a>
    </div>
  );
};

export default Hero;

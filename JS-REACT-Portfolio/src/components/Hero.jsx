import React from 'react';
import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <div className="hero-section">
      <br /><br /><br />
      <h1>Hello, I'm Jax.</h1>
      <br />
      <h3 style={{ textAlign: 'center' }}>
        <Typewriter
          text="Website Designer | Software Developer | Tech Student"
          speed={45}   // tweak if you want faster/slower
          delay={300}  // small pause before typing starts
        />
      </h3>

      <br />
      <a href="#projects-section">
        <button type="button" className="button">Explore Projects</button>
      </a>
      <br /><br />
    </div>
  );
};

export default Hero;

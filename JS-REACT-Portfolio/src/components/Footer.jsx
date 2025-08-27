import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="social-media">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin" style={{ fontSize: '2rem', color: '#0A66C2' }}></i>
          </a>
        </div>
        <br />
        <div className="copyright">
          Handcrafted by Jax &#169; 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

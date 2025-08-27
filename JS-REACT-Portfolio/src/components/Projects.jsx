import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <br />
      <div className="container">
        <div className="column">
          <div className="item1">
            <img src="/assets/book_swap_image.jpg" alt="Book Swap" />
            <h3>Bookstore Project:</h3>
            <h4>Javascript DOM. Simple styling. Functionality to fetch inventory from API & modify inventory.</h4>
            <p><button className="projbutton">View Project</button></p>
          </div>
        </div>

        <div className="column">
          <div className="item2">
            <img src="/assets/weather.jpg" alt="Weather App" />
            <h3>Weather App:</h3>
            <h4>Javascript REACT. Responsive design. Provides real-time weather forecasts for any location worldwide.</h4>
            <p><button className="projbutton">View Project</button></p>
          </div>
        </div>

        <div className="column">
          <div className="item3">
            <img src="/assets/free_ecomm-image.jpg" alt="E-Commerce Project" />
            <h3>E-Commerce Project:</h3>
            <h4>Full-Stack Dev.</h4>
            <p><button className="projbutton">View Project</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;



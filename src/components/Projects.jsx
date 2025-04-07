import React from 'react';
import Project from './Project';
import './Projects.css';

const weatherOutDes = 'This web-based tool visualizes weather data, allowing users to explore temperature and humidity trends over time using Chart.js. Features include real-time weather data, interactive line charts, and accurate representation of temperature (°C) and humidity (%). To get started, open the tool in your web browser, enter a city name, and view the current weather and 7-day forecast. The project requires an API key from OpenWeatherApp and utilizes the Chart.js library for data visualization.';
const foodflowDes = 'FoodFlow is a web application developed to revolutionize food donation accessibility. By merging HTML, CSS, and JavaScript for the front-end with PHP and MySQL for the back-end, it streamlines the donation process, resulting in a 30% increase in donations. This platform addresses food waste by enabling individuals to donate surplus food to local food banks. Key features include a user-friendly interface, a quick donation form, and photo upload functionality to simplify the donation process, empowering community support and fostering local impact.';
const evpointDes = 'EvePoint is a web application designed to explore electric vehicle charging stations (EVCS) and manage user information. Leveraging Firebase for real-time NoSQL database capabilities and Google Maps API for interactive location features, EvePoint ensures a seamless experience for finding and using EVCS. Key features include secure user authentication, detailed EVCS information, an interactive map, responsive design, and real-time updates.';
const easuDes = 'EasyBudget is a responsive web application designed for efficient personal finance management. It enables users to add, categorize, and track their income and expenses, and provides visual insights through dynamic pie charts. Key features include transaction management, category-based filtering, and PDF export options, ensuring a comprehensive and user-friendly experience across all devices.';

const projects = [
  { 
    name: 'WeatherOut', 
    desktopImg: 'images/weatherOut_desktop.png', 
    description: weatherOutDes, 
    mobileImg: 'images/weatherOut_mobile.jpg', 
    codeLink: 'https://github.com/pavansundar9/WeatherOut', 
    liveLink: 'https://pavansundar9.github.io/WeatherOut/' 
  },
  { 
    name: 'FoodFlow', 
    desktopImg: 'images/foodflow_desktop.png', 
    description: foodflowDes, 
    mobileImg: 'images/foodflow_mobile.png', 
    codeLink: 'https://github.com/pavansundar9/FoodFlow', 
    liveLink: '' 
  },
  { 
    name: 'EvPoint', 
    desktopImg: 'images/evpoint_desktop.png', 
    description: evpointDes, 
    mobileImg: 'images/evpoint_mobile.png', 
    codeLink: 'https://github.com/pavansundar9/evpoint', 
    liveLink: '' 
  },
  { 
    name: 'EasyBudget', 
    desktopImg: 'images/easyBudget_desktop.png', 
    description: easuDes, 
    mobileImg: 'images/easyBudget_mobile.png', 
    codeLink: 'https://github.com/pavansundar9/EasyBudget', 
    liveLink: 'https://pavansundar9.github.io/EasyBudget/' 
  }
];

const Projects = React.forwardRef((props,ref)=> {
  return (
    <section id="projects" className="projects-section" ref={ref}>
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            desktopImg={project.desktopImg}
            mobileImg={project.mobileImg}
            title={project.name}
            description={project.description}
            codeLink={project.codeLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
      <button className="projects-button">All-projects</button>
    </section>
  );
});

export default Projects;

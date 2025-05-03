import React from 'react';
import Project from './Project';
import './Projects.css';

const foodflowDes = 'FoodFlow is a full-stack web application designed to bridge the gap between food donors and those in need. Developed using HTML, CSS, JavaScript, PHP, and MySQL, it streamlines the donation process through features like secure user authentication, role-based access for donors and receivers, real-time donation listings, smart filtering, and a responsive user dashboard. The platform enhances food redistribution efforts by enabling users to list, claim, and manage food donations efficiently—promoting community engagement and minimizing food waste.';
const weatherOutDes = 'This web-based tool visualizes weather data, allowing users to explore temperature and humidity trends over time using Chart.js. Features include real-time weather data, interactive line charts, and accurate representation of temperature (°C) and humidity (%). To get started, open the tool in your web browser, enter a city name, and view the current weather and 7-day forecast. The project requires an API key from OpenWeatherApp and utilizes the Chart.js library for data visualization.';
const iplDes = 'A full-stack web application built with Angular and Spring Boot to manage various aspects of the Indian Premier League (IPL), including teams, players, and organizers. It features role-based access, JWT authentication, dynamic team/player assignment, and real-time IPL data management. Data is persisted using a MySQL database, and the system communicates via secure RESTful APIs to provide a seamless, responsive user experience.';

const projects = [
  { 
    name: 'IPL Management Application', 
    desktopImg: 'images/ipl_desktop.png', 
    description: iplDes, 
    codeLink: 'https://github.com/pavansundar9/ipl-manage', 
    liveLink: '',
    projectType: 'Full Stack',
    skills: ['Angular', 'Spring Boot', 'MySQL', 'REST API', 'JWT Authentication']
  },
  { 
    name: 'FoodFlow', 
    desktopImg: 'images/foodflow_desktop.png', 
    description: foodflowDes, 
    mobileImg: 'images/foodflow_mobile.png', 
    codeLink: 'https://github.com/pavansundar9/FoodFlow', 
    liveLink: 'https://foodflow.infinityfreeapp.com/?i=1',
    projectType: 'Full Stack',
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
  },
  { 
    name: 'WeatherOut', 
    desktopImg: 'images/weatherOut_desktop.png', 
    description: weatherOutDes, 
    mobileImg: 'images/weatherOut_mobile.jpg', 
    codeLink: 'https://github.com/pavansundar9/WeatherOut', 
    liveLink: 'https://pavansundar9.github.io/WeatherOut/',
    projectType: 'Front End',
    skills: ['HTML', 'CSS', 'JavaScript', 'Chart.js', 'OpenWeather API']
  }
];

const Projects = React.forwardRef((props, ref) => {
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
            projectType={project.projectType}
            skills={project.skills}
          />
        ))}
      </div>
      {/* <button className="projects-button">All-projects</button> */}
    </section>
  );
});

export default Projects;
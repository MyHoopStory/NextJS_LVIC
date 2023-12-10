"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3080/api/projects')
      .then((response) => {
        setProjects(response.data.projects);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  console.log(projects);

  // Handle loading state
  if (!projects) {
    return <p>Loading...</p>;
  }

  // Handle error state
  if (projects.error) {
    return <p>Error loading projects</p>;
  }

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <ul><h3>{project.siteName}</h3></ul>
            <li><h5>Address</h5></li>
            <li>{project.street}</li>
            <li>{project.city}</li>
            <li>{project.state}</li>
            <li>{project.zipCode}</li>
        </div>
      ))}
    </div>
  );
};

export default Projects;

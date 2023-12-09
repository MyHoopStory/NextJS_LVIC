import { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = ({ projects }) => {
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
          <h3>{project.siteName}</h3>
          {/* Render other project details */}
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    // Fetch projects using Axios
    const response = await axios.get('http://localhost:3000/api/projects');
    const projects = response.data;

    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    // Handle error
    console.error('Error fetching projects:', error);

    return {
      props: {
        projects: { error: true },
      },
    };
  }
}

export default Projects;

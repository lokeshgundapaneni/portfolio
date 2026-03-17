import './Projects.css';
import React, { useState } from 'react';
function Projects() {
  const [active, setActive] = useState(0);
  const projects = [
    {
      title: 'buyIT',
      subtitle: 'Category-Based E-Commerce Web App',
      tech: ['React.js', 'JavaScript'],
      date: 'Feb 2026',
      desc: 'A component-based e-commerce application with 5+ product categories, client-side routing, and reusable components.',
      points: [
        'Component-based architecture with React.js',
        'Client-side routing with React Router DOM across 4+ pages',
        '4+ reusable components reducing code duplication',
        'Scalable folder structure and clean UI design'
      ],
      github: 'https://github.com/lokeshgundapaneni/buyit'
    },
    {
      title: 'Nearby Rentals',
      subtitle: 'Rental & Shared Use Platform',
      tech: ['HTML', 'CSS'],
      date: 'Jan 2026',
      desc: 'A fully responsive platform to find nearby rental items like rooms and furniture.',
      points: [
        'Fully responsive UI using CSS media queries',
        'Consistent layout across mobile, tablet, and desktop',
        'Modular HTML/CSS for future backend integration',
        'Clean and accessible UI design'
      ],
      github: 'https://github.com/lokeshgundapaneni/RentNear'
    },
    {
      title: 'Lead Manager',
      subtitle: 'Business Lead & Follow-up Manager',
      tech: ['HTML', 'CSS', 'JavaScript'],
      date: 'Dec 2025',
      desc: 'A CRM-style web app to manage business leads and follow-ups using vanilla JavaScript.',
      points: [
        'Full CRUD operations via DOM manipulation',
        'Real-time tracking of lead status and schedules',
        'Customer interaction history management',
        'Zero framework — pure vanilla JavaScript'
      ],
      github: 'https://github.com/lokeshgundapaneni/followup-manager'
    }
  ]
  return (

    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* project titles */}
        <div className="project-titles">
          <div className='project-head'>
            <p>WHAT I'VE BUILT</p>
            <h1>PROJECTS</h1>
          </div>
          {projects.map((project,index) => (
            <button
              key={index}
              className={index===active?"active":""}
              onClick={()=>setActive(index)}
            >
              {project.title}
            </button>
          ))}
        </div>



        {/* Active Project Details */}
        <div className="project-details">
          <h2>{projects[active].title}</h2>
          <h4>{projects[active].subtitle}</h4>
          <p className="date">{projects[active].date}</p>
          <div className="tech">
            {projects[active].tech.map((techItem, i) => (
              <span key={i}>{techItem}</span>
            ))}
          </div>
          <p>{projects[active].desc}</p>
          <ul>
            {projects[active].points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <a
            href={projects[active].github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
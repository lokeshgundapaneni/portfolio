import React from 'react';
import './Resume.css';

const education = [
  {
    date: '2022 – 2026',
    title: 'B.Tech in CSE (Data Science)',
    place: 'Vaagdevi College of Engineering, Warangal',
    score: 'CGPA: 8.44 / 10.0',
  },
  {
    date: '2020 – 2022',
    title: 'Intermediate (MPC)',
    place: 'Sri Chaitanya Junior College',
    score: '892 / 1000 — 89.2%',
  },
  {
    date: '2019 – 2020',
    title: 'SSC',
    place: 'Alpha High School',
    score: '595 / 600 — 99.2%',
  },
];

const certifications = [
  'Web Essentials – HTML, CSS, Bootstrap',
  'JavaScript – Core Concepts',
  'ReactJS – Core Concepts',
];

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">

        {/* Title */}
        <div className="resume-title">
          <h3>MY RESUME</h3>
          <h1>Experience & <span>Background</span></h1>
        </div>

        {/* Education */}
        <div className="resume-group">
          <h2 className="group-title">Education</h2>
          {education.map((item, i) => (
            <div className="card" key={i}>
              <span className="card-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <p className="card-highlight">{item.score}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="resume-group">
          <h2 className="group-title">Certifications</h2>
          {certifications.map((cert, i) => (
            <div className="card" key={i}>
              <h3>{cert}</h3>
              <p>Verified Certificate</p>
            </div>
          ))}
        </div>

        {/* Activities */}
        <div className="resume-group">
          <h2 className="group-title">Activities</h2>
          <div className="card">
            <span className="card-date">2023 – 2024</span>
            <h3>Finance Chair – IEEE Student Branch</h3>
            <p>Organized 3+ workshops on AI, Blockchain & Data Analytics with 100+ attendees. Managed budgets and coordinated across 5+ departments.</p>
          </div>
          <div className="card">
            <span className="card-date">Ongoing</span>
            <h3>DSA Practice – LeetCode</h3>
            <p>Solved 70+ problems across Arrays, Strings & Recursion.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Resume;
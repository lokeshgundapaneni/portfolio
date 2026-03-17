import React from 'react'
import './About.css'
function About() {
  return (
    <section className='about-section'>
      <div className='about-container'>
        <div className='about-head'>
          <h3>ABOUT ME</h3>
          <h1 className='think'>Think</h1>
          <h1 className='build'><span>Build</span></h1>
          <h1 className='scale'>Scale</h1>
        </div>
        <div className='about-content'>
          <p>I'm <span>Lokesh Gundapaneni</span>, a final-year B.Tech Computer Science student at Vaagdevi College of Engineering, graduating in 2026 with a CGPA of 8.44.</p>
          <p>My focus is on <span>Java full-stack development</span> — from building robust backend APIs using Spring Core, Hibernate, and Java Servlets, to crafting clean, responsive frontends with React.js.</p>
          <p>Outside of coding, I served as Finance Chair for IEEE Student Branch, organizing 3+ technical events for 100+ students. I also enjoy solving DSA problems on LeetCode (70+) and playing cricket.</p>
          <div className='quick-links'>
            <a href=''>Github↗</a>
            <a href=''>LinkedIn↗</a>
            <a href=''>Leetcode↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <h1>LG<span>.</span></h1>
        </div>
        <div className='links'>
            <NavLink className="nav-link Home" to="/">Home</NavLink>
            <NavLink className="nav-link about" to="/about">About</NavLink>
            <NavLink className="nav-link skills" to="/skills">Skills</NavLink>
            <NavLink className="nav-link projects" to="/projects">Projects</NavLink>
            <NavLink className="nav-link resume" to="/resume">Resume</NavLink>
            <NavLink className="nav-link contact" to="/contact">Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar
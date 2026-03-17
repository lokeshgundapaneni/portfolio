import React from 'react';
import './Skills.css';
const skillGroups = [
    { category:'Languages', 
      skills:['Java','JavaScript','SQL','Python']
    },
    { category:'Backend', 
      skills:['Spring Core','Hibernate','Java Servlets','JDBC','REST APIs']
    },
    { category:'Frontend', 
      skills:['React.js','HTML5','CSS3','React Router DOM','React Hooks'] 
    },
    { category:'Database', 
      skills:['MySQL','DDL/DML','Joins','Subqueries'] 
    },
    { category:'Tools', 
      skills:['Git','GitHub','IntelliJ IDEA','VS Code','Eclipse'] 
    },
    { category:'Core CS',
      skills:['DSA','OOP','Big-O Analysis','SDLC','Problem Solving'] 
    }
];

function Skills() {
    return (
        <section id='skills' className='skills-section'>
            <div className='skills-container'>
                <p className='section-label'>WHAT I KNOW</p>
                <h1 className='section-title' style={{marginBottom:"3.5rem"}}>SKILLS</h1>
                <div className='skills-grid'>
                    {
                        skillGroups.map((group) => (
                            <div className="skill-card" key={group.category}>
                                <h3 className="skill-category">{group.category}</h3>
                                <div className="skill-list">
                                    {group.skills.map(skill => (
                                        <span className="skill-pill"key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
export default Skills;
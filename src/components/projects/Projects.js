import React, { useState } from 'react'
import './Projects.scss'
import Card from '../parts/Card'
import {projects} from "../../constants/index"
import sprite from "../../assets/sprites.svg"

const Projects = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div id="projects" className = "projects-section--wrapper navbar-fixed-padding">

      <h1 className="display-1 mb-1 mt-0 text-center header" 
                style = {{fontWeight: '1000'}}>Projects.</h1>
      <div className="about-circle"> 
        <div id="stars"></div>
      </div>
      
      <div className="about-grid">
        {projects.map((project)=> (

          <Card>
            <span class="icon">
              <a href={project.link}>
                <svg >
                    <use xlinkHref={`${sprite}#git`}/>
                </svg>
              </a>
            </span>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className={`about-tech-list--wrapper ${readMore ? "visible" : "hidden"}`}>
              {project.tech.map(stack => (
                <span className="about-tech">
                  {stack}
                </span>
            ))}</div>
          </Card>
        ))}

      </div>  
    </div>
  )
}

export default Projects
import React from 'react'
import {experiences} from "../../constants/index"

import ExperienceCard from "../parts/ExperienceCard"
import TimeLine from "../parts/TimeLine"
import "./Experience.scss"

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Experience = () => {

  const experienceCardStyle = {
    color: "#e86971"
  }

  return (
    <div id = "experience" className="experience-timeline navbar-fixed-padding">
      <h1 className="display-1 mb-1 mt-0 text-center header" 
              style = {{fontWeight: '1000'}}>Experience.</h1>
      <TimeLine style={{color: "#000000"}} >
        
        {experiences.map((data, indx) => (
          <ExperienceCard
            key = {indx}
            dateText = {data.date}
            style={experienceCardStyle}
            companyIcon = {data.icon}
            companyLink = {data.link}
            className="timeline-card"
          >
            <h3 className="timeline-item-header name">
              {data.title}
            </h3>
            <h4 className="timeline-item--head position"><a href={data.link}>{data.company_name}</a></h4>
            <p className="timeline-item--header description">{data.description}</p>
              
            
            <ul>
              {data?.work_items?.map((items) => (
                <li>{items}</li>
              ))}
            </ul>

          </ExperienceCard>
          
        ))}

      </TimeLine>
    </div>
  )
}

export default Experience
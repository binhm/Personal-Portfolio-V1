import React from 'react'
import {experiences} from "../../constants/index"

import ExperienceCard from "../parts/ExperienceCard"
import TimeLine from "../parts/TimeLine"
import "./Experience.scss"

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Experience = () => {
  // const workItems = experiences.points.map((desc) => 
  // <li>{desc}</li>
  // );
  const experienceCardStyle = {
    color: "#e86971"
  }
  console.log(experiences);

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
              
            
            {data.work_items ? <ul>
              {data.work_items.map((items) => (
                <li>{items}</li>
              ))}
            </ul> : <></>}

          </ExperienceCard>
          
        ))}

      </TimeLine>


  {/* <TimeLine style={{color: "#000000"}}>
    <ExperienceCard
      key="001"
      dateText="11/2010 – Present"
      style={experienceCardStyle}
    >
      <h3>Title, Company</h3>
      <h4>Subtitle</h4>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </p>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </p>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </p>
    </ExperienceCard>
    <ExperienceCard
      key="002"
      dateText="04/2009 – 11/2010"
      dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
      bodyContainerStyle={{
        background: '#ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
      <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </p>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </p>
    </ExperienceCard>
    <ExperienceCard
      key="003"
      dateComponent={(
        <div
          style={{
            display: 'block',
            float: 'left',
            padding: '10px',
            background: 'rgb(150, 150, 150)',
            color: '#fff',
          }}
        >
          11/2008 – 04/2009
        </div>
      )}
    >
      <h3>Title, Company</h3>
      <h4>Subtitle</h4>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </p>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </p>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </p>
    </ExperienceCard>
    <ExperienceCard
      key="004"
      dateText="08/2008 – 11/2008"
      dateInnerStyle={{ background: '#76bb7f' }}
    >
      <h3>Title, Company</h3>
      <h4>Subtitle</h4>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </p>
      <p>
        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
        est.
      </p>
    </ExperienceCard>
</TimeLine> */}


      {/* <TimeLine style={{color: "#000000"}}>
        {experiences.map((data, indx) => (
              <ExperienceCard
                key = {`00${indx}`}
                dateText = {data.date}
                style={{ color: '#e86971' }}
              >
                <h3>{data.company_name} | {data.title}</h3>
                

              </ExperienceCard>
          ))}
      </TimeLine> */}
      {/* <i class="bi bi-mortarboard"></i>
      {experiences.length > 0 && (
        <div className="timeline-container">
            {experiences.map((data) => (
                <ExperienceCard data={data}/>
            ))}
        </div>)
      } */}

    </div>
  )
}

export default Experience
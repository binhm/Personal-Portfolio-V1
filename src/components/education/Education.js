import React from 'react'
import "./Education.scss"
import sprite from "../../assets/sprites.svg"
import {education} from "../../constants/index"

const Education = () => {
  return (
    <div id="education" className="education-section navbar-fixed-padding">
      <h1 className="display-1 mb-1 mt-0 text-center header" 
          style={{fontWeight: '1000'}}>Education.</h1>
        
      
      <div className="education-card"> 
        <div className="education-content image">
          <div className="education-date">
            <span className="education-icon">
                <svg >
                  <use xlinkHref={`${sprite}#mortarboard-fill`}  />
                </svg>
            </span>
            <span className="date-inner">
              {education.date}
              {/* something */}
            </span>
            
          </div>
          
          {/* <span className="education-icon">
              <svg >
                <use xlinkHref={`${sprite}#mortarboard-fill`}  />
              </svg>
          </span> */}
          <span className="school-image">
            <a  href={education.link} >
                <img src={education.icon} alt="Irvine logo"/>
            </a>
          </span>
        </div>
        
        <div className="education-content description">
          <h2>{education.school}</h2>
          
          <p>{education.description}</p>
          <ul>
            {education.items.map((item)=> (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Education
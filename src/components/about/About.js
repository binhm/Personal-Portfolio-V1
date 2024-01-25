import React from 'react'
import './About.scss'
import Jumbotron from '../parts/Jumbotron';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {about} from "../../constants/index"
import sprite from "../../assets/sprites.svg"

const About = () => {
  const gradient = "#27214e, #ff6b3e, #f7c16a, #f7c16a, #ff6b3e, #27214e"
  const link = `HI ${<div>Hii!</div>}`;
    
  return (
    <div id = "about" className = "about-section--wrapper navbar-fixed-padding">
      <h1 className="display-1 mb-1 mt-0 text-center header" 
                style = {{fontWeight: '1000'}}>About Me.</h1>
      <Container >
          
          
          <Row className="outer-row" xs={1} md={1} lg={2}>
            <Col  >
              <Row className="inner-row profile">
                <div className="circle"></div>
                <div className="profile-picture">
                  <img src={about.picture} alt="profile picture"/>
                </div>
              </Row>
              <Row > 
                <div className="contact-info-content">
                  {about.links.map((items) => (
                    <div className="icons-links--wrapper">
                      <a className="contact-content" href={items.link}>
                        <svg >
                          <use xlinkHref={`${sprite}#${items.type}`}  />
                        </svg>
                        <span>{items.display_text}</span>
                      </a>
                    </div>
                     ))}
                </div>
                
                  
               
                  
              </Row>
            </Col>
            <Col>
                <p>
                    {about.description}
                </p>

                <p>Here are the technologies I interact with: </p>
                <div class="skills--wrapper">
                  {about.skills.map((skill) => (
                    <span>
                      {skill}
                    </span>
                  ))}
               </div>
              
            </Col>
            
          </Row>
          
        </Container>
      {/* <Jumbotron
        fluid
        id="home"
        style={{
          backgroundSize: "1000% 100%",
        }}
        className="navbar-fixed-padding title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <Container>
          <h1 className="display-1 mb-1 mt-0 text-center header" 
              style = {{fontWeight: '500', color: "#000000"}}>About Me.</h1>
        </Container>
      </Jumbotron> */}
    </div>
  )
}

export default About
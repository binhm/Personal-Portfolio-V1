import React from 'react'

import { useState, useEffect } from 'react';
import "./NavigationBar.css"
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ResumeLogo from '../../assets/resume.svg';
import AboutLogo from '../../assets/person-circle.svg';
import HomeLogo from '../../assets/house.svg';
import ExperienceLogo from '../../assets/briefcase.svg';
import ProjectLogo from '../../assets/journal-code.svg';
import EducationLogo from '../../assets/mortarboard.svg';
import {resume_link} from "../../constants/index"


const NavigationBar = () => {
  const expand = "md";
  const [navExpanded, setNavExpanded] = useState(false)
  const [showSideBar, setShowSideBar] = useState(false)

  // const buttonHandler = () => {
  //   setIsLoading(current => !current)
  // }
//   useEffect( () => {
//     console.log(showSideBar);
// }, [showSideBar]);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      setShow(true);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };


  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
    <div className = {`${show ? "nav-show" : "nav-hidden"}`}>
        <Navbar 
              bg="dark" data-bs-theme="dark"
              onToggle={() => 
                setShowSideBar(showSideBar => !showSideBar)
              }
              collapseOnSelect 
              fixed="top"
              key={expand} 
              expand={expand} 
              className="bg-body-tertiary mb-3 ">
          <Container fluid>
            <Navbar.Brand href="home">BM</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              bg="dark" data-bs-theme="dark"
              data-bs-backdrop="false"
              
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                BM
                </Offcanvas.Title>
              </Offcanvas.Header>
             
              <Offcanvas.Body>
                <Nav 
                  className="justify-content-center flex-grow-1 pe-3"
                  // className="me-auto my-2 my-lg-0"
                  // style={{ maxHeight: '100px'}}
                  >
                  
                  <Nav.Link href="#home">
                    {/* <span class="icon-user"></span> */}
                    
                    {showSideBar ? <img className="icon--home" alt="home_icon" src={HomeLogo}/>: <></>}
                    <Navbar.Text>Home</Navbar.Text>
                    
                  </Nav.Link>
                  <Nav.Link href="#about">
                    {showSideBar ? <img className="icon--about" alt="about_me" src={AboutLogo}/> : <></>}
                    <Navbar.Text>About</Navbar.Text>
                  </Nav.Link>
                  <Nav.Link href="#experience">
                    {showSideBar ? <img className="icon--experience" alt="experience_icon" src={ExperienceLogo}/> : <></>}
                    <Navbar.Text>Experience</Navbar.Text>
                  </Nav.Link>
                  
                  <Nav.Link href="#projects">
                    {showSideBar ? <img className="icon--projects" alt="project_icon" src={ProjectLogo}/> : <></>}
                    <Navbar.Text>Projects</Navbar.Text>
                  </Nav.Link>
                  <Nav.Link href="#education">
                    {showSideBar ? <img className="icon--education" alt="education_icon" src={EducationLogo}/>  : <></>}
                    <Navbar.Text>Education</Navbar.Text>
                  </Nav.Link>
                  <Nav.Link href={resume_link}>
                    {showSideBar ? <img className="icon--contact" alt="contact_icon" src={ResumeLogo}/> : <></>}
                    <Navbar.Text>Resume</Navbar.Text>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>
   </>
    
  )
}

export default NavigationBar
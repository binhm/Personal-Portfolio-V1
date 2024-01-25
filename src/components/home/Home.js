import React from 'react'
import "./Home.scss"
import {introduction} from "../../constants/index"
import Container from "react-bootstrap/Container";
import { useState } from 'react';
import Jumbotron from '../parts/Jumbotron';

const Home = () => {
  // const gradient = "#000000, #4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f"
  const gradient = "#27214e, #ff6b3e, #f7c16a, #f7c16a, #ff6b3e, #27214e"

  return (
    <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1000% 100%",
        }}
        className="navbar-fixed-padding title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        

        <div className="shooting-star"></div>
        {/* Come back here */}
        <div className="shooting-star"></div> 
        <div id="stars"></div>
        <div id="stars-mid"></div>
        <div id="stars-large"></div>
        
        <Container className="homeContainer" fluid>
          {/* <p className="lead text-center">{introduction.pre_header}</p> */}
          <h1 className="display-1 mb-1 mt-0 text-center header" 
              style = {{fontWeight: '1000'}}>{introduction.header}.</h1>
          <h6 className="display-8 mb-4 text-center" 
              style = {{fontWeight: '400'}}>{introduction.sub_header}</h6>
          <p className="lead text-center" 
              style = {{fontWeight: '400'}}>{introduction.description}</p>
        </Container>
        
    </Jumbotron>
  )
}


// TODO Move this to another file to be imported
// const Jumbotron = (props) => {
//   const bgStyle = props.style ?? { backgroundColor: "#e9ecef" };
//   return (
//     <div id={props.id} className={`py-3 navbar-fixed-padding ${props.className}`} style={bgStyle}>
//       <div className="container py-5">
//         {props.children}
//       </div>
//     </div>
//   );
// }
export default Home
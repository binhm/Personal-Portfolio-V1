import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import NavigationBar from './components/bar/NavigationBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';

import React from "react"

const Content = React.forwardRef((props, ref) => {
  return (
    <>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Education/>
      {/* <Contact/> */}
    </>
  );
});



function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
      {/* <Home/>
      <Experience/>
      <Projects/>
      <Contact/> */}

      <BrowserRouter >
        <NavigationBar />
        <Routes>                
          {/* Check element vs component */}
          {/* <Route exact path={"/"} component={Home}/>   */}
          <Route path="/" element={<Content/>}/>  
          <Route exact path={"/home"} element={<Content/>}/>  
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

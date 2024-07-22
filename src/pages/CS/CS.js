
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowDown from '../../images/icons/arrow-down.svg';
import ArrowLeftRight from '../../images/icons/arrow-left-right.svg';
import {Link} from 'react-router-dom';
import ClassHoverButton from '../../Components/ClassHoverButton';

const CS = () => {
  return (
    <div>
      <main>
        <div style={{ backgroundColor: "#67aeda" }} className="text-center p-5">
          <h1>Computer Science Track</h1>
        </div>

        <section id="cs">
          <div className="container my-5">
          <p>We offer four introductory courses in the computer science track: Scratch, Python, Java, and Web Development. We also offer Python II, a more advanced Python course. Classes take a project-based learning approach as students will learn through collaborating and working with peers on mini-projects.</p>
          
          <h2 className = "text-center p-5">Typical Class Progression</h2>

          <div style = {{margin: "auto", marginTop: "1rem", marginBottom: "6rem"}}>
          <ClassHoverButton link = "scratch" color = "#ffc819" fillButtonColor = "fillButtonYellow" className = "Scratch"/>
          <div style = {{margin: "auto", width: "fit-content"}}><img alt = "down arrow" src = {ArrowDown} style = {{width: "3rem", height:"5rem"}}/></div>
          <div style = {{display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center"}}>
          <ClassHoverButton link = "python1" color = "#4CAF50" fillButtonColor = "fillButtonGreen" className = "Python I"/>
          <img alt = "left/right arrow" src = {ArrowLeftRight} style = {{width: "3rem", height:"3rem"}}/>
          <ClassHoverButton link = "java" color = "#4CAF50" fillButtonColor = "fillButtonGreen" className = "Java"/>
          </div>
          <div style = {{margin: "auto", width: "fit-content"}}><img alt = "down arrow" src = {ArrowDown} style = {{width: "3rem", height:"5rem"}}/></div>
          <div style = {{display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center"}}>
          <ClassHoverButton link = "python2" color = "#67aeda" fillButtonColor = "fillButtonBlue" className = "Python II"/>
          <img alt = "left/right arrow" src = {ArrowLeftRight} style = {{width: "3rem", height:"3rem"}}/>
          <ClassHoverButton link = "webdev" color = "#67aeda" fillButtonColor = "fillButtonBlue" className = "Web Development"/>
          </div>
          </div>

          <p>
            We recommend students younger than 5th grade begin with Scratch, while those in 6th-8th grade should begin with Python I or Java.
          </p>

          <h2 className = "text-center p-5">Learn About A Class:</h2>
          <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom:"2rem", gap:"3rem", color:"blue"}}>
            <Link to= "scratch" style = {{fontSize:"1.5rem"}} className = "button"> Scratch </Link>
            <Link to= "python1" style = {{fontSize:"1.5rem"}} className = "button"> Python I </Link>
            <Link to= "java" style = {{fontSize:"1.5rem"}} className = "button"> Java </Link>
            <Link to= "python2" style = {{fontSize:"1.5rem"}} className = "button"> Python II </Link>
            <Link to= "webdev" style = {{fontSize:"1.5rem"}} className = "button"> Web Development </Link>

          </div>

          <h2 className = "text-center p-5">Explore Other Tracks:</h2>
          <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginBottom:"6rem"}}>
            <Link to= "/engineering" className = "button" style = {{borderRadius: "20px", padding: "1.5rem", backgroundColor: "#ffc819", color: "white", textDecoration:"none", fontSize:"1.25rem"}}> Engineering Track </Link>
            <Link to= "/math" className = "button" style = {{borderRadius: "20px", padding: "1.5rem", backgroundColor: "#aaaaaa", color: "white", textDecoration:"none", fontSize:"1.25rem"}}> Math Track </Link>
            <Link to= "/science" className = "button" style = {{borderRadius: "20px", padding: "1.5rem", backgroundColor: "#4CAF50", color: "white", textDecoration:"none", fontSize:"1.25rem"}}> Science Track </Link>
          </div>
          </div>
        </section>
      </main>
    </div >
  );
}

export default CS;

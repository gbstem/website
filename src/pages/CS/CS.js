
import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowDown from '../../images/icons/arrow-down.svg';
import ArrowLeftRight from '../../images/icons/arrow-left-right.svg';
import {Link} from 'react-router-dom';

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
          <div style = {{borderWidth:"5px", borderStyle: "solid", color:"#ffc819", borderRadius: "25px", padding:"2.5rem 1rem", width: "15rem", textAlign:"center", margin: "auto"}} className = "fillButtonYellow" > <Link to="scratch" style = {{fontWeight:"500", fontSize:"1.25rem"}} className = "link fillButtonYellow">Scratch</Link></div>
          <div style = {{margin: "auto", width: "fit-content"}}><img alt = "down arrow" src = {ArrowDown} style = {{width: "3rem", height:"5rem"}}/></div>
          <div style = {{display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center"}}>
          <div style = {{borderWidth:"5px", borderStyle: "solid", color: "#4CAF50", borderRadius: "25px", padding:"2.25rem 0.5rem", width: "15rem", textAlign:"center"}} className = "fillButtonGreen"><Link to="python1" style = {{fontWeight:"500", fontSize:"1.25rem"}} className = "link fillButtonGreen">Python I</Link></div>
          <img alt = "left/right arrow" src = {ArrowLeftRight} style = {{width: "3rem", height:"3rem"}}/>
          <div style = {{borderWidth:"5px", borderStyle: "solid", color: "#4CAF50", borderRadius: "25px", padding:"2.25rem 0.5rem", width: "15rem", textAlign:"center"}}className = "fillButtonGreen"><Link to="java" style = {{fontWeight:"500", fontSize:"1.25rem"}} className = "link fillButtonGreen">Java</Link></div>
          </div>
          <div style = {{margin: "auto", width: "fit-content"}}><img alt = "down arrow" src = {ArrowDown} style = {{width: "3rem", height:"5rem"}}/></div>
          <div style = {{display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center"}}>
          <div style = {{borderWidth:"5px", borderStyle: "solid", color: "#67aeda", borderRadius: "25px", padding:"2.25rem 0.5rem", width: "15rem", textAlign:"center"}} className = "fillButtonBlue"><Link to="python2" style = {{fontWeight:"500", fontSize:"1.25rem"}} className = "link fillButtonBlue">Python II</Link></div>
          <div>
          <img alt = "left/right arrow" src = {ArrowLeftRight} style = {{width: "3rem", height:"3rem"}}/>
          </div>
          <div style = {{borderWidth:"5px", borderStyle: "solid", color: "#67aeda", borderRadius: "25px", padding:"2.25rem 0.5rem", width: "15rem", textAlign:"center"}} className = "fillButtonBlue"><Link to="webdev" style = {{fontWeight:"500", fontSize:"1.25rem"}} className = "link fillButtonBlue">Web Development</Link></div>
          </div>
          </div>

          <p>
            We recommend students younger than 5th grade begin with Scratch, while those in 6th-8th grade should begin with a Level 2 class.
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

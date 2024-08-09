import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowDown from '../../images/icons/arrow-down.svg';
import {Link} from 'react-router-dom';
import ClassHoverButton from '../../Components/ClassHoverButton';

const Engineering = () => {
  return (
    <div>
      <main>
        <div style={{ backgroundColor: "#ffd809"}} className="text-center p-5">
          <h1>Engineering Track</h1>
        </div>

        <section id="cs">
          <div className="container my-5">
          <p>We are offering 3 different engineering courses during the fall semester: Engineering I, II, and III. Engineering classes help students develop a wide variety of skills, from problem-solving to an understanding of physics.</p>
          
          <h2 className = "text-center p-5">Typical Class Progression</h2>

          <div style = {{margin: "auto", marginTop: "1rem", marginBottom: "6rem"}}>
          <ClassHoverButton link = "engineering1" color = "#ffc819" fillButtonColor = "fillButtonYellow" className = "Engineering I"/>
          <div style = {{margin: "auto", width: "fit-content"}}><img alt = "down arrow" src = {ArrowDown} style = {{width: "3rem", height:"5rem"}}/></div>
          <ClassHoverButton link = "engineering2" color = "#4CAF50" fillButtonColor = "fillButtonGreen" className = "Engineering II"/>
          <div style = {{margin: "auto", width: "fit-content"}}><img alt = "down arrow" src = {ArrowDown} style = {{width: "3rem", height:"5rem"}}/></div>
          <ClassHoverButton link = "engineering3" color = "#67aeda" fillButtonColor = "fillButtonBlue" className = "Engineering III"/>
          </div>

          <p>
            We recommend that students below 5th grade begin with Engineering I, while those in 6th-8th grade can begin with Engineering II.
          </p>

          <h2 className = "text-center p-5">Learn About A Class:</h2>
          <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom:"2rem", gap:"3rem", color:"blue"}}>
            <Link to= "engineering1" style = {{fontSize:"1.5rem"}} className = "button"> Engineering I </Link>
            <Link to= "engineering2" style = {{fontSize:"1.5rem"}} className = "button"> Engineering II </Link>
            <Link to= "engineering3" style = {{fontSize:"1.5rem"}} className = "button"> Engineering III </Link>
          </div>

          <h2 className = "text-center p-5">Explore Other Tracks:</h2>
          <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginBottom:"6rem"}}>
            <Link to= "/cs" className = "button" style = {{borderRadius: "20px", padding: "1.5rem", backgroundColor: "#67aeda", color: "white", textDecoration:"none", fontSize:"1.25rem"}}> Computer Science Track </Link>
            <Link to= "/math" className = "button" style = {{borderRadius: "20px", padding: "1.5rem", backgroundColor: "#aaaaaa", color: "white", textDecoration:"none", fontSize:"1.25rem"}}> Math Track </Link>
            <Link to= "/science" className = "button" style = {{borderRadius: "20px", padding: "1.5rem", backgroundColor: "#4CAF50", color: "white", textDecoration:"none", fontSize:"1.25rem"}}> Science Track </Link>
            <Link to= "/robotics" className = "button" style = {{borderRadius: "20px", padding: "1.5rem", backgroundColor: "#bf60bf", color: "white", textDecoration:"none", fontSize:"1.25rem"}}> Robotics Program </Link>
          </div>
          </div>
        </section>
      </main>
    </div >
  );
}

export default Engineering;

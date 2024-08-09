import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const ScienceTrack = () => {
  return (
    <div>
      <main>
        <div style={{ backgroundColor: "#5CBF60" }} className="text-center p-5">
          <h1> Science Track</h1>
        </div>

        <section id="cs">
          <div className="container my-5">
          <p>The Science Track currently offers an in-depth Environmental Science 1 class which revolves around the idea of cause and effect as it pertains to prevalent environmental issues. In the course, students are asked both to learn about the effects humanity has had upon the environment and to utilize their creativity to analyze current solutions and brainstorm their own ideas. </p>
          <p>
            We recommend students between kindergarten and 5th grade take Environmental Science 1.
          </p>

          <h2 className = "text-center p-5">Learn About The Class:</h2>
          <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom:"2rem", gap:"3rem", color:"blue"}}>
            <Link to= "science1" style = {{fontSize:"1.5rem"}} className = "button"> Environmental Science </Link>
          </div>

          <h2 className = "text-center p-5">Explore Other Tracks:</h2>
          <div style = {{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginBottom:"6rem"}}>
            <Link to= "/engineering" className = "button" style = {{borderRadius: "20px", padding: "1.5rem", backgroundColor: "#ffc819", color: "white", textDecoration:"none", fontSize:"1.25rem"}}> Engineering Track </Link>
            <Link to= "/math" className = "button" style = {{borderRadius: "20px", padding: "1.5rem", backgroundColor: "#aaaaaa", color: "white", textDecoration:"none", fontSize:"1.25rem"}}> Math Track </Link>
            <Link to= "/cs" className = "button" style = {{borderRadius: "20px", padding: "1.5rem", backgroundColor: "#67aeda", color: "white", textDecoration:"none", fontSize:"1.25rem"}}> Computer Science Track </Link>
            <Link to= "/robotics" className = "button" style = {{borderRadius: "20px", padding: "1.5rem", backgroundColor: "#bf60bf", color: "white", textDecoration:"none", fontSize:"1.25rem"}}> Robotics Program </Link>
          </div>
          </div>
        </section>
      </main>
    </div >
  );
}

export default ScienceTrack;

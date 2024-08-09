import React from "react";
import { Link } from "react-router-dom";

function Robotics() {

  return (
    <div>
      <div style={{ backgroundColor: "#bf60bf" }} className="text-center p-5">
        <h1>Lego Robotics</h1>
        <h3 style = {{ fontWeight: "200" }}>Grades 5-8 </h3>
      </div>
      <div className="container">
        <div className="my-5">
          <p>During the fall semester, gbSTEM offers a FIRST Lego League Robotics program. In FIRST Lego League (FLL), students working in teams get to build Lego robots to solve missions and earn points in a colorful and educational yearly game. They then can compete with students from all across the globe. In addition to building robots, students build organization, research, and leadership skills by designing an innovative project to benefit their community. A high majority of FLL alumni go on to pursue successful careers in STEM fields.</p>
        </div>
        <div style={{ paddingBottom: "2rem" }}>
            <h2 className="text-center p-3">Prerequisites</h2>
            <p>{'It is recommended that students sign up for this program after having taken a CS or Engineering track course, but no experience is required. The Robotics program will run from late September to mid-December, with the competition right before winter break. It is expected that students in the robotics program will be able to make the majority of class times, as their teammates will be depending on them.'}</p>
        </div>
        <h2 className="text-center p-3">Skills Taught and Practiced:</h2>
            <ul style={{ listStyleType: "none", paddingLeft: "0", fontWeight: 600}}>
                <li style={{ borderWidth: "1px", borderColor: "rgb(29, 34, 86)", borderStyle: "solid", padding: "1rem", marginTop: "1rem" }}>The Design Process</li>
                <li style={{ borderWidth: "1px", borderColor: "rgb(29, 34, 86)", borderStyle: "solid", padding: "1rem", marginTop: "1rem" }}>Engineering Principles</li>
                <li style={{ borderWidth: "1px", borderColor: "rgb(29, 34, 86)", borderStyle: "solid", padding: "1rem", marginTop: "1rem" }}>Problem Solving</li>
                <li style={{ borderWidth: "1px", borderColor: "rgb(29, 34, 86)", borderStyle: "solid", padding: "1rem", marginTop: "1rem" }}>Robot Programming</li>
                <li style={{ borderWidth: "1px", borderColor: "rgb(29, 34, 86)", borderStyle: "solid", padding: "1rem", marginTop: "1rem" }}>Teamwork</li>
                <li style={{ borderWidth: "1px", borderColor: "rgb(29, 34, 86)", borderStyle: "solid", padding: "1rem", marginTop: "1rem" }}>Research</li>
                <li style={{ borderWidth: "1px", borderColor: "rgb(29, 34, 86)", borderStyle: "solid", padding: "1rem", marginTop: "1rem" }}>Presenting To Judges</li>
                <li style={{ borderWidth: "1px", borderColor: "rgb(29, 34, 86)", borderStyle: "solid", padding: "1rem", marginTop: "1rem" }}>Leadership and Organization</li>
            </ul>
        <h2 className="text-center p-5">Explore Other Tracks:</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginBottom: "6rem" }}>
          <Link to="/engineering" className="button" style={{ borderRadius: "20px", padding: "1.5rem", backgroundColor: "#ffc819", color: "white", textDecoration: "none", fontSize: "1.25rem" }}> Engineering Track </Link>
          <Link to="/cs" className="button" style={{ borderRadius: "20px", padding: "1.5rem", backgroundColor: "#67aeda", color: "white", textDecoration: "none", fontSize: "1.25rem" }}> Computer Science Track </Link>
          <Link to="/science" className="button" style={{ borderRadius: "20px", padding: "1.5rem", backgroundColor: "#4CAF50", color: "white", textDecoration: "none", fontSize: "1.25rem" }}> Science Track </Link>
          <Link to="/math" className="button" style={{ borderRadius: "20px", padding: "1.5rem", backgroundColor: "#aaaaaa", color: "white", textDecoration: "none", fontSize: "1.25rem" }}> Math Track </Link>
        </div>

      </div>
    </div>
  );
}

export default Robotics;

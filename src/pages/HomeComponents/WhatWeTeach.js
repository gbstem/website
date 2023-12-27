import React from "react";
import mathGraphic from '../../images/homepage/math1.jpg';
import csGraphic from '../../images/homepage/cs1.png';
import scienceGraphic from '../../images/homepage/science1.svg';
import engineeringGraphic from '../../images/homepage/eng4.png';
import { Link } from 'react-router-dom';
import '../../styles.css';

function WhatWeTeach() {

  return (
    <div className="container pb-5 pt-5">
      <div >
        <h1 className="text-center">What We Teach</h1>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column p-4">
            <img src={csGraphic} alt="Computer Science" className="img-fluid mb-2" style = {{height: "20rem", width: "40rem", objectFit:"cover"}}/>
            <Link to="/cs" className="btn button" style = {{backgroundColor: "#67aeda", color: "white"}}>
              Computer Science
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column p-4">
            <img src={mathGraphic} alt="Mathematics" className="img-fluid mb-2" style = {{height: "20rem", width: "40rem", objectFit:"cover"}} />
            <Link to="/math" className="btn button" style = {{backgroundColor: "#aaaaaa", color: "white"}}>
              Mathematics
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column p-4">
            <img src={engineeringGraphic} alt="Engineering" className="img-fluid mb-2" style = {{height: "20rem", width: "40rem", objectFit:"cover"}}/>
            <Link to="/engineering" className="btn button" style = {{backgroundColor: "#ffc819", color: "white"}}>
              Engineering
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column p-4">
            <img src={scienceGraphic} alt="Science" className="img-fluid mb-2" style = {{height: "20rem", width: "40rem", objectFit:"cover"}}/>
            <Link to="/science" className="btn button" style = {{backgroundColor: "#4CAF50", color: "white"}}>
              Science
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default WhatWeTeach;
import React from "react";
import mathGraphic from '../../images/homepage/math1.jpg';
import csGraphic from '../../images/homepage/cs1.png';
import scienceGraphic from '../../images/homepage/science1.svg';
import engineeringGraphic from '../../images/homepage/eng4.png';
import { Link } from 'react-router-dom';


function WhatWeTeach() {

  return (
    <div className="container pb-5 pt-5">
      <div >
        <h1 className="text-center">What We Teach</h1>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column p-4">
            <img src={csGraphic} alt="Computer Science" className="img-fluid mb-2" />
            <Link to="/cs" className="btn btn-primary">
              Computer Science
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column p-4">
            <img src={mathGraphic} alt="Mathematics" className="img-fluid mb-2" />
            <Link to="/math" className="btn btn-primary">
              Mathematics
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column p-4">
            <img src={engineeringGraphic} alt="Engineering" className="img-fluid mb-2" />
            <Link to="/engineering" className="btn btn-primary">
              Engineering
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column p-4">
            <img src={scienceGraphic} alt="Science" className="img-fluid mb-2" />
            <Link to="/science" className="btn btn-primary">
              Science
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default WhatWeTeach;
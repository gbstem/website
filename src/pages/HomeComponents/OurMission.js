import React from "react";
import { Link } from "react-router-dom";

import slide1 from "../../images/zoomScreenshots/Screenshot (1).png";
import slide2 from "../../images/zoomScreenshots/Screenshot (2).png";
import slide3 from "../../images/zoomScreenshots/Screenshot (4).png";
import Slideshow from "../../Components/Slideshow";
import { ArrowRight } from "react-feather";

function OurMission() {
  const slides = [slide1, slide2, slide3];
  return (
    <div className="container pb-5 pt-5">
      <div>
        <div className="row">
          <div className="col-md-6 mb-2">
          <div style={{display: "flex", flexDirection:"column", justifyContent: "space-between", height: "100%", flexGrow: "1 1", paddingTop:"2rem", paddingBottom:"4rem", margin:"1.5rem"}}>
            <h1 className="text-center">Our Mission</h1>
            <p style = {{fontSize:"1.25rem", lineHeight:"2rem"}}>
              We believe that everyone should have the opportunity to build strong foundational skills in
              the STEM fields of science, computer science, math, and engineering, no matter their background or location.
            </p>

            <div className="button" style = {{marginLeft: "auto"}}>
              <Link to="/mission" className="btn btn-primary" style = {{display: "flex", alignItems:"center", width:"fit-content"}}>
                Learn More<ArrowRight/>
              </Link>
            </div>
            </div>
          </div>

          <div className="col-md-6">
            <Slideshow slides={slides} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;

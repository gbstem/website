import React from "react";
import { Link } from "react-router-dom";

import slide1 from "../../images/zoomScreenshots/Screenshot (1).png";
import slide2 from "../../images/zoomScreenshots/Screenshot (2).png";
import slide3 from "../../images/zoomScreenshots/Screenshot (4).png";
import Slideshow from "../../Components/Slideshow";

function OurMission() {
  const slides = [slide1, slide2, slide3];
  return (
    <div className="container pb-5 pt-5">
      <div>
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-center">Our mission</h1>
            <p>
              We believe that everyone should have the opportunity to build strong foundational skills in
              computer science, math, and engineering, no matter what their background or location is.
            </p>

            <div className="button">
              <Link to="/mission" className="btn btn-primary">
                Learn more
              </Link>
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

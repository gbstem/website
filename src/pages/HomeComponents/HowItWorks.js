import React from "react";
import glance from "../../images/glance.png";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div>
      <div className="container pb-5 pt-5">
        <div className="row">
          <div className="col-md-6">
            <div style={{display: "flex", flexDirection:"column", alignContent: "center", height: "100%"}}>
              <div style = {{height:"fit-content"}}>
            <h1 className="text-center">How It Works</h1>
            <p>
              All sessions are free and will be conducted either remotely via Zoom or in-person in groups of about
              5-10 students. Each class will meet for two 45-60 minute sessions every week. We emphasize
              creativity, problem-solving, and collaboration in order to foster a welcoming environment where
              students can form lasting friendships.
            </p>
            <div style = {{display:"flex", gap:"1rem"}}>
            <Link to="/faq" className="text-decoration-none btn btn-primary">
              Learn more
            </Link>

            <div>
              <Link to="/team" className="text-decoration-none btn btn-primary">
                Meet our team
              </Link>
            </div>
            </div>
            </div>
            </div>
            
          </div>

          <div className="col-md-6">
            <div className="mt-4">
              <img src={glance} alt="At a Glance" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
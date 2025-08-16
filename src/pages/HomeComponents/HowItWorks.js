import React from "react";
import glance from "../../images/glance.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";

function HowItWorks() {
  return (
    <div>
      <div className="container pb-5 pt-5">
        <div className="row">
          <div className="col-md-6">
            <div style={{display: "flex", flexDirection:"column", justifyContent: "space-between", height: "100%", flexGrow: "1 1", paddingTop:"2rem", paddingBottom:"4rem", margin:"1rem"}}>
            <h1 className="text-center">How It Works</h1>
            <p className="lead">
              All classes are 100% free and will be conducted either remotely via Zoom or in-person in groups of about
              5-10 students. Each class will meet for one 45-60 minute session per week. We emphasize
              creativity, problem-solving, and collaboration in order to foster a welcoming environment where
              students can form lasting friendships.
            </p>
            <div style = {{display:"flex", gap:"1rem", justifyContent: "right"}}>
            <Link to="/faq" className="text-decoration-none btn btn-primary" style = {{display: "flex", alignItems:"center"}}>
              Learn More<ArrowRight/>
            </Link>

            <div>
              <Link to="/team" className="text-decoration-none btn btn-primary"  style = {{display: "flex", alignItems:"center"}}>
                Meet Our Team<ArrowRight/>
              </Link>
            </div>
            </div>
            </div>
            
          </div>

          <div className="col-md-6">
            <div className="mt-4" style = {{display: "flex", justifyContent:"center"}}>
              <img src={glance} alt="At a Glance" className="img-fluid" style = {{height: "30rem"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

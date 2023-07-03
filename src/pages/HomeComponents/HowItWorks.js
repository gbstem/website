import React from "react";
import glance from "../../images/glance.png";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div>
      <div className="container pb-5 pt-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-center">How it works</h1>
            <p>
              All sessions are free and will be conducted either remotely via Zoom or in-person in groups of about
              5-10 students. Each class will meet for two 45-60 minute sessions every week. We emphasize
              creativity, problem-solving, and collaboration in order to foster a welcoming environment where
              students can form lasting friendships.
            </p>
            <Link to="/faq" className="text-decoration-none btn btn-primary m-2">
              Learn more
            </Link>

            <div>
              <Link to="/team" className="text-decoration-none btn btn-primary m-2">
                Meet our team
              </Link>
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
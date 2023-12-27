import React from "react";
import { Link } from "react-router-dom";
import quote from "../../images/quote.png";
import { ArrowRight } from "react-feather";

function WhatPeopleSay() {
  return (
    <div className="container pb-5 pt-5">
      <div className="mb-2">
        <br />
        <div style={{ width: 25}}>
          <img src={quote} alt="Quotation Mark" className="img-fluid" />
        </div>
      </div>
      <div>
      <p style = {{marginLeft:"1rem"}}>
        "My child came into coding without knowing what it really is. Now she is so excited about it and
        wants to keep doing it. Thank you gbSTEM for awakening that passion."
      </p>

      <div className="mb-2">
        <br />
        <div style={{ width: 25 }}>
          <img src={quote} alt="Quotation Mark" className="img-fluid" />
        </div>
      </div>
      <p style = {{marginLeft:"1rem"}}>
        "gbSTEM is an innovative program that met a need for out-of-school time enrichment for children by
        rallying the knowledge and skills of some truly amazing high school students."
      </p>
      <div className="mb-2">
        <br />
        <div style={{ width: 25 }}>
          <img src={quote} alt="Quotation Mark" className="img-fluid" />
        </div>
      </div>
      <p style = {{marginLeft:"1rem"}}>
        "They are passionate about and dedicated to making a difference in the community and
        fostering a love for math and computer science. They create curriculum to motivate students to love
        their classes and want to learn more." 
      </p>

      <div style = {{marginLeft:"auto", marginRight:"2rem", width:"fit-content"}}><Link to="/testimonials" className="btn btn-primary my-3">Read More<ArrowRight/></Link></div>
      </div>
      
    </div>
  );
}

export default WhatPeopleSay;

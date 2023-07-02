import React from "react";
import { Link } from "react-router-dom";
import quote from "../../images/quote.png";

function WhatPeopleSay() {
  return (
    <div className="container mb-5">
      <div className="mb-5">
        <br />
        <div style={{ width: 100 }}>
          <img src={quote} alt="Quotation Mark" className="img-fluid" />
        </div>
      </div>
      <p>
        "My child came into coding without knowing what it really is. Now she is so excited about it and
        wants to keep doing it. Thank you gbSTEM for awakening that passion."
      </p>

      <p>
        <b>Parent of a 3rd grade student</b>
      </p>

      <p>
        "gbSTEM is an innovative program that met a need for out-of-school time enrichment for children by
        rallying the knowledge and skills of some truly amazing high school students."
      </p>

      <p>
        <b>Parent of a 2nd grade student</b>
      </p>

      <p>
        "They are passionate about and dedicated to making a difference in the community and
        fostering a love for math and computer science. They create curriculum to motivate students to love
        their classes and want to learn more."
      </p>

      <p>
        <b>Parent of a 3rd grade student</b>
      </p>

      <Link to="/testimonials" className="btn btn-primary">Read more testimonials</Link>
    </div>
  );
}

export default WhatPeopleSay;

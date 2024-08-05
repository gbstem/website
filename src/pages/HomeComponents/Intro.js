import React from "react";

function HomeIntro() {

  return (
    <div className="container mb-5">
      <p style = {{fontSize:"1.25rem"}}>
        The Greater Boston STEM Program (gbSTEM) delivers free introductory computer science, math,
        engineering, and science enrichment to elementary and middle school students.</p> 
        <p>The fall semester will run from Sunday, September 29th to Saturday, December 21st! <br/> Returning instructor applications are now open, and new instructor applications will open Monday, August 19th. Student registrations will be open from Tuesday, August 20th to Friday, September 20th.
        To be notified when registrations and applications open, fill out this <a
          href="https://forms.gle/ejSvEu2cwwdovUg18"
          target="_blank" rel="noopener noreferrer"
        >form</a>.
      </p>
      <div className="row">
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>Parents and K-8 Students </strong>
          </p>
          <a className="btn btn-primary" href="https://forms.gle/ejSvEu2cwwdovUg18" target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </div>
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>High School and College Students </strong>
          </p>
          <a className="btn btn-primary" href="https://forms.gle/ejSvEu2cwwdovUg18" target="_blank" rel="noopener noreferrer">
            Apply to teach
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeIntro;


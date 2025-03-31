import React from "react";

function HomeIntro() {

  return (
    <div className="container mb-5">
      <p style = {{fontSize:"1.25rem"}}>
        The Greater Boston STEM Program (gbSTEM) delivers free introductory computer science, math,
        engineering, and science enrichment to elementary and middle school students.</p> 
        <p>The Spring Semester registration is now closed. Registrations for the Fall semester will open in August. <br/> If you are interested in gbSTEM's programs or hope to apply next semester as an instructor, please join our mailing list <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKlEDGGKCc7bB7Xvlm3zOnhgh37MusQ_uU_6paHAhpHIDgXw/viewform?usp=sf_link">here.</a>
      </p>
      <div className="row">
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>Parents and 1-8 Students </strong>
          </p>
          <a className="btn btn-primary" href="https://portal.gbstem.org/signup" target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </div>
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>Instructor Applicants (High School or Older)</strong>
          </p>
          <a className="btn btn-primary" href="https://portal.gbstem.org/signup" target="_blank" rel="noopener noreferrer">
            Apply to teach
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeIntro;


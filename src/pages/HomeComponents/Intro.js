import React from "react";

function HomeIntro() {

  return (
    <div className="container mb-5">
      <p style = {{fontSize:"1.25rem"}}>
        The Greater Boston STEM Program (gbSTEM) delivers free introductory computer science, math,
        engineering, and science enrichment to elementary and middle school students.</p> 
        <p>The spring semester will run from Sunday, March 16th to Saturday, June 14th. <br/> Instructor applications and student signups for the spring semester will open on Sunday, February 9th. <br/><br/> Class enrollment is on a first-come, first-served basis and will open on Saturday, March 8th. You must first sign up through the portal before March 8th in order to enroll in classes when enrollment opens. 
        {/* To be notified when registrations and applications open, fill out this <a
          href="https://forms.gle/ejSvEu2cwwdovUg18"
          target="_blank" rel="noopener noreferrer"
        >form</a>. */}
      </p>
      <div className="row">
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>Parents and K-8 Students </strong>
          </p>
          <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdKlEDGGKCc7bB7Xvlm3zOnhgh37MusQ_uU_6paHAhpHIDgXw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </div>
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>Instructor Applicants (High School or Older)</strong>
          </p>
          <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdKlEDGGKCc7bB7Xvlm3zOnhgh37MusQ_uU_6paHAhpHIDgXw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
            Apply to teach
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeIntro;


import React from "react";

function HomeIntro() {

  return (
    <div className="container mb-5">
      <p>
        The Greater Boston STEM Program (gbSTEM) delivers free introductory computer science, math,
        engineering, and science enrichment to elementary and middle school students. Unfortunately, the student registrations and instructor applications for the Fall 2023 semester have ended. The gbSTEM Spring 2024
        semester registrations/applications will open in February 2024.
        To be notified when registrations/applications open, fill out this <a
          href="https://forms.gle/ejSvEu2cwwdovUg18"
          target="_blank" rel="noopener noreferrer"
        >form</a>.
      </p>
      <div className="row">
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>Parents and K-8 Students </strong>
          </p>
          <a className="btn btn-primary" href="https://portal.gbstem.org/signup" target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </div>
        <div className="col-md-6 p-3 d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>High School and College Students </strong>
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


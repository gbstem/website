import React from "react";

function HomeIntro() {

  return (
    <div className="container mb-5">
      <p>
        The Greater Boston STEM Program (gbSTEM) delivers free introductory computer science, math, and
        engineering, and science courses to elementary and middle school students. The gbSTEM fall 2023
        semester registration will open in August. To be notified, fill out our mailing list form on our
        "register" page!
      </p>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>Parents and K-8 Students </strong>
          </p>
          <a className="btn btn-primary" href="https://student.gbstem.org" target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </div>
        <div className="col d-flex justify-content-center align-items-center flex-column">
          <p>
            <strong>High School and College Students </strong>
          </p>
          <a className="btn btn-primary" href="https://instructor.gbstem.org/signup" target="_blank" rel="noopener noreferrer">
            Apply to teach
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeIntro;


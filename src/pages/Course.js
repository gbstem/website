import React from 'react';

function Course({ courseInfo }) {

  let description1List = []
  if (courseInfo.description1.includes("*")) {
    description1List = courseInfo.description1.split("*")
  }

  let description2List = []
  if (courseInfo.description2.includes("*")) {
    description2List = courseInfo.description2.split("*")
  }

  return (
    <div className="row">
      <div className="col">
        <h1>{courseInfo.courseName}</h1>
        <h2>Are you ready?</h2>
        {
          description1List.length > 0 ?
            <div>
              <p>{description1List[0]}</p>
              <ul>
                {
                  description1List.slice(1).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                }
              </ul>
            </div>
            : <p>{courseInfo.description1}</p>
        }

        <h2>What will this course cover?</h2>
        {
          description2List.length > 0 ?
            <div>
              <p>{description2List[0]}</p>
              <ul>
                {
                  description2List.slice(1).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                }
              </ul>
            </div>
            : <p>{courseInfo.description2}</p>
        }
      </div>
      <div className="col">
        {
          courseInfo.images?.map((image, index) => (
            <img src={image} alt="Course" className="img-fluid" />
          ))
        }
      </div>
    </div>
  );
}

export default Course;
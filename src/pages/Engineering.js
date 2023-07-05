import React, { useRef } from "react";
import Course from "./Course";
import eng1 from '../images/engineering/eng1.png'
import eng2 from '../images/engineering/eng2.png'
import eng3 from '../images/engineering/eng3.jpg'
import eng4 from '../images/engineering/eng4.png'

const engineering = [
  {
    courseName: "Engineering I",
    description1: `We recommend this introductory course for any student who is excited about engineering and motivated to stretch their problem-solving skills. Engineering 1 students should be familiar with the following:
    *Operations with decimals and fractions
    *Calculating area and perimeter of rectangles
   * Measuring distances and lengths with a ruler`,
    description2: `In Engineering I, students will enhance their problem-solving and creativity skills. Students will learn the engineering design process and put it into action. This class involves many projects such as building parachutes and water filters that will enrich the student's critical thinking skills. At the end of the semester, students will be asked to create a final project that will showcase all the skills they have learned throughout the class. They will choose a problem and come up with a solution to then share with the class.`,
    images: [eng3, eng4]
  },
  {
    courseName: "Engineering II",
    description1: `We recommend this higher-level course for students with strong critical thinking skills and mathematical ability. Specifically, students should be proficient in these areas:
    *Calculating volume, area, and perimeter of various shapes and solids
    *Creating and analyzing different types of graphs and charts
    *Ratios and unit conversions`,
    description2: "In Engineering 2, students will take a deeper dive into topics covered in Engineering 1. Guided by the engineering design process, they will engage in design challenges that will encourage them to come up with creative solutions to problems. Through projects such as designing paper airplanes and thermal flasks, they will explore how scientific principles can be applied to maximize the effectiveness of their solutions. Along the way, they will utilize tools and strategies used by real engineers, including 3D modeling and biomimicry. Students will also have the chance to examine the vital role engineering plays in dealing with pressing real-world issues such as the climate crisis. By the end of the course, students will have become capable problem-solvers, equipped with the skills they need to develop an innovative solution to a problem of their own choice.",
    images: [eng1, eng2]
  },
  {
    courseName: "Engineering III",
    description1: "You must have taken Engineering II to enroll in this course.",
    description2: "Following the prerequisite courses, Engineering I and II, Engineering III introduces students to concepts in biomedical and mechanical engineering, as well as basic statistical analysis methods. This curriculum involves four outstanding projects, which will require knowledge from the Engineering II course and the understanding of more advanced topics. These projects and lessons will give students the opportunity to design a prototype for a prosthetic arm, a ferris wheel, and other appliances. This advanced course will teach students the more real-world practices of engineering, and the additional math and science behind the designing."
  }
]

function Engineering() {
  const engineering1Ref = useRef(null);
  const engineering2Ref = useRef(null);
  const engineering3Ref = useRef(null);
  const refs = [engineering1Ref, engineering2Ref, engineering3Ref];


  return (
    <div>
      <div className="text-center m-5">
        <h1>Engineering Track</h1>
      </div>
      <div className="container">
        <p>We are offering 3 different engineering courses during the spring semester. Please check the course descriptions before enrolling in an engineering course.
        </p>
        <div className="mb-5" id="math">
          <h1>Our classes are as follows: </h1>
          <p>
            <button className="btn btn-link" onClick={() => engineering1Ref.current.scrollIntoView({ behavior: "smooth" })}>Engineering I (recommended for grades 3-5)</button>
          </p>
          <p>
            <button className="btn btn-link" onClick={() => engineering2Ref.current.scrollIntoView({ behavior: "smooth" })}>Engineering II (recommended for grades 6-8 or for those who have taken Engineering I)</button>
          </p>
          <p>
            <button className="btn btn-link" onClick={() => engineering3Ref.current.scrollIntoView({ behavior: "smooth" })}>Engineering III (recommended for those who have taken Engineering II)</button>
          </p>

        </div>

        {
          engineering.map((courseInfo, index) => (
            <div id={`engineering${index + 1}`} ref={refs[index]} className="mb-3 pt-3" key={index}>
              <Course courseInfo={courseInfo} />
            </div>
          ))
        }

      </div>
    </div >
  );
}

export default Engineering;
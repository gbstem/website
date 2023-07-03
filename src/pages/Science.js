import Course from "./Course";
import sci1 from "../images/science/science1.jpg";
import sci2 from "../images/science/science1.svg";

const science = [
  {
    courseName: "Environmental Science",
    description1: `We recommend this course for anyone who is passionate about or wants to learn more about environmental issues and design forward-thinking solutions. Environmental Science students should be comfortable with the following:
    *Basic graphing
    *Calculating the area and circumference of a circle
    *Filling in basic equations with given information`,
    description2: `In Environmental Science, students will examine the impact humans have had on the climate, the oceans, and forests using critical thinking. This course will revolve around the idea of cause and effect as it pertains to prevalent environmental issues, and students will be asked both to learn about the effects humanity has had upon the environment and to utilize their creativity to analyze current solutions and brainstorm their own ideas. This course will combine comprehensive lessons with hands-on, project-based learning to allow students to both learn about a wide range of topics and gain personal experience working with some. In addition to projects that accompany units of the course, students will create and present a final project to cap off their learning during this course.`,
    images: [sci1, sci2]
  },
]

function Science() {
  return (
    <div>
      <div className="text-center m-5">
        <h1>Science Track</h1>
      </div>
      <div className="container">
        {
          science.map((courseInfo, index) => (
            <div id={`science${index + 1}`} className="mb-5">
              <Course courseInfo={courseInfo} />
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default Science;
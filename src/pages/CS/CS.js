
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowDown from '../../images/icons/arrow-down.svg';
import ClassHoverButton from '../../Components/ClassHoverButton';
import PageButton from '../../Components/PageButton';

const CS = () => {
  return (
    <div>
      <main>
        <div style={{ backgroundColor: "#67aeda" }} className="text-center p-5">
          <h1>Computer Science Track</h1>
        </div>

        <section id="cs">
          <div className="container my-5">
            <p>We offer five course levels in the computer science track: Scratch, Scratch 2, Python 1, Python 2, and Web Development. Each course, with the exception of Scratch 1 and Python 1, takes place in two parts: a fall "A" section, and a continuing spring "B" section. Note that the A section must be taken before the B section. The A section is only offered in the fall, and the B section is only offered in the spring. Scratch 1 and Python 1 are offered every fall and every spring. Students should take the B class after the A class. Classes take a project-based learning approach as students will learn through collaborating and working with peers on mini-projects.</p>

            <h2 className="text-center p-5">Typical Class Progression</h2>
            <div className="d-flex flex-nowrap justify-content-center align-items-center">
              <ClassHoverButton link="scratch1" color="#ffd233" className="Scratch 1" />
              <ClassHoverButton link="scratch2" color="#ffb347" className="Scratch 2" />
              <ClassHoverButton link="scratch3" color="#ff8c00" className="Scratch 3" />
            </div>
            <div className="d-flex justify-content-center my-3"><img alt="down arrow" src={ArrowDown} style={{ width: "3rem", height: "5rem" }} /></div>
            <div className="d-flex flex-nowrap justify-content-center align-items-center">
              <ClassHoverButton link="python1" color="#66BB6A" className="Python 1" />
              <ClassHoverButton link="python2" color="#388E3C" className="Python 2" />
              <ClassHoverButton link="python3" color="#2E7D32" className="Python 3" />
            </div>
            <div className="d-flex justify-content-center my-1 fs-3 fw-semibold">OR</div>
            <div className="d-flex flex-nowrap justify-content-center align-items-center">
              <ClassHoverButton link="python1" color="#66BB6A" className="Python 1" />
              <ClassHoverButton link="python2" color="#388E3C" className="Python 2" />
              <ClassHoverButton link="webdev" color="#2A7DBE" className="Web Development" />
            </div>
          </div>

          <p className="container my-5">
            We recommend students younger than 5th grade begin with Scratch, while those in 6th-8th grade should begin with Python. Those who have completed Scratch 2b should proceed to Python 1a.
          </p>

          <h2 className="text-center p-5">Explore Other Tracks:</h2>
          <div className="d-flex flex-wrap justify-content-center mb-5 gap-4">
            <PageButton link="/engineering" color="#ffc819" className="Engineering Track" />
            <PageButton link="/math" color="#aaaaaa" className="Math Track" />
            <PageButton link="/science" color="#4CAF50" className="Science Track" />
            <PageButton link="/robotics" color="#bf60bf" className="Robotics Program" />
          </div>
        </section>
      </main>
    </div >
  );
}

export default CS;

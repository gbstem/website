import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import ClassHoverButton from '../../Components/ClassHoverButton';
import PageButton from '../../Components/PageButton';
import ArrowDown from '../../images/icons/arrow-down.svg';

const ScienceTrack = () => {
  return (
    <div>
      <main>
        <div style={{ backgroundColor: "#5CBF60" }} className="text-center p-5">
          <h1> Science Track</h1>
        </div>

        <section id="cs">
          <div className="container my-5">
          <p>The Science Track currently offers an in-depth Environmental Science course. Each course takes place in two parts: a fall "A" section, and a continuing spring "B" section. Note that the A section must be taken before the B section. The A section is only offered in the fall, and the B section is only offered in the spring. Environmental Science revolves around the idea of cause and effect as it pertains to prevalent environmental issues. In the course, students are asked both to learn about the effects humanity has had upon the environment and to utilize their creativity to analyze current solutions and brainstorm their own ideas. </p>
          <p>
            We recommend students between 2nd and 5th grade take Environmental Science.
          </p>
          
          <h2 className="text-center p-5">Typical Class Progression</h2>
            <div className="d-flex flex-nowrap justify-content-center align-items-center">
              <ClassHoverButton link="science1" color="#66BB6A" className="Environmental Science A" />
              <ClassHoverButton link="science1" color="#4CAF50" className="Environmental Science B" />
            </div>
            {/* <div className="d-flex justify-content-center my-3"><img alt="down arrow" src={ArrowDown} style={{ width: "3rem", height: "5rem" }} /></div>
            <div className="d-flex flex-nowrap justify-content-center align-items-center">
              <ClassHoverButton link="science2" color="#388E3C" className="Physics A" />
              <ClassHoverButton link="science2" color="#2E7D32" className="Physics B" />
            </div> */}

          <h2 className = "text-center p-5">Explore Other Tracks:</h2>
          <div className="d-flex flex-wrap justify-content-center mb-5 gap-4">
            <PageButton link="/engineering" color="#ffc819" className="Engineering Track" />
            <PageButton link="/math" color="#aaaaaa" className="Math Track" />
            <PageButton link="/cs" color="#67aeda" className="Computer Science Track" />
            <PageButton link="/robotics" color="#bf60bf" className="Robotics Program" />
          </div>
          </div>
        </section>
      </main>
    </div >
  );
}

export default ScienceTrack;

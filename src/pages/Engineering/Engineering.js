import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowDown from '../../images/icons/arrow-down.svg';
import {Link} from 'react-router-dom';
import ClassHoverButton from '../../Components/ClassHoverButton';
import PageButton from '../../Components/PageButton';

const Engineering = () => {
  return (
    <div>
      <main>
        <div style={{ backgroundColor: "#ffd809"}} className="text-center p-5">
          <h1>Engineering Track</h1>
        </div>

        <section id="cs">
          <div className="container my-5">
          <p>We are offering 3 different engineering courses during the fall semester: Engineering I, II, and III. Engineering classes help students develop a wide variety of skills, from problem-solving to an understanding of physics.</p>
          
          <h2 className = "text-center p-5">Typical Class Progression</h2>

          <div className="d-flex flex-nowrap justify-content-center align-items-center">
            <ClassHoverButton link = "engineering1" color = "#ffdd53" className = "Engineering 1a"/>
            <ClassHoverButton link = "engineering1" color = "#ffc819" className = "Engineering 1b"/>
            <ClassHoverButton link = "engineering2" color = "#4CAF50" className = "Engineering 2a"/>
            <ClassHoverButton link = "engineering2" color = "#388E3C" className = "Engineering 2b"/>
            <ClassHoverButton link = "engineering3" color = "#67aeda" className = "Engineering 3a"/>
            <ClassHoverButton link = "engineering3" color = "#4b8fc2" className = "Engineering 3b"/>
          </div>

          <p className="mt-5">
            We recommend that students below 5th grade begin with Engineering I, while those in 6th-8th grade can begin with Engineering II.
          </p>

          <h2 className = "text-center p-5">Explore Other Tracks:</h2>
          <div className="d-flex flex-wrap justify-content-center mb-5 gap-4">
            <PageButton link="/cs" color="#67aeda" className="Computer Science Track" />
            <PageButton link="/math" color="#aaaaaa" className="Math Track" />
            <PageButton link="/science" color="#4CAF50" className="Science Track" />
            <PageButton link="/robotics" color="#bf60bf" className="Robotics Program" />
          </div>
          </div>
        </section>
      </main>
    </div >
  );
}

export default Engineering;

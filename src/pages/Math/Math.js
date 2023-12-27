import React from "react";
import { Link } from "react-router-dom";
import ArrowDown from '../../images/icons/thin-arrow-left-down.svg';
import ArrowLeftRight from '../../images/icons/rightArrow.png';

function Math() {

  return (
    <div>
      <div style={{ backgroundColor: "#cccccc" }} className="text-center p-5">
        <h1>Math Track</h1>
      </div>
      <div className="container">
        <div className="my-5">
          <p>We are offering five different mathematics courses during the fall semester. Each course teaches enrichment topics and content outside of the standard school curriculum. There is an emphasis on creative thinking, problem-solving, and competition math strategies. Each class will also feature fun brainteasers and logic puzzles. All courses will be largely problem-based, with a short lesson at the beginning. The goal of the Math Track is to equip students with the critical thinking and problem-solving skills that will help them succeed in middle school and beyond.</p>
          <p style={{
            fontWeight: "bold"
          }}>Math classes have a separate fall and spring curriculum for each level. For example, we offer Math 1a in the Fall and Math 1b in the Spring.
            Students from Spring 2023 should take the “a” version of the next level course. For example, if you completed Math 1b in the spring, you should proceed to Math 2a.
            Students from Fall 2022 should continue with the “b” version of the course you were previously enrolled in. Since we don’t offer the b version of math courses in the fall, we recommend waiting until the spring to enroll in a math course. </p>
        </div>

        <h2 className="text-center p-3">Typical Class Progression</h2>

        <div style={{ margin: "auto", marginTop: "1rem", marginBottom: "6rem" }}>
        <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center", gap:"3rem", marginTop:"-1rem"}}>
            <div style={{ borderWidth: "5px", borderStyle: "none", color: "black", borderRadius: "25px", padding: "1.25rem 0.5rem", width: "15rem", textAlign: "center", fontSize:"1.5rem", fontWeight: "500"}}>Fall Classes</div>
            <div style={{ borderWidth: "5px", borderStyle: "none", color: "black", borderRadius: "25px", padding: "1.25rem 0.5rem", width: "15rem", textAlign: "center" , fontSize:"1.5rem", fontWeight: "500"}}>Spring Classes</div>
          </div>
          <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center" }}>
            <div style={{ borderWidth: "5px", borderStyle: "solid", color: "#4CAF50", borderRadius: "25px", padding: "2.25rem 0.5rem", width: "15rem", textAlign: "center" }} className="fillButtonGreen"><Link to="math1a" style={{ fontWeight: "500", fontSize: "1.25rem" }} className="link fillButtonGreen">Math I A</Link></div>
            <img alt="left/right arrow" src={ArrowLeftRight} style={{ width: "3rem", height: "4rem" }} />
            <div style={{ borderWidth: "5px", borderStyle: "solid", color: "#4CAF50", borderRadius: "25px", padding: "2.25rem 0.5rem", width: "15rem", textAlign: "center" }} className="fillButtonGreen"><Link to="math1b" style={{ fontWeight: "500", fontSize: "1.25rem" }} className="link fillButtonGreen">Math I B</Link></div>
          </div>
          <div style={{ margin: "auto", width: "fit-content" }}><img alt="down arrow" src={ArrowDown} style={{ width: "3rem", height: "3rem" }} /></div>
          <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center" }}>
            <div style={{ borderWidth: "5px", borderStyle: "solid", color: "#67aeda", borderRadius: "25px", padding: "2.25rem 0.5rem", width: "15rem", textAlign: "center" }} className="fillButtonBlue"><Link to="math2a" style={{ fontWeight: "500", fontSize: "1.25rem" }} className="link fillButtonBlue">Math II A</Link></div>
            <div>
              <img alt="left/right arrow" src={ArrowLeftRight} style={{ width: "3rem", height: "4rem" }} />
            </div>
            <div style={{ borderWidth: "5px", borderStyle: "solid", color: "#67aeda", borderRadius: "25px", padding: "2.25rem 0.5rem", width: "15rem", textAlign: "center" }} className="fillButtonBlue"><Link to="math2b" style={{ fontWeight: "500", fontSize: "1.25rem" }} className="link fillButtonBlue">Math II B</Link></div>
          </div>
          <div style={{ margin: "auto", width: "fit-content" }}><img alt="down arrow" src={ArrowDown} style={{ width: "3rem", height: "3rem" }} /></div>
          <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center" }}>
            <div style={{ borderWidth: "5px", borderStyle: "solid", color: "#ffc819", borderRadius: "25px", padding: "2.5rem 1rem", width: "15rem", textAlign: "center"}} className="fillButtonYellow" > <Link to="math3a" style={{ fontWeight: "500", fontSize: "1.25rem" }} className="link fillButtonYellow">Math III A</Link></div>
            <img alt="left/right arrow" src={ArrowLeftRight} style={{ width: "3rem", height: "4rem" }} />
            <div style={{ borderWidth: "5px", borderStyle: "solid", color: "#ffc819", borderRadius: "25px", padding: "2.5rem 1rem", width: "15rem", textAlign: "center"}} className="fillButtonYellow" > <Link to="math3b" style={{ fontWeight: "500", fontSize: "1.25rem" }} className="link fillButtonYellow">Math III B</Link></div>
          </div>
          <div style={{ margin: "auto", width: "fit-content" }}><img alt="down arrow" src={ArrowDown} style={{ width: "3rem", height: "3rem" }} /></div>
          <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center" }}>
            <div style={{ borderWidth: "5px", borderStyle: "solid", color: "#4CAF50", borderRadius: "25px", padding: "2.25rem 0.5rem", width: "15rem", textAlign: "center" }} className="fillButtonGreen"><Link to="math4a" style={{ fontWeight: "500", fontSize: "1.25rem" }} className="link fillButtonGreen">Math IV A</Link></div>
            <img alt="left/right arrow" src={ArrowLeftRight} style={{ width: "3rem", height: "4rem" }} />
            <div style={{ borderWidth: "5px", borderStyle: "solid", color: "#4CAF50", borderRadius: "25px", padding: "2.25rem 0.5rem", width: "15rem", textAlign: "center" }} className="fillButtonGreen"><Link to="math4b" style={{ fontWeight: "500", fontSize: "1.25rem" }} className="link fillButtonGreen">Math IV B</Link></div>
          </div>
          <div style={{ margin: "auto", width: "fit-content" }}><img alt="down arrow" src={ArrowDown} style={{ width: "3rem", height: "3rem" }} /></div>
          <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center" }}>
            <div style={{ borderWidth: "5px", borderStyle: "solid", color: "#67aeda", borderRadius: "25px", padding: "2.25rem 0.5rem", width: "15rem", textAlign: "center" }} className="fillButtonBlue"><Link to="math5a" style={{ fontWeight: "500", fontSize: "1.25rem" }} className="link fillButtonBlue">Math V A</Link></div>
             <img alt="left/right arrow" src={ArrowLeftRight} style={{ width: "3rem", height: "4rem" }} />
            <div style={{ borderWidth: "5px", borderStyle: "solid", color: "#67aeda", borderRadius: "25px", padding: "2.25rem 0.5rem", width: "15rem", textAlign: "center" }} className="fillButtonBlue"><Link to="math5b" style={{ fontWeight: "500", fontSize: "1.25rem" }} className="link fillButtonBlue">Math V B</Link></div>
          </div>
        </div>

        <p> Students may start anywhere along the class progression if they are ready to take that class. 
        </p>

        <h2 className="text-center p-5">Learn About A Class:</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem", gap: "3rem", color: "blue"}}>
          <Link to="math1a" style={{ fontSize: "1.5rem" }} className="button"> Math I A </Link>
          <Link to="math1b" style={{ fontSize: "1.5rem" }} className="button"> Math I B </Link>
          <Link to="math2a" style={{ fontSize: "1.5rem" }} className="button"> Math II A </Link>
          <Link to="math2b" style={{ fontSize: "1.5rem" }} className="button"> Math II B </Link>
          <Link to="math3a" style={{ fontSize: "1.5rem" }} className="button"> Math III A </Link>
          <Link to="math3b" style={{ fontSize: "1.5rem" }} className="button"> Math III B </Link>
          <Link to="math4a" style={{ fontSize: "1.5rem" }} className="button"> Math IV A </Link>
          <Link to="math4b" style={{ fontSize: "1.5rem" }} className="button"> Math IV B </Link>
          <Link to="math5a" style={{ fontSize: "1.5rem" }} className="button"> Math V A </Link>
          <Link to="math5b" style={{ fontSize: "1.5rem" }} className="button"> Math V B </Link>
        </div>

        <h2 className="text-center p-5">Explore Other Tracks:</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem", marginBottom: "6rem" }}>
          <Link to="/engineering" className="button" style={{ borderRadius: "20px", padding: "1.5rem", backgroundColor: "#ffc819", color: "white", textDecoration: "none", fontSize: "1.25rem" }}> Engineering Track </Link>
          <Link to="/cs" className="button" style={{ borderRadius: "20px", padding: "1.5rem", backgroundColor: "#67aeda", color: "white", textDecoration: "none", fontSize: "1.25rem" }}> Computer Science Track </Link>
          <Link to="/science" className="button" style={{ borderRadius: "20px", padding: "1.5rem", backgroundColor: "#4CAF50", color: "white", textDecoration: "none", fontSize: "1.25rem" }}> Science Track </Link>
        </div>

      </div>
    </div>
  );
}

export default Math;

import React, { useRef } from "react";
import Course from "./Course";


const math = [
  {
    courseName: "Mathematics I",
    description1: `*Basic familiarity with 1-digit addition, subtraction, and multiplication
    *Ability to identify common 2-dimensional shapes(squares, circles, stars, etc.) *Ability to solve basic riddles using problem-solving strategies`,
    description2: `* Addition+Subtraction
    * Place Value and Rounding Numbers
    * Multiplication
    * Place Value/Rounding Numbers
    * Number Lines
    * Word Problems
    * Puzzles and Games
    * Shapes: Basic shapes and shapes in nature
    * Area and perimeter of rectangles
    * Math in Nature
    * Graphs: making and interpreting graphs
    * Math Games: Practice with past topics using math games
    *Final Project: A project where students apply their new math skills!`,
  },
  {
    courseName: "Mathematics II",
    description1: `* Comfortable with 1-digit multiplication and division
    *Ability to confidently solve problems involving addition and subtraction
    *Comfortable with majority of Math I topics
    *Ready for an introduction to operation-based topics`,
    description2: `
    *A Deeper Dive into Division and Multiplication: An exploration on how to multiply and divide larger numbers
    *Challenging Addition and Subtraction
    *Order of Operations + Exponents
    *One- and Two-Step Equations
    *Distributive Property
    *Two-step Word Problems
    *Area and perimeter of triangles and trapezoids
    *Skip Counting
    *Tesselations: Mobius Strips + Klein Bottles
    *Units of Measurements (feet, inches, cm, etc.)
    *Final Project: A project where students apply their new math skills!`
  },
  {
    courseName: "Mathematics III",
    description1: `*Comfortable with 2-digit multiplication and basic long division
    * Basic familiarity with 1-Step and 2-Step Equations
    *Comfortable with area and perimeter of basic shapes/solids
    *Comfortable with majority of Math II topics`,
    description2: `*Division Review
    *Three-digit Addition and Subtraction
    *Logic Puzzles
    *Exponents: Concept + Squaring and Cubing
    *Properties of Shapes
    *Area and perimeter of Irregular Polygons
    *Pythagorean Theorem
    *Complicated Word Problems (2+ steps)
    *Decimals
    *Units of Measurement for Volume (cups, liters, tablespoons, etc.)
    *Honeycomb Conjecture
    *Final Project: A project where students apply their new math skills!`
  },
  {
    courseName: "Mathematics IV",
    description1: `*Comfortable with multiplying and dividing decimals, fractions, and numbers
    *Able to find area and perimeter of irregular shapes
    *Comfortable with 1-Step equations, 2-Step equations, and Order of Operations
    *Comfortable with majority of topics listed in Math III
    *Ready to take on middle school level math`,
    description2: `*Exponents: rules
    *Roots and Radicals: square roots + simplifying
    *Fibonacci + Golden Ratio + Pascal Triangle
    *Volume of Complex Shapes
    *Surface Area
    *Pythagorean Theorem and its Applications
    *Cryptography
    *Divisibility Rules
    *Systems of Equations: Solving with substitutions, graphing (includes word problems)
    *Koch Snowflakes + Fractals + Absolute Value
    *Final Project: A project where students apply their new math skills!`
  },
  {
    courseName: "Mathematics V",
    description1: `*This course will equip students with the skills to be successful in math competitions such as the American Math Competition (AMC), IMLEM, and MathCounts. This class will be mostly problem-based, and our instructors will have been very successful in past math competitions. This course will be fast-paced.
    *Ability to think deeply about new, complicated concepts
    *Strong critical thinking and reasoning skills
    *Familiarity with the middle school math curriculum, and preferably has taken advanced classes throughout middle school
    *Comfortable with the majority of topics listed in Math IV
    *Ready for a fast-paced, advanced, and competitive math-based course`,
    description2: `*Trigonometry: Unit circle, radians vs. degrees, graphs of trigonometric identities, right triangle ratios, trigonometric identities, law of sines, law of cosines
    *Factoring Polynomials
    *Function Graphs and Transformations
    *Modular Arithmetic
    *Combinations and Permutations
    *Principle of Inclusion and Exclusion
    *Probability
    *Bases and Parametric Equations
    *Limits
    *Final Project: A project where students apply their new math skills.`
  }
]

function Math() {
  const math1Ref = useRef(null);
  const math2Ref = useRef(null);
  const math3Ref = useRef(null);
  const math4Ref = useRef(null);
  const math5Ref = useRef(null);

  const refs = [math1Ref, math2Ref, math3Ref, math4Ref, math5Ref];

  return (
    <div>
      <div className="text-center m-5">
        <h1>Math Track</h1>
      </div>
      <div className="container">
        <div className="mb-5">
          <p>We are offering five different mathematics courses during the fall semester. Each course teaches enrichment topics and content outside of the standard school curriculum. There is an emphasis on creative thinking, problem-solving, and competition math strategies. Each class will also feature fun brainteasers and logic puzzles. All courses will be largely problem-based, with a short lesson at the beginning. </p>
          <p style={{
            fontWeight: "bold"
          }}>Math classes have a separate fall and spring curriculum for each level. For example, we offer Math 1a in the Fall and Math 1b in the Spring.
Students from Spring 2023 should take the “a” version of the next level course. For example, if you completed Math 1b in the spring, you should proceed to Math 2a.
Students from Fall 2022 should continue with the “b” version of the course you were previously enrolled in. Since we don’t offer the b version of math courses in the fall, we recommend waiting until the spring to enroll in a math course. </p>
          <p>Please check the course descriptions and the FAQ before enrolling your child in a program. We are so excited to be able to work with your family this fall!</p>
        </div>
        <div className="main" id="math">
          <h1>Our classes are as follows: </h1>
          {/* <p><a href="#math1">Mathematics I (recommended for K-2)</a></p>
          <p><a href="#math2">Mathematics II (recommended for 2-4)</a></p>
          <p><a href="#math3">Mathematics III (recommended for 4-6)</a></p>
          <p><a href="#math4">Mathematics IV (recommended for 6-8)</a></p>
          <p><a href="#math5">Mathematics V (recommended for advanced 6-8th graders)</a></p> */}

          <p>
            <button className="btn btn-link" onClick={() => {
              math1Ref.current.scrollIntoView({ behavior: "smooth" });
            }}>Mathematics I (recommended for K-2)</button>
          </p>
          <p>
            <button className="btn btn-link" onClick={() => {
              math2Ref.current.scrollIntoView({ behavior: "smooth" });
            }}>Mathematics II (recommended for 2-4)</button>
          </p>
          <p>
            <button className="btn btn-link" onClick={() => {
              math3Ref.current.scrollIntoView({ behavior: "smooth" });
            }}>Mathematics III (recommended for 4-6)</button>
          </p>
          <p>
            <button className="btn btn-link" onClick={() => {
              math4Ref.current.scrollIntoView({ behavior: "smooth" });
            }}>Mathematics IV (recommended for 6-7)</button>
          </p>
          <p>
            <button className="btn btn-link" onClick={() => {
              math5Ref.current.scrollIntoView({ behavior: "smooth" });
            }}>Mathematics V (recommended for advanced 6-8th graders)</button>
          </p>

        </div>

        {
          math.map((courseInfo, index) => (
            <div id={`math${index + 1}`} ref={refs[index]} className="mb-3 pt-3" key={index}>
              <Course courseInfo={courseInfo} />
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default Math;

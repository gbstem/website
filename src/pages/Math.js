import React from "react";
import Course from "./Course";


const math = [
  {
    courseName: "Mathematics I",
    description1: `* Basic familiarity with 1-digit addition and subtraction, 
    *Ability to identify common 2-dimensional shapes(squares, circles, stars, etc.) *Ability to solve basic riddles using problem-solving strategies`,
    description2: `* Addition/Subtraction: A brief review on 1-digit addition and subtraction 
    * Measurements: An introduction to units and how to apply measurements in real-life
    * Tangrams: A fun shape puzzle game
    * Place Value/Rounding Numbers: An introduction to place value and rounding numbers
    * Sorting and Classifying Groups
    * Origami: A whimsical hands-on project using past mathematical knowledge
    * Magic Squares: A project involving basic arithmetic.
    * Money: An introduction to the concept of money and rates
    * Time: An introduction to the concept of time
    * Build-A-House Project: A fun designing a house project involving knowledge of area and perimeter
    * Math Games: Practice with past topics using math games`,
  },
  {
    courseName: "Mathematics II",
    description1: `* Comfortable with 1-digit multiplication and division
    *Ability to confidently solve problems involving addition and subtraction
    *Comfortable with majority of Math I topics
    *Ready for an introduction to operation-based topics`,
    description2: `
    *A Deeper Dive into Division: An exploration on how to divide larger numbers
    *Fractions: An introduction to fractions.
    *Negative Numbers: An exploration of negative numbers
    *Volume: An introduction to volume of basic solids
    *A Deeper Dive into Surface Area: A hands-on activity where students will explore surface area with real-life models
    *Exponents: An introduction to the powers of numbers
    *Exploring Infinity: An investigation on what infinity is.
    *Arithmetic Patterns: An exploration on arithmetic patterns to help problem solve.
    *Time Problems: An exploration on the correlation between time and compound interest/simple interest
    *Gardening Project: A project where students apply their math skills to create a hypothetical garden`
  },
  {
    courseName: "Mathematics III",
    description1: `*Comfortable with 2-digit multiplication and basic long division
    * Basic familiarity with 1-Step and 2-Step Equations
    *Comfortable with volume, area, and perimeter of basic shapes/solids
    *Comfortable with majority of Math II topics`,
    description2: `*Fractions and Decimals: A deeper understanding of equivalent fractions and decimals
    * Advanced Order of Operations: A more complex overview on the order of operations
    * A Deeper Dive into Volume: An exploration on finding the volumes of more complex solids, such as a cylinder, sphere, and cone
    *Baking Project: A project to introduce measurements, fractions, decimals, and volume in a real life application
    *Statistics: A basic introduction to statistics
    * Coordinate Plane: An introduction to the coordinate plane and how to graph on it
    * Plane Figures: A lesson on how to graph plane figures on the coordinate plane
    * Learning to Estimate Your Answer: A lesson on how to quickly estimate an answer, and its application on tests
    * Angles in Standard Polygons: A discovery on how to derive angles
    * Fold and Cut Theorem`
  },
  {
    courseName: "Mathematics IV",
    description1: `*Comfortable with multiplying and dividing decimals, fractions, and numbers
    *  Able to find area and perimeter of irregular shapes
    * Comfortable with 1-Step equations, 2-Step equations, and Order of Operations
    *Comfortable with majority of topics listed in Math III
    * Ready to take on middle school level math`,
    description2: `*Graphing Functions: A discovery on how to graph linear functions and circles
    *Geometric Transformations: An exploration on how to transform geometric figures
    *Art with Math: An art project involving graphical skills
    * Angles: An introduction to angles
    * Inequalities: A discovery on how to graph inequalities
    *Ratios, Rates, Percentages: An introduction to ratios, rates, and percentages and their real-life application
    *What is Pi: An exploration on what pi is
    *Tessellations: An discovery of tessellations
    * Distance, Time, Speed: An understanding of the relationship between these factors
    * Properties of Numbers: An exploration of LCM and GCF
    * Negative Number Operations: An introduction to operations involving negative numbers`
  },
  {
    courseName: "Mathematics V",
    description1: `*Ability to think deeply about new, complicated concepts
    * Strong critical thinking and reasoning skills
    *Familiarity with the middle school math curriculum, and preferably has taken advanced classes throughout middle school
    * Comfortable with the majority of topics listed in Math IV
    * Ready for a fast-paced, advanced, and competitive math-based course`,
    description2: `*Exponents and Logarithms: An introduction to exponents, simplifying radical expressions, rationalizing denominators, and logarithms
    *Complex Numbers: An exploration of complex numbers and operations involving complex numbers
    * Linear and Quadratic Equations: An understanding of what linear and quadratic equations are
    *Proportions: An introduction to direct and inverse relationships and manipulating proportions
    *Using the Integers: An exploration of modular arithmetic, divisibility tricks, and prime numbers
    *What Numbers Really Are: An understanding of the difference between types of numbers
    * Special Factorizations and Clever Manipulations: A discovery on how to cleverly manipulate numbers
    * Geometry: A mathematical understanding of shapes and functions
    *Advanced Functions: A deeper dive on graphing functions and transformations
    *Sequences and Series: A discovery of arithmetic series, geometric series, and infinite series
    *Statistics and Probability: An exploration of the applications of statistics and probability in the real world`
  }
]

function Math() {
  return (
    <div>
      <div className="text-center m-5">
        <h1>Math Track</h1>
      </div>
      <div className="container">
        <div className="mb-5">
          <p>We are offering five different mathematics courses during the spring semester. Each course teaches enrichment topics and content outside of the standard school curriculum. There is an emphasis on creative thinking, problem-solving, and competition math strategies. Each class will also feature fun brainteasers and logic puzzles. All courses will be largely problem-based, with a short lesson at the beginning. </p>
          <p style={{
            fontWeight: "bold"
          }}>Each math course is broken down into two semesters with different content. If you child was enrolled for a math course during the Fall semester, they should enroll in a second semester of that same course during Spring. All of the course descriptions have been updated. </p>
          <p>Please check the course descriptions and the FAQ before enrolling your child in a program. We are so excited to be able to work with your family this fall!</p>
        </div>
        <div className="main" id="math">
          <h1>Our classes are as follows: </h1>
          <p><a href="#math1">Mathematics I (recommended for K-2)</a></p>
          <p><a href="#math2">Mathematics II (recommended for 2-4)</a></p>
          <p><a href="#math3">Mathematics III (recommended for 4-6)</a></p>
          <p><a href="#math4">Mathematics IV (recommended for 6-8)</a></p>
          <p><a href="#math5">Mathematics V (recommended for advanced 6-8th graders)</a></p>
        </div>

        {
          math.map((courseInfo, index) => (
            <div id={`math${index + 1}`} className="mb-5" key={index}>
              <Course courseInfo={courseInfo} />
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default Math;
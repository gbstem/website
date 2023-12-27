
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Math V Spring Semester";
const classTitle = "MA 502";
const color = "#cccccc";
const returnLink = "/math";
const description = " This course will equip students with the skills to be successful in math competitions such as the American Math Competition (AMC), IMLEM, and MathCounts. It teaches strategies for factoring polynomials, permutations and combinations, the Principle of Inclusion and Exclusion, and more. This class will be mostly problem-based. Instructors of this course possess deep experience in past math competitions. This course will be fast-paced, so be sure your child is ready for it before enrolling.";
const prerequisites = "Students taking this class are required to have access to a graphing calculator. They must be comfortable with the majority of topics listed in Math IV, and be ready for a fast-paced and advanced course. This course relies strongly on the student's ability to apply critical thinking and reasoning skills to unfamiliar and complex concepts."
const slides = [];
const slideCaptions = [];
const modules = ['Exponents and Logarithms', 
    'Complex Numbers',
    'Linear and Quadratic Equations',
    'Proportions',
    'Large Integers in Competition Math',
    'What Makes Up Numbers',
    'Midterm Project',
    'Geometric Shapes and Diagrams',
    'Applications of Statistics and Probability',
    'Advanced Functions',
    'Sequences and Series',
    'Final Project']
const gradeRange = "6-8";
const onlineOnly = true;
const includeExampleProjects = false;

const Math5B = () => {
    return (
      <ClassPage 
        title = {title} 
        classTitle = {classTitle}
        color = {color} 
        trackPage = {returnLink} 
        description = {description} 
        prerequisites = {prerequisites} 
        slides = {slides} 
        slideCaptions = {slideCaptions} 
        modules = {modules} 
        gradeRange = {gradeRange} 
        online = {onlineOnly}
        includeExampleProjects={includeExampleProjects}/>
    );
}

export default Math5B;

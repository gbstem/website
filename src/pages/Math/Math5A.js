
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Math V Fall Semester";
const classTitle = "MA 501";
const color = "#cccccc";
const returnLink = "/math";
const description = " This course will equip students with the skills to be successful in math competitions such as the American Math Competition (AMC), IMLEM, and MathCounts. It teaches strategies for factoring polynomials, permutations and combinations, the Principle of Inclusion and Exclusion, and more. This class will be mostly problem-based. Instructors of this course possess deep experience in past math competitions. This course will be fast-paced, so be sure your child is ready for it before enrolling.";
const prerequisites = `Students taking this class are required to have access to a graphing calculator. They must be comfortable with the majority of topics listed in Math IV, and be ready for a fast-paced and advanced course. This course relies strongly on the student's ability to apply critical thinking and reasoning skills to unfamiliar and complex concepts.`
const slides = [];
const slideCaptions = [];
const modules = ['Trigonometry Part 1', 
    'Trigonometry Part 2',
    'Factoring Polynomials',
    'Function Graphs and Transformations',
    'Modular Arithmetic',
    'Review',
    'Permutations and Combinations',
    'Principle of Inclusion and Exclusion',
    'Probability and Pascal’s Triangle',
    'Roman Numerals and Bases',
    'Limits and Tricky Problems',
    'Review and AMC 8',
    'Final Project']
const gradeRange = "6-8";
const onlineOnly = true;
const includeExampleProjects = false;

const Math5A = () => {
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

export default Math5A;

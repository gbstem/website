
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Math III Fall Semester";
const classTitle = "MA 301";
const color = "#cccccc";
const returnLink = "/math";
const description = "Math III begins building the foundations of algebra. After solidifying their multiplication and division skills, students will begin solving algebraic equations and more complicated word problems. Math III will also introduce more advanced decimal and fraction concepts, and area, perimeter, and volume for complex shapes. This will be a somewhat faster-paced course than Math II, so each student is ensured to receive lots of individualized support.";
const prerequisites = "Students taking this class should be comfortable with the majority of topics covered in Math II, especially 2-digit multiplication, basic long division, area and perimeter of basic shapes and solids, and 1-Step and 2-Step equations.";
const slides = [];
const slideCaptions = [];
const modules = ['Division Review', 
    '3-Digit Addition and Subtraction',
    'Logic Puzzles',
    'Exponents: Squares and Cubes',
    'Properties of Shapes',
    'Area and Perimeter of Irregular Polygons',
    'Review',
    'Introduction to the Pythagorean Theorem',
    'Complex Multi-Step Word Problems',
    'Decimals',
    'Volumetric Units of Measurement',
    'Honeycomb Conjecture and Math Games',
    'Final Project']
const gradeRange = "3-5";
const onlineOnly = true;
const includeExampleProjects = false;

const Math3A = () => {
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

export default Math3A;

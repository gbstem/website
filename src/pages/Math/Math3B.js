
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Math III Spring Semester";
const classTitle = "MA 302";
const color = "#cccccc";
const returnLink = "/math";
const description = "Math III begins building the foundations of algebra. After solidifying their multiplication and division skills, students will begin solving algebraic equations and more complicated word problems. Math III will also introduce more advanced decimal and fraction concepts, and area, perimeter, and volume for complex shapes. This will be a somewhat faster-paced course than Math II, so each student is ensured to receive lots of individualized support.";
const prerequisites = "Students taking this class should be comfortable with the majority of topics covered in Math II, especially 2-digit multiplication, basic long division, area and perimeter of basic shapes and solids, and 1-Step and 2-Step equations.";
const slides = [];
const slideCaptions = [];
const modules = ['Fractions and Decimals', 
    'Advanced Order of Operations',
    'Volume Deep Dive: Spheres, Cylinders, and More',
    'Baking Project: Fractions, Decimals, and Volume',
    'Powers of 10',
    'Statistics',
    'Review',
    'The Coordinate Plane',
    'Plane Figures',
    'Estimating Answers',
    'Angles in Standard Polygons',
    'Final Project']
const gradeRange = "3-5";
const onlineOnly = true;
const includeExampleProjects = false;

const Math3B = () => {
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

export default Math3B;

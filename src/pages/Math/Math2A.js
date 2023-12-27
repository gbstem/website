
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Math II Fall Semester";
const classTitle = "MA 201";
const color = "#cccccc";
const returnLink = "/math";
const description = "Math II builds on topics learned in Math I to teach more advanced concepts with a focus on operation-based topics, such as multiplication and division of larger numbers, area and perimeter of non-rectangular shapes, fractions, and negative numbers. Since most of the students are young, the course continues to be slower-paced, with lots of individualized time for each student.";
const prerequisites = "Students taking this class should be comfortable with the majority of topics covered in Math I, especially single-digit multiplication and division and solving problems involving addition and subtraction.";
const slides = [];
const slideCaptions = [];
const modules = ['Multiplication and Division', 
    'Challenging Addition and Subtraction',
    'Order of Operations',
    'One-Step and Two-Step Equations',
    'Two-Step Equations and the Distributive Property',
    'Word Problems Requiring Multiple Operations',
    'Review',
    'Area and Perimeter of Triangles and Trapezoids',
    'Skip Counting and Tessellation',
    'Tessellations, Mobius Strips, and Klein Bottles',
    'Length-Based Units of Measurement',
    'Math Games',
    'Final Project']
const gradeRange = "2-4";
const onlineOnly = true;
const includeExampleProjects = false;

const Math2A = () => {
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

export default Math2A;

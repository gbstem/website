
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Math II Spring Semester";
const classTitle = "MA 202";
const color = "#cccccc";
const returnLink = "/math";
const description = "Math II builds on topics learned in Math I to teach more advanced concepts with a focus on operation-based topics, such as multiplication and division of larger numbers, area and perimeter of non-rectangular shapes, fractions, and negative numbers. Since most of the students are young, the course continues to be slower-paced, with lots of individualized time for each student.";
const prerequisites = "Students taking this class should be comfortable with the majority of topics covered in Math I, especially single-digit multiplication and division and solving problems involving addition and subtraction.";
const slides = [];
const slideCaptions = [];
const modules = ['A Deeper Dive into Division', 
    'Fractions',
    'Negative Numbers',
    'Volume',
    'Surface Area',
    'Exponents',
    'Review',
    'Exploring Infinity',
    'Arithmetic Patterns and Problem Solving',
    'Problems of Time',
    'Design-A-Garden Project',
    'Final Project']
const gradeRange = "2-4";
const onlineOnly = true;
const includeExampleProjects = false;

const Math2B = () => {
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

export default Math2B;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Python 1";
const classTitle = "PY 101";
const color = "#67aeda";
const returnLink = "/cs";
const description = "Python 1 is a comprehensive introductory course in Python. Students begin by translating Scratch-like block-based code to Python to gain familiarity with text-based coding. Students then learn to use the Turtle visual library before diving into computer science fundamentals such as variables, if-statements, and for-loops through fun and engaging projects like Guess My Number and MadLibs. Students then extend these skills with explorations in arrays and functions. The course ends with a final two-week project and a discussion of programming in the real world, including an introduction to AI.";
const prerequisites = "Offered every term. Prerequisite: Scratch 1.";
const slides = [process.env.PUBLIC_URL+'/cs/Python2.png', process.env.PUBLIC_URL+ '/cs/Python.png'];
const slideCaptions = ['Liam, Grade 6','Adam, Grade 8'];
const modules = ['Introductory programming fundamentals', 'Draw a snowflake', 'MadLibs', 'Guess My Number', 'If-statements and loops', 'Functions', 'Lists and arrays', 'Final Project'];
const gradeRange = "6-8";
const onlineOnly = true;
const includeExampleProjects = true;

const PythonI = () => {
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

export default PythonI;

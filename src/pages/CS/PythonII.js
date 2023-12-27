
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Python II";
const classTitle = "PY 201";
const color = "#67aeda";
const returnLink = "/cs";
const description = "Our Python II course builds upon the skills taught in the introductory Python course to cover different applications of Python. Through project-based learning, students will dive deeper into Python programming by working on projects, and collaborating with students in their class. These projects will help build a robust base for future exploration of Python application, such as Object-Oriented Programming, more complex algorithms, and the using Machine Learning models in Python.";
const prerequisites = "Students taking this class are required either to have previous coding experience. They are strongly recommended to have taken Python I previously, or possess a similarly robust understanding of Python programming.";
const slides = [];
const slideCaptions = [];
const modules = ['Python Programming Review', 'Object-Oriented Programming', 'Algorithms', 'Machine Learning and Data Science in Python','Final Project'];
const gradeRange = "6-8";
const onlineOnly = true;
const includeExampleProjects = false;

const PythonII = () => {
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

export default PythonII;

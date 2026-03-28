
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Python 2";
const classTitle = "PY 201";
const color = "#67aeda";
const returnLink = "/cs";
const description = "Python 2 is a 14-lesson interactive course for students with prior Python experience, such as Python 1. Classes meet weekly for an hour, with little to no work required outside of class. Students reinforce basics as well as learn functions, collection data types, and nested iteration. Students also create customizable projects and games, including a simple calculator, a shopping game, and Tic-Tac-Toe, before concluding with an original final project. Lessons use teacher-led demonstrations, games, and regular projects to build strong mastery of each concept.";
const prerequisites = "Offered every term. Prerequisite: Python 1.";
const slides = [];
const slideCaptions = [];
const modules = ['Loops, functions, and lists review', 'Other data types', 'Classes', 'Libraries', 'Recursion', 'Final Project'];
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

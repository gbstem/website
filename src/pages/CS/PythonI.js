import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Python I";
const classTitle = "PY 101";
const color = "#67aeda";
const returnLink = "/cs";
const description = "This course will cover the fundamentals of Python and will serve as an introduction to text-based languages. Through project-based learning, students learn valuable programming skills by working on mini-projects, often collaborating with students in their class. These projects serve the purpose of developing skills in programming logic, including understanding of common algorithms like \"finding the largest number\" and \"summing all numbers in a list\". Projects in this course include hangman, tic-tac-toe, rock-paper-scissors, and a shopping game.";
const prerequisites = "Students taking this class are required either to fall in the 6th-8th grade range or to have high math proficiency or sufficient previous experience with another language such as Scratch.";
const slides = [process.env.PUBLIC_URL+'/cs/Python2.png', process.env.PUBLIC_URL+ '/cs/Python.png'];
const slideCaptions = ['Liam, Grade 6','Adam, Grade 8'];
const modules = ['Introduction to Python', 'Variables and Data Types', 'If-Else Statements', 'String Methods', 'Functions', 'While Loops', 'For Loops', 'Lists', '2D Arrays and Nested Iteration', 'Dictionaries', 'Using Python Libraries', 'Final Project'];
const gradeRange = "3-7";
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

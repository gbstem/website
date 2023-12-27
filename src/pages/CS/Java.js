import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Java";
const classTitle = "JAV 101";
const color = "#67aeda";
const returnLink = "/cs";
const description = "Our introductory Java course provides students with a strong foundation in one of the most popular programming languages today. It approaches Java with an in-depth focus on object-oriented programming, giving students a true understanding of how the internal structures of Java function. Through projects and games like Mastermind as well as thorough coverage of foundational computer science topics such as data structures and algorithms, this course will set students well on their way to becoming skilled programmeres.";
const prerequisites = "Students taking this class are required to have previous text-based programming experience or a very strong foundation in math through operations with decimals, fractions, and negative numbers.";
const slides = [process.env.PUBLIC_URL+'/cs/Screenshot (99).png', process.env.PUBLIC_URL+ '/cs/Java1.png', process.env.PUBLIC_URL+ '/cs/Java2.png'];
const slideCaptions = ['Yuen Kai, Grade 8', 'Yuen Kai, Grade 8', 'Yuen Kai, Grade 8'];
const modules = ['Java Basics', 'Loops', 'Arrays', 'Classes', 'Methods/Functions', 'Methods in Classes', 'ArrayLists', 'Strings', 'Recursion and Graphics', 'Data Structures', 'Object-Oriented Programming In-Depth', 'Final Project'];
const gradeRange = "6-8";
const onlineOnly = true;
const includeExampleProjects = true;

const Java = () => {
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

export default Java;

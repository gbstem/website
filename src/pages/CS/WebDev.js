
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Web Development";
const classTitle = "WEB 101";
const color = "#67aeda";
const returnLink = "/cs";
const description = "This course teaches the basics of design and user-facing applications of programming. Students will learn the fundamentals of website development using vanilla HTML, CSS, and JavaScript. They will explore various tools, vocabulary, and components used in the field and learn how each element functions together in a fully functional web application. By creating landing pages, photography sites, and personal portfolios, students will become familiar with all the skills necessary to build any web project on their own.";
const prerequisites = "Students taking this class are required either to fall in the 6th-8th grade range or to have high math proficiency or sufficient previous experience with another language such as Scratch.";
const slides = [];
const slideCaptions = [];
const modules = ['Introduction to HTML', 'HTML Continued', 'Introduction to CSS', 'CSS Continued', 'Introduction to JavaScript', 'JavaScript Continued', 'DOM Manipulation', 'HTML Form Elements', 'Final Project'];
const gradeRange = "6-8";
const onlineOnly = true;
const includeExampleProjects = false;

const WebDev = () => {
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

export default WebDev;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Web";
const classTitle = "WEB 101";
const color = "#67aeda";
const returnLink = "/cs";
const description = "Our introductory Web Development course is recommended for students who have completed Python 1 and Python 2 (or have a comparable background in CS) and are interested in user-facing applications of programming and UX design. The course covers the fundamentals of modern websites and web apps using tools such as JavaScript and React. Through projects like landing pages, to-do list apps, and more, students build the skills needed to create web projects independently.";
const prerequisites = "Offered every term. Prerequisite: Python 2.";
const slides = [];
const slideCaptions = [];
const modules = ['Introduction to Web Development', 'HTML', 'CSS', 'JavaScript', 'React', 'State management', 'UI design', 'Forms', 'Overview of modern tooling', 'Final Project'];
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

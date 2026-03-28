import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Python 3";
const classTitle = "PY 301";
const color = "#67aeda";
const returnLink = "/cs";
const description = "Python 3 introduces students to software development workflows and algorithmic problem solving through larger Python projects and collaborative coding practices.";
const prerequisites = "Offered according to instructor availability and student interest. Prerequisite: Python 2.";
const slides = [];
const slideCaptions = [];
const modules = ['Introductory software development practices', 'Algorithm design and problem solving', 'Code organization and collaboration', 'Final Project'];
const gradeRange = "6-8";
const onlineOnly = true;
const includeExampleProjects = false;

const PythonIII = () => {
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

export default PythonIII;

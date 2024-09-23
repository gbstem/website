
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Math I Spring Semester";
const classTitle = "MA 102";
const color = "#cccccc";
const returnLink = "/math";
const description = "Math I is designed to provide a gentle introduction to basic math and critical thinking concepts. Students will use their creative thinking skills to solve word problems, puzzles, and complete team challenges. We will also practice our addition and multiplication skills and observe instances of math in nature.";
const prerequisites = "Students taking this class should possess a basic familiarity with 1-digit addition, subtraction, and multiplication, be able to identify common 2-dimensional shapes(squares, circles, stars, etc), and be ready to solve basic riddles using problem-solving strategies.";
const slides = [];
const slideCaptions = [];
const modules = ['Review of Addition and Subtraction', 
    'Measurements',
    'Tangrams',
    'Sorting and Classifying Groups',
    'Origami',
    'Magic Squares',
    'Review',
    'Concepts in Money',
    'Introduction to Time',
    'Money and Time',
    'Build-A-House Project',
    'Final Project']
const gradeRange = "1-3";
const onlineOnly = true;
const includeExampleProjects = false;

const Math1B = () => {
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

export default Math1B;

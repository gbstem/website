
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Math IV Spring Semester";
const classTitle = "MA 402";
const color = "#cccccc";
const returnLink = "/math";
const description = "Math IV aims to build a comprehensive grasp of middle-school mathematics. Students will learn how to solve simultaneous equations, how to work with radicals and exponents, and learn to apply the Pythagorean theorem. This will be a faster-paced course, so each student is ensured to receive lots of individualized support.";
const prerequisites = "Students taking this class are required to have access to a calculator and must be ready to take on middle-school level math. They should be comfortable with the majority of topic covered in Math III, including multiplying and dividing decimals and fractions, finding area and perimeter of irregular shapes, and solving 2-step equations using the correct Order of Operations.";
const slides = [];
const slideCaptions = [];
const modules = ['Graphing Functions', 
    'Geometric Transformations',
    'Picture Project: Desmos Graphing',
    'Complementary and Supplementary Angles',
    'Inequalities',
    'Ratios, Rates, and Percentages',
    'Review',
    'An Exploration of Pi',
    'Complex Tessellations',
    'Distance, Time, and Speed Word Problems',
    'Properties of Numbers',
    'Final Project']
const gradeRange = "4-8";
const onlineOnly = true;
const includeExampleProjects = false;

const Math4B = () => {
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

export default Math4B;

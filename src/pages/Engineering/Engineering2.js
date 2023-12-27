
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Engineering II";
const classTitle = "ENG 201";
const color = "#ffd809";
const returnLink = "/engineering";
const description = "This higher-level course is for students with strong critical thinking skills and mathematical ability. In Engineering 2, students will take a deeper dive into topics covered in Engineering 1. Guided by the engineering design process, they will engage in design challenges that will encourage them to come up with creative solutions to problems. Through projects such as designing paper airplanes and thermal flasks, they will explore how scientific principles can be applied to maximize the effectiveness of their solutions. Along the way, they will utilize tools and strategies used by real engineers, including 3D modeling and biomimicry. Students will also have the chance to examine the vital role engineering plays in dealing with pressing real-world issues such as the climate crisis. By the end of the course, students will have become capable problem-solvers, equipped with the skills they need to develop an innovative solution to a problem of their own choice.";
const prerequisites = "Students taking this class must be comfortable calculating volume, area, and perimeter of various shapes and solids, creating and analyzing different types of graphs and charts, and performing ratioed unit conversions.";
const slides = [process.env.PUBLIC_URL+'/engineering/eng1.png', process.env.PUBLIC_URL+ '/engineering/eng2.png'];
const slideCaptions = ['Engineering 2 Student','Engineering 2 Student'];
const modules = ['The Basics of Engineering', 'Wind Tunnels', 'Data Analysis and Graphing', 'Biomimicry', 'Technical Drawing', 'Thermodynamics', 'Final Project'];
const gradeRange = "6-8";
const onlineOnly = true;
const includeExampleProjects = true;

const Engineering2 = () => {
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

export default Engineering2;

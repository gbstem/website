
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Engineering I";
const classTitle = "ENG 101";
const color = "#ffd809";
const returnLink = "/engineering";
const description = "This course is an introduction for any student who is excited about engineering and motivated to stretch their problem-solving skills. In Engineering I, students will enhance their problem-solving and creativity skills. Students will learn the engineering design process and put it into action. This class involves many projects such as building parachutes and water filters that will enrich the student's critical thinking skills. At the end of the semester, students will be asked to create a final project that will showcase all the skills they have learned throughout the class. They will choose a problem and come up with a solution to then share with the class.";
const prerequisites = "Students taking this class must be able to do math operations with decimals and fractions, calculate area and perimeter of rectangles, and measure distances and lengths with a ruler`";
const slides = [process.env.PUBLIC_URL+'/engineering/eng3.jpg', process.env.PUBLIC_URL+ '/engineering/eng4.png'];
const slideCaptions = ['Engineering 1 Student','Engineering 1 Student'];
const modules = ['Introduction to Engineering', 'Paper Structures', 'Paper Airplanes', 'Parachutes', 'Organizer', 'Catapult', 'Friction Racing', 'Rube Goldberg Machine', 'Paper Boats','Bridges','Final Project' ];
const gradeRange = "3-5";
const onlineOnly = true;
const includeExampleProjects = true;

const Engineering1 = () => {
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

export default Engineering1;

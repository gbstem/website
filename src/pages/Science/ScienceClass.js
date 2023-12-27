import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Environmental Science I";
const classTitle = "SCI 101";
const color = "#5CBF60";
const returnLink = "/science";
const description = "Environmental Science is for anyone who is passionate about or wants to learn more about environmental issues and design forward-thinking solutions. In the course, students will examine the impact humans have had on the climate, the oceans, and forests using critical thinking. This course will revolve around the idea of cause and effect as it pertains to prevalent environmental issues, and students will be asked both to learn about the effects humanity has had upon the environment and to utilize their creativity to analyze current solutions and brainstorm their own ideas. This course will combine comprehensive lessons with hands-on, project-based learning to allow students to both learn about a wide range of topics and gain personal experience working with some. In addition to projects that accompany units of the course, students will create and present a final project to cap off their learning during this course."
const prerequisites = "Students taking this class will need to be able to calculate the acrea and circumference of a circle, fill in basic equations with given information, and do basic graphing.";
const slides = [process.env.PUBLIC_URL+'/science/science1.jpg', process.env.PUBLIC_URL+ '/science/science1.svg'];
const slideCaptions = ['', ''];
const modules = ['Climate Change', 'Plastic and the Oceans', 'Deforestation and Forest Fires'];
const gradeRange = "K-5";
const onlineOnly = true;
const includeExampleProjects = true;


function Science() {
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

export default Science;
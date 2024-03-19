import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Environmental Science I";
const classTitle = "SCI 101";
const color = "#5CBF60";
const returnLink = "/science";
const description = "Do you like learning the science behind the natural world around you? Are you curious about how humans and the environment impact each other? In Environmental Science, we’ll examine just that: the relationship between humans and the climate, oceans, forests, and much more. This course will revolve around the idea of cause and effect in today’s environmental issues, and students will be asked to utilize their creativity to think about these issues scientifically, analyze current solutions, and brainstorm their own ideas. This course will combine comprehensive lessons with hands-on, project-based learning to allow students to both learn about a wide range of topics and gain personal experience working with some. In addition to projects that accompany units of the course, students will create and present a final project to cap off their learning during this course."
const prerequisites = "We recommend this course for anyone who is passionate about or wants to learn more about environmental issues and design forward-thinking solutions. Students taking this course should be comfortable with basic graphing and be able to read and understand simple equations.";
const slides = [process.env.PUBLIC_URL+'/science/coral.jpeg', process.env.PUBLIC_URL+ '/science/oxbow.jpg', process.env.PUBLIC_URL + './science/snail.jpg'];
const slideCaptions = ['', '', ''];
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
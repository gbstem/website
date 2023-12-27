
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Engineering III";
const classTitle = "ENG 301";
const color = "#ffd809";
const returnLink = "/engineering";
const description = "Following the prerequisite courses, Engineering I and II, Engineering III introduces students to concepts in biomedical and mechanical engineering, as well as basic statistical analysis methods. This curriculum involves four outstanding projects, which will require knowledge from the Engineering II course and the understanding of more advanced topics. These projects and lessons will give students the opportunity to design a prototype for a prosthetic arm, a ferris wheel, and other appliances. This advanced course will teach students the more real-world practices of engineering, and the additional math and science behind the designing.";
const prerequisites = "Students are required to have completed Engineering II to enroll in this course.";
const slides = [];
const slideCaptions = [];
const modules = ['Introduction and Review', 'Data Analysis + Mechanical Engineering', 'Prosthetic Hand', 'Sustainable Building', 'Final Project'];
const gradeRange = "6-8";
const onlineOnly = true;
const includeExampleProjects = false;

const Engineering3 = () => {
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

export default Engineering3;

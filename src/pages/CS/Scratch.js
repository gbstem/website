
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Scratch";
const classTitle = "SC 101";
const color = "#67aeda";
const returnLink = "/cs";
const description = "Ideal for students who have no coding experience, this class will provide a strong foundation to simple programming logic through hands-on activites and games. Through interactive group work, students engage in team problem-solving, developing skills in both collaboration and comuter science. This course will go in depth to all the Scratch functions and will equip students with the skills necessary to make projects on their own. Key projects in this course include a guess my number game (with sensing), a maze game, choose your own adventure game.";
const prerequisites = "Students taking this class are required to have basic proficiency in using a computer. They do not need any prior coding experience to take this class. If a student is the recommended age for Scratch but has experience with coding and is proficient at math, Python I is also a possibile class to take.";
const slides = [process.env.PUBLIC_URL + '/cs/Screenshot (87).png', process.env.PUBLIC_URL + '/cs/Screenshot (100).png', process.env.PUBLIC_URL + '/cs/Screenshot (90).png'];
const slideCaptions = ['Ana, Grade 3', 'Emma and Jacob, Grade 2', 'Hee-Seo, Grade 4'];
const modules = ['Scratch environment (website overview)',
    'Motion (coordinate plane overview)',
    'Looks and Sounds',
    'Loops and Control Blocks',
    'Conditionals with Sensing',
    'Conditionals with Operators and Variables',
    'Clones and Broadcasting',
    'Refining Code',
    'Final Project'];
const gradeRange = "1-6";
const onlineOnly = false;
const includeExampleProjects = true;

const Scratch = () => {
    return (
        <ClassPage 
            title={title} 
            classTitle={classTitle} 
            color={color} 
            trackPage={returnLink} 
            description={description} 
            prerequisites={prerequisites} 
            slides={slides} 
            slideCaptions={slideCaptions} 
            modules={modules} 
            gradeRange={gradeRange} 
            online={onlineOnly} 
            includeExampleProjects={includeExampleProjects} />
    );
}

export default Scratch;

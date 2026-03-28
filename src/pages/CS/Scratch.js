
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Scratch 1";
const classTitle = "SC 101";
const color = "#67aeda";
const returnLink = "/cs";
const description = "Scratch 1 is an introductory Scratch course meant to teach the fundamentals of programming in Scratch as well as programming in general. We start from the very basics of how to create elements in a project (sprites and backdrops) before moving onto a variety of programming concepts including loops, variables, conditionals, and more. At the end of the semester, students work for two weeks to create a final project demonstrating everything that they have learned.";
const prerequisites = "Offered every term. Introductory block-based scripting course. No prior coding experience required; students should have basic computer proficiency.";
const slides = [process.env.PUBLIC_URL + '/cs/Screenshot (87).png', process.env.PUBLIC_URL + '/cs/Screenshot (100).png', process.env.PUBLIC_URL + '/cs/Screenshot (90).png'];
const slideCaptions = ['Ana, Grade 3', 'Emma and Jacob, Grade 2', 'Hee-Seo, Grade 4'];
const modules = ['Scratch environment',
    'Looks and sound blocks',
    'Loops and animations',
    'Conditionals',
    'Variables',
    'Clones',
    'UI design',
    'Final Project'];
const gradeRange = "2-5";
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

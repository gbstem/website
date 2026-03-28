import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Scratch 3";
const classTitle = "SC 301";
const color = "#67aeda";
const returnLink = "/cs";
const description = "Scratch 3 is a project-based exploration course in Scratch where students design and build larger original projects that integrate the core concepts learned in previous Scratch classes.";
const prerequisites = "Offered in fall terms. Prerequisite: Scratch 1.";
const slides = [];
const slideCaptions = [];
const modules = ['Project ideation and planning', 'Advanced project architecture', 'Interactive systems and polish', 'Milestone development', 'Testing and iteration', 'Final Project'];
const gradeRange = "4-6";
const onlineOnly = false;
const includeExampleProjects = false;

const Scratch3 = () => {
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

export default Scratch3;

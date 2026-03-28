import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassPage from '../ClassPage';

const title = "Scratch 2";
const classTitle = "SC 201";
const color = "#67aeda";
const returnLink = "/cs";
const description = "Scratch 2 moves beyond the basics of Scratch 1 to explore intermediate and advanced programming concepts. We cover game design, interactive storytelling, and creative projects, and students learn broadcasting for sprite communication, cloning to manage multiple objects, and custom blocks for cleaner code. The curriculum emphasizes game mechanics and physics, including collision detection, gravity, bouncing, and infinite scrolling, to bring projects to life. The course culminates in final projects where students apply everything they have learned to create games, animations, stories, or other original ideas.";
const prerequisites = "Offered in spring terms. Prerequisite: Scratch 1.";
const slides = [];
const slideCaptions = [];
const modules = ['Clones review', 'Broadcasting', 'Operators', 'User input', 'Advanced variables', 'Math in Scratch', 'Custom blocks', 'Game design', 'Final Project'];
const gradeRange = "4-6";
const onlineOnly = false;
const includeExampleProjects = false;

const Scratch2 = () => {
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

export default Scratch2;

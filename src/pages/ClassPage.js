
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slideshow from '../Components/Slideshow';
import { Link } from "react-router-dom";

const ClassPage = (props) => {
    let moduleNum = 0;
    return (
        <div>
            <main>
                <div style={{ backgroundColor: `${props.color}` }} className="text-center p-5">
                    <h1>{props.title}</h1>
                    <h3 style={{ fontWeight: "200" }}>{props.classTitle}</h3>
                </div>
                <div id="cs">
                    <div style={{ backgroundColor: "#f2f2f2", paddingTop: "1rem", paddingBottom: "0.25rem" }}>
                        <div className="container">
                            <ul style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", color: "rgb(29, 34, 86)" }}>
                                <li>16 Weeks</li>
                                <li>32 Classes</li>
                                <li>{props.online === true ? "Online Lessons" : "Online And In-Person Classes Offered"}</li>
                                <li>Recommended for grades {props.gradeRange}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div style={{ paddingTop: "3rem" }}>
                            <h2 className="text-center p-3">Course Description</h2>
                            <p>{props.description}</p>
                        </div>
                        <div style={{ paddingBottom: "2rem" }}>
                            <h2 className="text-center p-3">Prerequisites</h2>
                            <p>{props.prerequisites}</p>
                        </div>
                        <h2 className="text-center p-3">Syllabus</h2>
                        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                            {props.modules.map((module) => {
                                moduleNum = moduleNum + 1;
                                return (<li style={{ borderWidth: "1px", borderColor: "rgb(29, 34, 86)", borderStyle: "solid", padding: "1rem", marginTop: "1rem" }}><b>Module {moduleNum}: </b>{module}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="text-center p-5" style={{ marginTop: "3rem" }}>
                        <h2>{props.includeExampleProjects ? "Example Projects and Materials" : ""}</h2>
                    </div>
                    <div style={props.includeExampleProjects ? { height: "30rem", marginBottom: "5rem" } : { marginBottom: "-10rem" }}><Slideshow slides={props.slides} captions={props.slideCaptions} imageStyling={{ height: "30rem", width: "auto", objectFit: "cover" }} captionStyling={{ textAlign: "center", fontSize: "1.125rem", fontStyle: "italic" }} /></div>
                    <div className="button" style={{ margin: "auto", width: "fit-content", marginTop: "7rem", marginBottom: "2rem" }}><Link to="https://portal.gbstem.org/signup" className="btn btn-primary">Register For This Class</Link></div>
                    <div style={{ margin: "auto", width: "fit-content", marginBottom: "7rem", color: "blue" }}>
                        <Link to={props.trackPage}>Back To Courses Page</Link>
                    </div>
                </div>
            </main>
        </div >
    );
}

export default ClassPage;

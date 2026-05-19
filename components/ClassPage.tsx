import React from 'react';
import Link from 'next/link';
import Slideshow from '@/components/Slideshow';

interface ClassPageProps {
  title: string;
  classTitle: string;
  color: string;
  online: boolean;
  gradeRange: string;
  description: string;
  prerequisites: string;
  modules: string[];
  includeExampleProjects?: boolean;
  slides?: string[];
  slideCaptions?: string[];
  trackPage: string;
}

export default function ClassPage(props: ClassPageProps) {
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
              <ul style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", color: "rgb(29, 34, 86)", listStyle: "none" }}>
                <li>16 Weeks</li>
                <li>16 Classes</li>
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
              {props.modules.map((module, index) => (
                <li key={index} style={{ borderWidth: "1px", borderColor: "rgb(29, 34, 86)", borderStyle: "solid", padding: "1rem", marginTop: "1rem" }}>
                  <b>Module {index + 1}: </b>{module}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center p-5" style={{ marginTop: "3rem" }}>
            <h2>{props.includeExampleProjects ? "Example Projects and Materials" : ""}</h2>
          </div>
          <div style={props.includeExampleProjects ? { height: "30rem", marginBottom: "5rem" } : { marginBottom: "-10rem" }}>
            <Slideshow slides={props.slides || []} captions={props.slideCaptions} imageStyling={{ height: "30rem", width: "auto", objectFit: "cover" }} captionStyling={{ textAlign: "center", fontSize: "1.125rem", fontStyle: "italic" }} />
          </div>
          <div style={{ margin: "auto", width: "fit-content", marginTop: "7rem", marginBottom: "2rem" }}>
            <Link href="https://forms.gle/ejSvEu2cwwdovUg18" className="btn btn-primary" target="_blank">Register For This Class</Link>
          </div>
          <div style={{ margin: "auto", width: "fit-content", marginBottom: "7rem", color: "blue" }}>
            <Link href={props.trackPage}>Back To Courses Page</Link>
          </div>
        </div>
      </main>
    </div >
  );
}

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
        <div style={{ backgroundColor: `${props.color}` }} className="p-5 text-center">
          <h1>{props.title}</h1>
          <h3 className="font-extralight">{props.classTitle}</h3>
        </div>
        <div id="cs">
          <div className="bg-[#f2f2f2] pt-[1rem]! pb-[0.25rem]!">
            <div className="container">
              <ul className="flex list-none flex-wrap justify-center gap-8 text-[#1D2256]">
                <li>16 Weeks</li>
                <li>16 Classes</li>
                <li>
                  {props.online === true
                    ? 'Online Lessons'
                    : 'Online And In-Person Classes Offered'}
                </li>
                <li>Recommended for grades {props.gradeRange}</li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="pt-12">
              <h2 className="p-3 text-center">Course Description</h2>
              <p>{props.description}</p>
            </div>
            <div className="pb-8">
              <h2 className="p-3 text-center">Prerequisites</h2>
              <p>{props.prerequisites}</p>
            </div>
            <h2 className="p-3 text-center">Syllabus</h2>
            <ul className="list-none pl-0">
              {props.modules.map((module, index) => (
                <li
                  key={index}
                  className="mt-[1rem]! border-[1px] border-solid border-[#1D2256]! p-[1rem]!"
                >
                  <b>Module {index + 1}: </b>
                  {module}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 p-5 text-center">
            <h2>{props.includeExampleProjects ? 'Example Projects and Materials' : ''}</h2>
          </div>
          <div
            style={
              props.includeExampleProjects
                ? { height: '30rem', marginBottom: '5rem' }
                : { marginBottom: '-10rem' }
            }
          >
            <Slideshow
              slides={props.slides || []}
              captions={props.slideCaptions}
              imageStyling={{ height: '30rem', width: 'auto', objectFit: 'cover' }}
              captionStyling={{ textAlign: 'center', fontSize: '1.125rem', fontStyle: 'italic' }}
            />
          </div>
          <div className="mx-auto mt-28 mb-8 w-fit">
            <Link
              href="https://forms.gle/ejSvEu2cwwdovUg18"
              className="btn btn-primary"
              target="_blank"
            >
              Register For This Class
            </Link>
          </div>
          <div className="mx-auto mb-28 w-fit text-blue-600">
            <Link href={props.trackPage}>Back To Courses Page</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

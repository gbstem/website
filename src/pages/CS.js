
import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScratchImage1 from '../images/cs/Screenshot (87).png';
import ScratchImage2 from '../images/cs/Screenshot (100).png';
import ScratchImage3 from '../images/cs/Screenshot (90).png';
import PythonImage1 from '../images/cs/Python2.png';
import PythonImage2 from '../images/cs/Python.png';
import JavaImage1 from '../images/cs/Screenshot (99).png';
import JavaImage2 from '../images/cs/Java1.png'
import JavaImage3 from '../images/cs/Java2.png'

const CS = () => {

  const scratchRef = useRef(null);
  const pythonRef = useRef(null);
  const python2Ref = useRef(null);
  const javaRef = useRef(null);
  const webRef = useRef(null);


  return (
    <div>

      <main>
        <div className="text-center m-5">
          <h1>Computer Science Track</h1>
        </div>

        <section id="cs">
          <div className="container">
            <p>We offer four introductory courses in the computer science track: Scratch, Python, Java, and web development with HTML and CSS. We also offer a more advanced course in Python, called Python II. Classes take a project-based learning approach as students will learn through collaborating and working with peers on mini-projects.</p>
            <div className="mb-5" id="cs">
              <h1>Our classes are as follows:</h1>
              <p><button className="btn btn-link" onClick={() => scratchRef.current.scrollIntoView({ behavior: "smooth" })}
              > Scratch</button></p>
              <p><button
                className='btn btn-link'
                onClick={() => pythonRef.current.scrollIntoView({ behavior: "smooth" })}
              >Python I</button></p>
              <p><button
                className='btn btn-link'
                onClick={() => python2Ref.current.scrollIntoView({ behavior: "smooth" })}
              >Python II</button></p>
              <p><button
                className='btn btn-link'
                onClick={() => javaRef.current.scrollIntoView({ behavior: "smooth" })}
              >Java</button></p>
              <p><button
                className='btn btn-link'
                onClick={() => webRef.current.scrollIntoView({ behavior: "smooth" })}
              >Web development</button></p>
            </div>

            <div>
              <div className="main mb-5" id="scratch" ref={scratchRef}>
                <div className="row">
                  <div className="col-md-6">
                    <h1>Scratch</h1>
                    <p>Our introductory Scratch course is generally recommended for younger students (grades 2-5) but we have a large range of students taking this class from K-8. Ideal for students who have no coding experience, this class will provide a strong foundation to simple programming logic through hands-on activites and games. Through interactive group work, students engage in team problem-solving, developing skills in both collaboration and comuter science. This course will go in depth to all the Scratch functions and will equip students with the skills necessary to make projects on their own. Key projects in this course include a guess my number game (with sensing), a maze game, choose your own adventure game.</p>
                    <ul>
                      <li>Module 1: Scratch environment (website overview)</li>
                      <li>Module 2: Motion (coordinate plane overview)</li>
                      <li>Module 3: Looks and Sounds</li>
                      <li>Module 4: Loops and Control Blocks</li>
                      <li>Module 5: Conditionals with Sensing</li>
                      <li>Module 6: Conditionals with Operators and Variables</li>
                      <li>Module 9: Clones and Broadcasting</li>
                      <li>Module 10: Refining Code</li>
                      <li>Module 11: Final Projects</li>
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <p><i>Ana, Grade 3</i></p>
                    <img src={ScratchImage1} alt="Scratch Project 1" className="img-fluid" />
                    <p><i>Emma and Jacob, Grade 2</i></p>
                    <img src={ScratchImage2} alt="Scratch Project 2" className="img-fluid" />
                    <p><i>Hee-Seo, Grade 4</i></p>
                    <img src={ScratchImage3} alt="Scratch Project 3" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="main mb-5" id="python-i" ref={pythonRef}>
                <div className="row">
                  <div className="col-md-6">
                    <h1>Python I</h1>
                    <p>Our introductory Python course is recommended for highly motivated 6-8th graders (or younger students with high math ability), or students with sufficient programming background in Scratch. The course will cover the fundamentals of Python and will serve as an introduction to text-based languages. Through project-based learning, students learn valuable programming skills by working on mini-projects, often collaborating with students in their class. These projects serve the purpose of developing skills in programming logic, including understanding of common algorithms like "finding the largest number" and "summing all numbers in a list". Projects in this course include hangman, tic-tac-toe, rock-paper-scissors, and a shopping game.</p>
                    <ul>
                      <li>Module 1: Introduction to Python</li>
                      <li>Module 2: Variables and Data Types</li>
                      <li>Module 3: If-Else Statements</li>
                      <li>Module 4: String Methods</li>
                      <li>Module 5: Functions</li>
                      <li>Module 6: While Loops</li>
                      <li>Module 7: For Loops</li>
                      <li>Module 8: Lists</li>
                      <li>Module 9: 2D Arrays and Nested Iteration</li>
                      <li>Module 10: Dictionaries</li>
                      <li>Module 11: Introduction to Python Libraries</li>
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <p><i>Liam, Grade 6</i></p>
                    <img src={PythonImage1} alt="Python Project 1" className="img-fluid" />
                    <p><i>Adam, Grade 8</i></p>
                    <img src={PythonImage2} alt="Python Project 2" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="main mb-5" id="python-ii" ref={python2Ref}>
                <div className="row">
                  <div className="col-md-6">
                    <h1>Python II</h1>
                    <p>
                      Our Python II course is recommended for highly driven 6-8 graders with a robust understanding of the basics of Python (which can be achieved by taking Python I). The course will utilize the skills taught in the introductory Python course to cover different applications of Python. Through project-based learning, students will dive deeper into Python programming by working on projects, and collaborating with students in their class. These projects will help build a robust base for future exploration of Python application, such as Object-oriented Programming, more complex algorithms, and Data Science/Machine Learning.
                    </p>
                    <ul>
                      <li>Module 1: Introduction/Review of Python 1</li>
                      <li>Module 2: Object-oriented Programming</li>
                      <li>Module 3: Algorithms</li>
                      <li>Module 4: Data Science</li>
                      <li>Module 5: Final Project</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                  </div>
                </div>
              </div>


              <div className="main mb-5" id="java" ref={javaRef}>
                <div className="row">
                  <div className="col-md-6">
                    <h1>Java</h1>
                    <p>Our introductory Java course is recommended for students in grades 6-8 with previous text-based programming experience and/or a very strong foundation in math through operations with decimals, fractions, and negative numbers. The course provides students with a strong foundation in one of the most common programming languages used today. It approaches Java from a functional programming perspective, giving students a true understanding of how the internal structures of Java function. Through projects and games like Mastermind as well as thorough coverage of foundational computer science topics such as data structures and algorithms, this course will set students well on their way to becoming skilled Java developers.</p>
                    <ul>
                      <li>Module 1: Java Basics</li>
                      <li>Module 2: Loops</li>
                      <li>Module 3: Arrays</li>
                      <li>Module 4: Methods/Functions</li>
                      <li>Module 5: Classes</li>
                      <li>Module 6: Methods in Classes</li>
                      <li>Module 7: Array Lists</li>
                      <li>Module 8: Strings</li>
                      <li>Module 9: Recursion and Graphics</li>
                      <li>Module 10: Data Structures</li>
                      <li>Module 12: Object-Oriented programming</li>
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <p><i>Yuen Kai, Grade 8</i></p>
                    <img src={JavaImage1} alt="Java Project 1" className="img-fluid" />
                    <img src={JavaImage2} alt="Java Project 2" className="img-fluid" />
                    <img src={JavaImage3} alt="Java Project 3" className="img-fluid" />
                  </div>
                </div>
              </div>


              <div className="main mb-5" id="web" ref={webRef}>
                <div className="row">
                  <div className="col-md-6">
                    <h1>Web Development</h1>
                    <p>Our introductory Web Development course is recommended for students in grades 6-8 (or younger students with high math ability) who are interested in the design and functionality aspects of programming. The course will cover the fundamentals of website development using vanilla HTML, CSS, and JavaScript. Students will explore the various tools, vocabulary, and components used in the field and learn how each element functions together to create a fully-functional web application. Through creating their own landing pages, photography sites, and personal portfolios, using the skills taught, students will equip all the skills necessary to make further projects on their own.</p>
                    <ul>
                      <li>Module 1-2: HTML</li>
                      <li>Module 3-4: CSS</li>
                      <li>Module 5-6: Javascript</li>
                      <li>Module 7: Objects, strings, and arrays</li>
                      <li>Module 8: DOM manipulation</li>
                      <li>Module 9: HTML Form Elements</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}

export default CS;

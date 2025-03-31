import React from 'react';

const general = [
  {
    question: "How do I register for the program?",
    answer:
      `Thank you for your interest! The spring semester registration is now closed, and registrations will open for the fall semester in August. In the meantime, fill out the form on our home page to be notified when registrations open!`
  },
  {
    question: "What subjects does gbSTEM offer?",
    answer:
      "We offer four different subjects (with many courses in each subject): computer science, mathematics, engineering, and science. Please refer to the Programs tab for details on all courses.",
  },
  {
    question: "How much do lessons cost?",
    answer:
      "All lessons are free of charge. We do not want tuition to be a deterrent for any student who is interested in participating in our program.",
  },
  {
    question: "How will lessons be conducted?",
    answer:
      "All sessions will be conducted remotely via Zoom, in groups of about 5-10 students. We will also be offering some in-person sessions, but this option will be limited. See our Programs tab to see what content is covered in each lesson. Visit our logistics tab for more information.",
  },
  {
    question: "How frequently do lessons take place?",
    answer:
      "Students are expected to be able to commit to two 45-60 minute sessions every week for each class they enroll in. So, if the student takes the maximum of two courses, the weekly time commitment will be at least 4 hours per week.",
  },
  {
    question: "When does the program start and end?",
    answer:
      "gbSTEM's Spring 2025 semester will run from March 16th, 2025 to June 14th, 2025. The final week will consist of final projects and events. We will also hold student and parent orientations the week before classes begin.",
  },
  {
    question: "What grade levels is gbSTEM for?",
    answer: "We have various courses designed for students ranging from 1st-8th grade. You should choose courses that correspond with your student's age. Classes will be generally grouped by age.",
  },
  {
    question: "Can I join the Computer Science, Mathematics, Engineering, and Science track all at once?",
    answer:
      "You may register for up to two different courses. However, you need to be sure that you are able to manage the time commitment of at least 2 hours per week per course.",
  },
]

const computerScience = [
  {
    question: "Do I need any prior coding experience?",
    answer:
      "No prior coding experience is needed for our 4 foundational courses— we welcome coders of all skill levels! In fact, most of our students have not coded before participating in the gbSTEM program. Choose the course that corresponds with your student's age and ability level!",
  },
  {
    question: "Does Python II require prior coding experience?",
    answer:
      "Yes, Python II requires some prior knowledge. Students should be comfortable with most topics covered in our Python I course before enrolling in Python II. Visit the CS tab under Programs for more information about Python II.",
  },
  {
    question: "I have a bit of coding experience. Should I still join the program?",
    answer:
      "Yes! If you are already familiar with coding basics, you may be able to enroll in a more difficult course such as Python II or Java.",
  },
  {
    question: "Which programming languages are offered?",
    answer:
      "We offer introductory courses in Scratch, Python, Java, and Web Development (with HTML, CSS, and JavaScript).",
  },
  {
    question: "Which programming language should I pick?",
    answer:
      "We suggest picking the courses that interest you! Typically, Scratch is the easiest language to learn, followed by Python and Web Development (HTML and CSS), followed by Java. We also offer multiple course levels for some languages. Visit our CS courses page to learn more about our courses!",
  },
  {
    question: "Do I need to take the Scratch course before taking the Python I/Java course?",
    answer:
      "No, those courses are introductory and stand-alone. However, if you have experience in Scratch and/or already have a grasp on some programming concepts, you may be able to proceed faster when taking the Python I/Java courses.",
  },
  {
    question: "What does a typical lesson in the Computer Science track look like?",
    answer:
      "Our lessons are typically an hour long each and will consist of a 'lesson' portion and a 'mini-project' portion. During the 'lesson' portion, instructors will introduce students to a new programming concept. During the 'mini-project' portion, students will code a small project that applies the topics and skills learned in the lesson.",
  },

];

const math = [
  {
    question: "Can I enroll my student at a Math level higher than what's recommended?",
    answer:
      "Yes, but we recommend enrolling in the level that corresponds to the student's age and ability level.",
  },
  {
    question: "Can I learn competition math / math not covered in typical K-12 school curricula?",
    answer:
      "Yes. All of our courses will include material not typically covered in the recommended grade levels. Our Mathematics V course focuses almost entirely on competition math and problem-solving strategies.",
  },
  {
    question: "What does a typical lesson in the Mathematics track look like?",
    answer:
      "We will begin with a brief lecture; this will last about 15-30 minutes. Afterwards, students will work on problems, either individually or in groups. They can receive help and support from the instructor at any point during the lesson.",
  },
  {
    question: "My student takes math courses outside of school, should I still enroll in gbSTEM?",
    answer:
      "Yes! We welcome students of all math backgrounds! Our courses teach material not typically covered in school and after-school programs. More mathematically advanced middle school students are welcome to take Math V.",
  }
];

const engineering = [
  {
    question: "Does Engineering I or II require prior engineering experience?",
    answer: "No, these courses are meant to introduce students to the world of engineering! Please choose the course that corresponds to your student's age.",
  },
  {
    question: "Does Engineering III require prior engineering experience?",
    answer:
      "We expect most students in Engineering III to have already taken Engineering II.",
  },
  {
    question: "What does a typical lesson in the Engineering track look like?",
    answer:
      "We will begin with a brief lecture; this will last about 15-30 minutes. Afterwards, students will work on hands-on projects. They can receive help and support from the instructor at any point during the lesson.",
  }
]

const science = [
  {
    question: "Does my student need prior science experience to enroll in Environmental Science?",
    answer: "No! Environmental Science introduces students to elements of chemistry and biology in its curriculum, and no prior skills are required.",
  },
  {
    question: "What does a typical lesson in the Science track look like?",
    answer:
      "Classes usually begin with a brief, lecture-style introduction to new topics, after which students will work on projects, activities, or hands-on labs. Instructors are available to support and answer questions at any point during the lesson.",
  },
  {
    question: "Will Environmental Science help students in school?",
    answer:
      "The Environmental Science curriculum includes elements of physics, chemistry, and biology that will expose many students to these fields earlier than their school might. Additionally, Environmental Science is often not covered in school curricula at all, and is vital to understanding of Earth's climate.",
  }
]

const other = [
  {
    question: "I am a high school student. How can I apply to become an instructor for gbSTEM?",
    answer:
      `Thank you for your interest! The spring semester application window is over now, and applications will open for the fall semester in August. In the meantime, fill out the form on our homepage to be notified when applications open!`
  },
];


function QuestionAnswerPair(question, answer, id) {
  return (
    <div className="accordion-item" style = {{maxWidth:"60rem", margin: "auto"}}>
      <h2 className="accordion-header" id={`heading${id}`}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
          {question}
        </button>
      </h2>
      <div id={`collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`heading${id}`}>
        <div className="accordion-body">
          <strong>{answer}</strong>
        </div>
      </div>
    </div>
  );
}




function Faq() {
  return (
    <div>
      <div className="text-center m-5">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="container">
        <h2 style = {{margin: "auto", width: "fit-content", padding:"1.5rem"}}>General</h2>
        <div className="accordion mb-3" >
          {general.map((pair, index) => QuestionAnswerPair(pair.question, pair.answer, `${index}-general`))}
        </div>
        <h2 style = {{margin: "auto", width: "fit-content", padding:"1.5rem"}}>Computer Science</h2>
        <div className="accordion mb-3" >
          {computerScience.map((pair, index) => QuestionAnswerPair(pair.question, pair.answer, `${index}-cs`))}
        </div>
        <h2  style = {{margin: "auto", width: "fit-content", padding:"1.5rem"}}>Mathematics</h2>
        <div className="accordion mb-3" >
          {math.map((pair, index) => QuestionAnswerPair(pair.question, pair.answer, `${index}-math`))}
        </div>

        <h2  style = {{margin: "auto", width: "fit-content", padding:"1.5rem"}}>Engineering</h2>
        <div className="accordion mb-3" >
          {engineering.map((pair, index) => QuestionAnswerPair(pair.question, pair.answer, `${index}-engineering`))}
        </div>
        <h2  style = {{margin: "auto", width: "fit-content", padding:"1.5rem"}}>Science</h2>
        <div className="accordion mb-3" >
          {science.map((pair, index) => QuestionAnswerPair(pair.question, pair.answer, `${index}-science`))}
        </div>
        <h2  style = {{margin: "auto", width: "fit-content", padding:"1.5rem"}}>Other</h2>
        <div className="accordion mb-3" style = {{paddingBottom:"5rem"}}>
          {other.map((pair, index) => QuestionAnswerPair(pair.question, pair.answer, `${index}-other`))}
        </div>
      </div>
    </div>
  );
}

export default Faq;

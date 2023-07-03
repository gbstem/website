import React from 'react';

const general = [
  {
    question: "How do I register for the program?",
    answer:
      "The registration form must be submitted by March 4th, 2023. No late submissions will be accepted. We will contact you shortly after the deadline with more logistics about the semester. Before you submit the registration form, please read through all the courses carefully. Before enrolling your child in a class, make sure that they fulfill all of the course's prerequisites and are ready to take the class.",
  },
  {
    question: "What tracks do gbSTEM offer?",
    answer:
      "We offer four different tracks for this program: computer science, mathematics, engineering, and science. Please refer to the Classes tab for details on both tracks.",
  },
  {
    question: "How much do lessons cost?",
    answer:
      "All lessons are free of charge. We do not want tuition to be a deterrent for any student who is interested in participating in our program.",
  },
  {
    question: "How will lessons be conducted?",
    answer:
      "All sessions will be conducted remotely via Zoom, in groups of about 5-10 students. We will also be offering some in-person sessions, but this option will be limited. See our Classes tab to see what content is covered in each lesson. Visit our logistics tab for more information.",
  },
  {
    question: "How frequently do lessons take place?",
    answer:
      "Students are expected to be able to commit to two 45-60 minute sessions every week for each class they enroll in. So, if the student takes the maximum of two courses, the weekly time commitment will be at least 4 hours per week.",
  },
  {
    question: "When does the program start and end?",
    answer:
      "gbSTEM's Spring 2023 semester will run from March 12th to June 10th. For most classes, the final week will consist of final projects. We will also hold student and parent orientations the week before classes begin.",
  },
  {
    question: "What grade levels is gbSTEM for?",
    answer: "We have courses designed for all students K-8.",
  },
  {
    question: "Can I join the Computer Science, Mathematics, Engineering, and Science track all at once?",
    answer:
      "Yes, you may register for up to four different courses. However, you need to be sure that you are able to manage the time commitment of at least 2 hours per week per lesson.",
  },
]

const computerScience = [
  {
    question: "Do I need any prior coding experience?",
    answer:
      "No prior coding experience is needed -- we welcome coders of all skill levels! In fact, most of our students have not coded before participating in the gbSTEM program.",
  },
  {
    question: "I have a bit of coding experience. Should I still join the program?",
    answer:
      "Yes! If you are already familiar with coding basics, you may be able to enroll in a more difficult course such as Python II or Java.",
  },
  {
    question: "Which programming languages are offered?",
    answer:
      "We offer introductory courses in Scratch, Python, Java, and web development with HTML and CSS.",
  },
  {
    question: "Which programming language should I pick?",
    answer:
      "We suggest picking the courses that interest you! Typically, Scratch is the easiest language to learn, followed by Python and Web Development (HTML and CSS), followed by Java. We also offer multiple course levels for some languages. Visit our CS courses page to learn more about our courses!",
  },
  {
    question: "Do I need to take the Scratch course before taking the Python/Java course?",
    answer:
      "No, each of our courses are introductory and stand-alone. However, if you have experience in Scratch and/or already have a grasp on some programming concepts, you may be able to proceed faster when taking the Python/Java courses.",
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
      "Yes, but we recommend enrolling in the level that corresponds to the student's ability level.",
  },
  {
    question: "Can I learn competition math / math not covered in typical K-12 school curricula?",
    answer:
      "Yes. All of our courses will include material not typically covered in the recommended grade levels. Our Mathematics V course focuses almost entirely on competition math and problem-solving strategies.",
  },
  {
    question: "What does a typical lesson in the Mathematics track look like?",
    answer:
      "We will begin with a brief lecture; this will last about ten minutes. Afterwards, students will work on problems, either individually or in groups. They can receive help and support from the instructor at any point during the lesson.",
  }
];

const engineering = [
  {
    question: "Does Engineering II require prior engineering experience?",
    answer: "No.",
  },
  {
    question: "Does Engineering III require prior engineering experience?",
    answer:
      "We expect most students in Engineering III to have already taken Engineering II.",
  },
]

const other = [
  {
    question: "I am a high school student. How can I apply to become an instructor for gbSTEM?",
    answer:
      "Thank you for your interest! Please fill out our application form [here](application.html).",
  },
];


function QuestionAnswerPair(question, answer, id) {
  return (
    <div className="accordion-item">
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
        <h1>General</h1>
        <div className="accordion mb-3" >
          {general.map((pair, index) => QuestionAnswerPair(pair.question, pair.answer, `${index}-general`))}
        </div>
        <h1>Computer Science</h1>
        <div className="accordion mb-3" >
          {computerScience.map((pair, index) => QuestionAnswerPair(pair.question, pair.answer, `${index}-cs`))}
        </div>
        <h1>Mathematics</h1>
        <div className="accordion mb-3" >
          {math.map((pair, index) => QuestionAnswerPair(pair.question, pair.answer, `${index}-math`))}
        </div>

        <h1>Engineering</h1>
        <div className="accordion mb-3" >
          {engineering.map((pair, index) => QuestionAnswerPair(pair.question, pair.answer, `${index}-engineering`))}
        </div>
        <h1>Other</h1>
        <div className="accordion mb-3" >
          {other.map((pair, index) => QuestionAnswerPair(pair.question, pair.answer, `${index}-other`))}
        </div>
      </div>
    </div>
  );
}

export default Faq;

/**
 * Answers may be plain strings or JSX (`app/faq/page.tsx` renders them as `React.ReactNode`).
 * The three date-sensitive entries below - how to register, when the program runs, and how to
 * apply as an instructor - are derived from `lib/semesterDates.json` via `lib/constants.ts`
 * rather than hardcoded, so they stay correct across a semester rollover and offer the same
 * register/apply links the home page and navigation bar do while those windows are open.
 *
 * The registration answer switches on SEMESTER_PHASE, the same way `components/home/Intro.tsx`
 * does, so the FAQ and the home page can never describe the semester differently.
 */

import MailingListLink from '@/components/MailingListLink';
import {
  CURRENT_SEMESTER,
  GBSTEM_SIGNUP,
  INSTRUCTOR_APPS_DUE_DATE,
  INSTRUCTOR_APPS_NOT_YET_OPEN,
  INSTRUCTOR_APPS_OPEN,
  INSTRUCTOR_APPS_OPEN_DATE,
  NEXT_SEMESTER,
  PARENT_ORIENTATION_DATE,
  REGISTRATION_ENDS_DATE,
  REGISTRATION_OPEN_DATE,
  SEMESTER_END_DATE,
  SEMESTER_IS_OVER,
  SEMESTER_PHASE,
  SEMESTER_START_DATE,
  STUDENT_ORIENTATION_DATE,
  formatDate,
} from '@/lib/constants';

// Every answer describing a closed window ends this way.
const NotifyMe = () => (
  <>
    In the meantime, <MailingListLink /> to be notified when it opens.
  </>
);

const PortalLink = ({ children }: { children: React.ReactNode }) => (
  <a href={GBSTEM_SIGNUP} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export const general = [
  {
    question: 'How do I register for the program?',
    answer: (
      <>
        Thank you for your interest!{' '}
        {SEMESTER_PHASE === 'registration-open' ? (
          <>
            Registration for the {CURRENT_SEMESTER} semester is open through{' '}
            {formatDate(REGISTRATION_ENDS_DATE)}. <PortalLink>Register here</PortalLink> to sign
            your student up for classes.
          </>
        ) : SEMESTER_PHASE === 'before-registration' ? (
          <>
            Registration for the {CURRENT_SEMESTER} semester opens on{' '}
            {formatDate(REGISTRATION_OPEN_DATE)}. <NotifyMe />
          </>
        ) : SEMESTER_PHASE === 'registration-closed' ? (
          <>
            Registration for the {CURRENT_SEMESTER} semester has closed and classes begin on{' '}
            {formatDate(SEMESTER_START_DATE)}. <NotifyMe />
          </>
        ) : SEMESTER_PHASE === 'classes-in-progress' ? (
          <>
            The {CURRENT_SEMESTER} semester is already underway, so registration is closed until the{' '}
            {NEXT_SEMESTER} semester. <NotifyMe />
          </>
        ) : (
          <>
            The {CURRENT_SEMESTER} semester is over, and registration for the {NEXT_SEMESTER}{' '}
            semester has not opened yet. <NotifyMe />
          </>
        )}
      </>
    ),
  },
  {
    question: 'What subjects does gbSTEM offer?',
    answer:
      'We offer four different subjects (with many courses in each subject): computer science, mathematics, engineering, and science. Please refer to the Programs tab for details on all courses.',
  },
  {
    question: 'How much do lessons cost?',
    answer:
      'All lessons are free of charge. We do not want tuition to be a deterrent for any student who is interested in participating in our program.',
  },
  {
    question: 'How will lessons be conducted?',
    answer:
      'All sessions will be conducted remotely via Zoom, in groups of about 5-10 students. We will also be offering some in-person sessions, but this option will be limited. See our Programs tab to see what content is covered in each lesson. Visit our logistics tab for more information.',
  },
  {
    question: 'How frequently do lessons take place?',
    answer:
      'Students are expected to be able to commit to two 45-60 minute sessions every week for each class they enroll in. So, if the student takes the maximum of two courses, the weekly time commitment will be at least 4 hours per week.',
  },
  {
    question: 'When does the program start and end?',
    answer: (
      <>
        gbSTEM&apos;s {CURRENT_SEMESTER} semester{' '}
        {SEMESTER_IS_OVER ? 'ran' : SEMESTER_PHASE === 'classes-in-progress' ? 'runs' : 'will run'}{' '}
        from {formatDate(SEMESTER_START_DATE)} to {formatDate(SEMESTER_END_DATE)}. The final week
        {SEMESTER_IS_OVER ? ' consisted' : ' will consist'} of final projects and events. We also
        hold orientations before classes begin: student orientation on{' '}
        {formatDate(STUDENT_ORIENTATION_DATE)} and parent orientation on{' '}
        {formatDate(PARENT_ORIENTATION_DATE)}.
      </>
    ),
  },
  {
    question: 'What grade levels is gbSTEM for?',
    answer:
      "We have various courses designed for students ranging from 1st-8th grade. You should choose courses that correspond with your student's age. Classes will be generally grouped by age.",
  },
  {
    question:
      'Can I join the Computer Science, Mathematics, Engineering, and Science track all at once?',
    answer:
      'You may register for up to two different courses. However, you need to be sure that you are able to manage the time commitment of at least 2 hours per week per course.',
  },
];

export const computerScience = [
  {
    question: 'Do I need any prior coding experience?',
    answer:
      "No prior coding experience is needed for our 4 foundational courses— we welcome coders of all skill levels! In fact, most of our students have not coded before participating in the gbSTEM program. Choose the course that corresponds with your student's age and ability level!",
  },
  {
    question: 'Does Python II require prior coding experience?',
    answer:
      'Yes, Python II requires some prior knowledge. Students should be comfortable with most topics covered in our Python I course before enrolling in Python II. Visit the CS tab under Programs for more information about Python II.',
  },
  {
    question: 'I have a bit of coding experience. Should I still join the program?',
    answer:
      'Yes! If you are already familiar with coding basics, you may be able to enroll in a more difficult course such as Python II or Java.',
  },
  {
    question: 'Which programming languages are offered?',
    answer:
      'We offer introductory courses in Scratch, Python, Java, and Web Development (with HTML, CSS, and JavaScript).',
  },
  {
    question: 'Which programming language should I pick?',
    answer:
      'We suggest picking the courses that interest you! Typically, Scratch is the easiest language to learn, followed by Python and Web Development (HTML and CSS), followed by Java. We also offer multiple course levels for some languages. Visit our CS courses page to learn more about our courses!',
  },
  {
    question: 'Do I need to take the Scratch course before taking the Python I/Java course?',
    answer:
      'No, those courses are introductory and stand-alone. However, if you have experience in Scratch and/or already have a grasp on some programming concepts, you may be able to proceed faster when taking the Python I/Java courses.',
  },
  {
    question: 'What does a typical lesson in the Computer Science track look like?',
    answer:
      "Our lessons are typically an hour long each and will consist of a 'lesson' portion and a 'mini-project' portion. During the 'lesson' portion, instructors will introduce students to a new programming concept. During the 'mini-project' portion, students will code a small project that applies the topics and skills learned in the lesson.",
  },
];

export const math = [
  {
    question: "Can I enroll my student at a Math level higher than what's recommended?",
    answer:
      "Yes, but we recommend enrolling in the level that corresponds to the student's age and ability level.",
  },
  {
    question: 'Can I learn competition math / math not covered in typical K-12 school curricula?',
    answer:
      'Yes. All of our courses will include material not typically covered in the recommended grade levels. Our Mathematics V course focuses almost entirely on competition math and problem-solving strategies.',
  },
  {
    question: 'What does a typical lesson in the Mathematics track look like?',
    answer:
      'We will begin with a brief lecture; this will last about 15-30 minutes. Afterwards, students will work on problems, either individually or in groups. They can receive help and support from the instructor at any point during the lesson.',
  },
  {
    question: 'My student takes math courses outside of school, should I still enroll in gbSTEM?',
    answer:
      'Yes! We welcome students of all math backgrounds! Our courses teach material not typically covered in school and after-school programs. More mathematically advanced middle school students are welcome to take Math V.',
  },
];

export const engineering = [
  {
    question: 'Does Engineering I or II require prior engineering experience?',
    answer:
      "No, these courses are meant to introduce students to the world of engineering! Please choose the course that corresponds to your student's age.",
  },
  {
    question: 'Does Engineering III require prior engineering experience?',
    answer: 'We expect most students in Engineering III to have already taken Engineering II.',
  },
  {
    question: 'What does a typical lesson in the Engineering track look like?',
    answer:
      'We will begin with a brief lecture; this will last about 15-30 minutes. Afterwards, students will work on hands-on projects. They can receive help and support from the instructor at any point during the lesson.',
  },
];

export const science = [
  {
    question: 'Does my student need prior science experience to enroll in Environmental Science?',
    answer:
      'No! Environmental Science introduces students to elements of chemistry and biology in its curriculum, and no prior skills are required.',
  },
  {
    question: 'What does a typical lesson in the Science track look like?',
    answer:
      'Classes usually begin with a brief, lecture-style introduction to new topics, after which students will work on projects, activities, or hands-on labs. Instructors are available to support and answer questions at any point during the lesson.',
  },
  {
    question: 'Will Environmental Science help students in school?',
    answer:
      "The Environmental Science curriculum includes elements of physics, chemistry, and biology that will expose many students to these fields earlier than their school might. Additionally, Environmental Science is often not covered in school curricula at all, and is vital to understanding of Earth's climate.",
  },
];

export const other = [
  {
    question: 'I am a high school student. How can I apply to become an instructor for gbSTEM?',
    answer: (
      <>
        Thank you for your interest!{' '}
        {INSTRUCTOR_APPS_OPEN ? (
          <>
            Instructor applications for the {CURRENT_SEMESTER} semester are open through{' '}
            {formatDate(INSTRUCTOR_APPS_DUE_DATE)}. <PortalLink>Apply to teach</PortalLink> &mdash;
            the same &quot;apply&quot; link in the navigation bar above.
          </>
        ) : INSTRUCTOR_APPS_NOT_YET_OPEN ? (
          <>
            Instructor applications for the {CURRENT_SEMESTER} semester open on{' '}
            {formatDate(INSTRUCTOR_APPS_OPEN_DATE)}. <NotifyMe />
          </>
        ) : (
          <>
            Instructor applications for the {CURRENT_SEMESTER} semester closed on{' '}
            {formatDate(INSTRUCTOR_APPS_DUE_DATE)}, and applications for the {NEXT_SEMESTER}{' '}
            semester have not opened yet. <NotifyMe />
          </>
        )}
      </>
    ),
  },
];

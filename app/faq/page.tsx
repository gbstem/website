'use client';

import { currentSemesterStatus } from '@/lib/constants';
import { computerScience, engineering, generalFaq, math, otherFaq, science } from '@/lib/faqData';
import { Accordion, Container } from 'react-bootstrap';

function QuestionAnswerAccordion({
  data,
  eventKeyPrefix,
}: {
  data: { question: string; answer: React.ReactNode }[];
  eventKeyPrefix: string;
}) {
  return (
    <Accordion className="mx-auto mb-4 max-w-240">
      {data.map((pair, index) => (
        <Accordion.Item eventKey={`${eventKeyPrefix}-${index}`} key={index}>
          <Accordion.Header className="fs-5">{pair.question}</Accordion.Header>
          <Accordion.Body className="fw-semibold text-[19.2px] font-(--font-montserrat)">
            {pair.answer}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default function Faq() {
  // Built during render so the date-sensitive answers reflect today, not the day this page was
  // prerendered. See `SemesterStatus` in lib/constants.ts.
  const status = currentSemesterStatus();
  const general = generalFaq(status);
  const other = otherFaq(status);

  return (
    <div className="pb-5">
      <div className="m-5 text-center">
        <h1 className="fw-semibold">Frequently Asked Questions</h1>
      </div>
      <Container>
        <h2 className="mx-auto w-fit p-6">General</h2>
        <QuestionAnswerAccordion data={general} eventKeyPrefix="general" />

        <h2 className="mx-auto w-fit p-6">Computer Science</h2>
        <QuestionAnswerAccordion data={computerScience} eventKeyPrefix="cs" />

        <h2 className="mx-auto w-fit p-6">Mathematics</h2>
        <QuestionAnswerAccordion data={math} eventKeyPrefix="math" />

        <h2 className="mx-auto w-fit p-6">Engineering</h2>
        <QuestionAnswerAccordion data={engineering} eventKeyPrefix="engineering" />

        <h2 className="mx-auto w-fit p-6">Science</h2>
        <QuestionAnswerAccordion data={science} eventKeyPrefix="science" />

        <h2 className="mx-auto w-fit p-6">Other</h2>
        <QuestionAnswerAccordion data={other} eventKeyPrefix="other" />
      </Container>
    </div>
  );
}

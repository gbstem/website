"use client";

import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { general, computerScience, math, engineering, science, other } from '@/lib/faqData';

function QuestionAnswerAccordion({ data, eventKeyPrefix }: { data: any[], eventKeyPrefix: string }) {
  return (
    <Accordion className="mb-4" style={{ maxWidth: "60rem", margin: "auto" }}>
      {data.map((pair, index) => (
        <Accordion.Item eventKey={`${eventKeyPrefix}-${index}`} key={index}>
          <Accordion.Header className="fs-5">{pair.question}</Accordion.Header>
          <Accordion.Body>
            <strong>{pair.answer}</strong>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default function Faq() {
  return (
    <div className="pb-5">
      <div className="text-center m-5">
        <h1 className="fw-bold">Frequently Asked Questions</h1>
      </div>
      <Container>
        <h2 style={{ margin: "auto", width: "fit-content", padding: "1.5rem" }}>General</h2>
        <QuestionAnswerAccordion data={general} eventKeyPrefix="general" />

        <h2 style={{ margin: "auto", width: "fit-content", padding: "1.5rem" }}>Computer Science</h2>
        <QuestionAnswerAccordion data={computerScience} eventKeyPrefix="cs" />

        <h2 style={{ margin: "auto", width: "fit-content", padding: "1.5rem" }}>Mathematics</h2>
        <QuestionAnswerAccordion data={math} eventKeyPrefix="math" />

        <h2 style={{ margin: "auto", width: "fit-content", padding: "1.5rem" }}>Engineering</h2>
        <QuestionAnswerAccordion data={engineering} eventKeyPrefix="engineering" />

        <h2 style={{ margin: "auto", width: "fit-content", padding: "1.5rem" }}>Science</h2>
        <QuestionAnswerAccordion data={science} eventKeyPrefix="science" />

        <h2 style={{ margin: "auto", width: "fit-content", padding: "1.5rem" }}>Other</h2>
        <QuestionAnswerAccordion data={other} eventKeyPrefix="other" />
      </Container>
    </div>
  );
}

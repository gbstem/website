'use client';
import MailingListLink from '@/components/MailingListLink';
import {
  CURRENT_SEMESTER,
  GBSTEM_SIGNUP,
  INSTRUCTOR_APPS_DUE_DATE,
  INSTRUCTOR_APPS_OPEN,
  NEXT_SEMESTER,
  REGISTRATION_ENDS_DATE,
  REGISTRATION_OPEN,
  REGISTRATION_OPEN_DATE,
  SEMESTER_END_DATE,
  SEMESTER_IN_PROGRESS,
  SEMESTER_IS_OVER,
  SEMESTER_PHASE,
  SEMESTER_START_DATE,
  formatDate,
} from '@/lib/constants';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';

/**
 * The one sentence describing where the semester stands. Switching over SEMESTER_PHASE rather
 * than rendering a paragraph per boolean is what guarantees the alert holds exactly one message:
 * the phases can't overlap (no contradictory pair on the day registration closes and classes
 * start) and can't all be false (no empty alert box during the days between them).
 */
function registrationStatus() {
  switch (SEMESTER_PHASE) {
    case 'before-registration':
      return `Registration for the ${CURRENT_SEMESTER} semester has not opened yet. It opens on ${formatDate(REGISTRATION_OPEN_DATE)}.`;
    case 'registration-open':
      return `Registration for the gbSTEM ${CURRENT_SEMESTER} semester is currently underway. Register to be a student by ${formatDate(REGISTRATION_ENDS_DATE)} to participate in gbSTEM classes this semester!`;
    case 'registration-closed':
      return `Registration for the ${CURRENT_SEMESTER} semester has closed. Classes begin on ${formatDate(SEMESTER_START_DATE)}.`;
    case 'classes-in-progress':
      return `The ${CURRENT_SEMESTER} semester is currently underway! Registration is closed until the ${NEXT_SEMESTER} semester.`;
    case 'semester-over':
      return `The ${CURRENT_SEMESTER} semester is now over.`;
  }
}

function HomeIntro() {
  return (
    <div className="bg-white py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={10} lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="mb-4 text-center">Registration Information</h2>

                {!SEMESTER_IS_OVER && (
                  <p className="mb-4">
                    {`The ${CURRENT_SEMESTER} semester ${SEMESTER_IN_PROGRESS ? 'runs' : 'will run'} from ${formatDate(SEMESTER_START_DATE)} to ${formatDate(SEMESTER_END_DATE)}!`}
                  </p>
                )}

                <Alert variant="info">
                  <p className="mb-0">
                    {registrationStatus()}
                    {SEMESTER_IS_OVER && (
                      <>
                        {' '}
                        <MailingListLink>Join our mailing list</MailingListLink> to be notified when
                        registration for the {NEXT_SEMESTER} semester opens.
                      </>
                    )}
                  </p>
                  {/* Instructor applications are a separate window that closes before registration
                      does, so this is its own line rather than a clause on the sentence above. */}
                  {INSTRUCTOR_APPS_OPEN && (
                    <p className="mt-2 mb-0">
                      {`Instructor applications for the ${CURRENT_SEMESTER} semester are also open. Apply to be an instructor by ${formatDate(INSTRUCTOR_APPS_DUE_DATE)}.`}
                    </p>
                  )}
                </Alert>

                {/* In the semester-over phase the alert already ends with this link; don't stack
                    a second copy underneath it. */}
                {!REGISTRATION_OPEN && !SEMESTER_IS_OVER && (
                  <p className="mb-4">
                    If you are interested in gbSTEM&apos;s programs or hope to apply as an
                    instructor, please <MailingListLink className="fw-semibold" />.
                  </p>
                )}

                {(REGISTRATION_OPEN || INSTRUCTOR_APPS_OPEN) && (
                  /* Centered because the two windows close on different dates: for the nine days
                     between them only the Register card renders, and a lone md={6} column would
                     otherwise sit against the left edge with a hole beside it. No effect when
                     both cards are present, since they fill the row. */
                  <Row className="justify-content-center g-4">
                    {REGISTRATION_OPEN && (
                      <Col md={6}>
                        <div className="bg-light h-100 rounded p-4 text-center">
                          <h5 className="mb-3">Parents and 1-8 Students</h5>
                          <a
                            className="btn btn-primary"
                            href={GBSTEM_SIGNUP}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Register
                          </a>
                        </div>
                      </Col>
                    )}
                    {/* Gated on the instructor window, not the registration one: applications
                        close nine days earlier, and this button used to outlive them. */}
                    {INSTRUCTOR_APPS_OPEN && (
                      <Col md={6}>
                        <div className="bg-light h-100 rounded p-4 text-center">
                          <h5 className="mb-3">
                            Instructor Applicants
                            <br />
                            (High School or Older)
                          </h5>
                          <a
                            className="btn btn-primary"
                            href={GBSTEM_SIGNUP}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Apply to teach
                          </a>
                        </div>
                      </Col>
                    )}
                  </Row>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeIntro;

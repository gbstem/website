'use client';
import {
  FORM_LINK,
  INSTRUCTOR_APPS_DUE_DATE,
  LATEST_SEMESTER,
  REGISTRATION_ENDS_DATE,
  REGISTRATION_OPEN,
  REGISTRATION_OPEN_DATE,
  SEMESTER_END_DATE,
  SEMESTER_START_DATE,
  UPCOMING_SEMESTER,
} from '@/lib/constants';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';

function HomeIntro() {
  return (
    <div className="bg-white py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col md={10} lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h2 className="mb-4 text-center">Registration Information</h2>
                <p>{`The ${UPCOMING_SEMESTER} semester will run from ${SEMESTER_START_DATE.toLocaleDateString()} to ${SEMESTER_END_DATE.toLocaleDateString()}!`}</p>
                <Alert variant="info">
                  <p className="mb-0">
                    {REGISTRATION_OPEN
                      ? `Registration for the gbSTEM ${UPCOMING_SEMESTER} semester is currently underway. Register to be a student by ${REGISTRATION_ENDS_DATE.toLocaleDateString()} to participate in gbSTEM classes this semester! Applications to be an instructor are due ${INSTRUCTOR_APPS_DUE_DATE.toLocaleDateString()}.`
                      : `The ${LATEST_SEMESTER} semester registration is now closed. Registrations for the ${UPCOMING_SEMESTER} semester will open on ${REGISTRATION_OPEN_DATE.toLocaleDateString()}.`}
                  </p>
                </Alert>
                <p className={`mb-4 ${!REGISTRATION_OPEN ? '' : 'd-none'}`}>
                  If you are interested in gbSTEM&apos;s programs or hope to apply next semester as
                  an instructor, please{' '}
                  <a
                    href={FORM_LINK}
                    className="fw-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    join our mailing list
                  </a>
                  .
                </p>
                <Row className={`g-4 ${REGISTRATION_OPEN ? '' : 'd-none'}`}>
                  <Col md={6}>
                    <div className="bg-light h-100 rounded p-4 text-center">
                      <h5 className="mb-3">Parents and 1-8 Students</h5>
                      <a
                        className="btn btn-primary"
                        href="https://portal.gbstem.org/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register
                      </a>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="bg-light h-100 rounded p-4 text-center">
                      <h5 className="mb-3">
                        Instructor Applicants
                        <br />
                        (High School or Older)
                      </h5>
                      <a
                        className="btn btn-primary"
                        href="https://portal.gbstem.org/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply to teach
                      </a>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeIntro;

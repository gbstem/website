import TeamMemberCard from '@/components/team/TeamMemberCard';
import teamMembers from '@/lib/teamMembers';
import { Col, Container, Row } from 'react-bootstrap';

const teams = [
  'presidents',
  'advisors',
  'outreach & events',
  'math',
  'engineering',
  'computer science',
  'science',
];

// Team Section component
const TeamSection = ({
  teamName,
  members,
}: {
  teamName: string;
  members: {
    name: string;
    school: string;
    graduationYear: string;
    profilePic: string;
    bio: string;
    role: string;
    linkedin?: string;
  }[];
}) => {
  return (
    <div className="team-section py-5">
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            textTransform: 'capitalize',
            position: 'relative',
            paddingBottom: '15px',
          }}
        >
          {teamName} {teamName === 'presidents' || teamName === 'advisors' ? '' : 'Team'}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '3px',
              backgroundColor: '#67aeda',
            }}
          ></div>
        </h2>

        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 justify-content-center">
          {members.map((member, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <TeamMemberCard
                name={member.name}
                school={member.school}
                graduationYear={member.graduationYear}
                profilePic={member.profilePic}
                bio={member.bio}
                role={member.role}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

// Main Team component
export default function Team() {
  return (
    <div className="team-page bg-light">
      <Container
        fluid
        className="py-5 bg-primary text-white text-center"
        style={{ backgroundColor: '#67aeda !important' }}
      >
        <h1 className="display-4 fw-semibold">Our Team</h1>
        <p className="lead">Meet the dedicated people behind gbSTEM</p>
      </Container>

      {/* Display all teams in sections */}
      {teams.map((team) => (
        <TeamSection
          key={team}
          teamName={team}
          members={teamMembers.filter((member) => member.team === team)}
        />
      ))}
    </div>
  );
}

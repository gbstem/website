import TeamMemberCard from '@/components/team/TeamMemberCard';
import { constructSEO } from '@/lib/seo';
import teamMembers from '@/lib/teamMembers';
import { Col, Container, Row } from 'react-bootstrap';

export const metadata = constructSEO({
  title: 'Our Team',
  description: 'Meet the dedicated people behind gbSTEM',
});

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
        <h2 className="relative mb-5 pb-[15px] text-center capitalize">
          {teamName} {teamName === 'presidents' || teamName === 'advisors' ? '' : 'Team'}
          <div className="absolute bottom-0 left-1/2 h-[3px] w-[80px] -translate-x-1/2 bg-[#67aeda]"></div>
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
      <Container fluid className="bg-[#0D6EFD]! py-5 text-center text-white">
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

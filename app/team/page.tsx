import TeamMemberCard from '@/components/team/TeamMemberCard';
import { constructSEO } from '@/lib/seo';
import teamMembers, { TeamMember } from '@/lib/teamMembers';

export const metadata = constructSEO({
  title: 'Our Team',
  description: 'Meet the dedicated people behind gbSTEM',
});

const teams = [
  'presidents',
  'advisors',
  'recruitment',
  'outreach',
  'math',
  'engineering',
  'computer science',
  'science',
];

// Team Section component
const TeamSection = ({ teamName, members }: { teamName: string; members: TeamMember[] }) => {
  return (
    <div className="py-12">
      <div className="site-container">
        <h2 className="relative mb-12 pb-3.75 text-center capitalize">
          {teamName} {teamName === 'presidents' || teamName === 'advisors' ? '' : 'Team'}
          <div className="absolute bottom-0 left-1/2 h-0.75 w-20 -translate-x-1/2 bg-[#67aeda]"></div>
        </h2>

        {/* Flex rather than grid so a part-filled last row is centered. Each width is its share of
            the row minus its share of the gaps: 2 per row from sm, 3 from lg, 4 from xl. */}
        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex w-full justify-center sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-4.5rem)/4)]"
            >
              <TeamMemberCard
                name={member.name}
                school={member.school}
                graduationYear={member.graduationYear}
                profilePic={member.profilePic}
                bio={member.bio}
                role={member.role}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Team component
export default function Team() {
  return (
    <div className="bg-light">
      <div className="w-full bg-primary px-3 py-12 text-center text-white">
        <h1 className="text-display-4 font-semibold">Our Team</h1>
        <p className="text-lead font-light">Meet the dedicated people behind gbSTEM</p>
      </div>

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

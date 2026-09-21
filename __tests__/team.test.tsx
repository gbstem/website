import Team from '@/app/team/page';
import teamMembers from '@/lib/teamMembers';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import fs from 'fs';
import path from 'path';

jest.mock('@/components/team/TeamMemberCard', () => {
  return function MockTeamMemberCard(props: { name: string; role: string }) {
    return (
      <div data-testid="mock-team-member-card">
        {props.name} - {props.role}
      </div>
    );
  };
});

describe('Team Page', () => {
  it('renders the team page header', () => {
    render(<Team />);

    expect(screen.getByRole('heading', { name: /Our Team/i })).toBeInTheDocument();
    expect(screen.getByText('Meet the dedicated people behind gbSTEM')).toBeInTheDocument();
  });

  it('renders all team sections', () => {
    render(<Team />);

    const expectedTeams = Array.from(new Set(teamMembers.map((member) => member.team)));
    const h2Elements = screen.getAllByRole('heading', { level: 2 });

    expect(h2Elements.every((el) => el.tagName === 'H2')).toBe(true);

    const renderedTeams = h2Elements.map((h2) =>
      h2.textContent
        ?.replace(/\s*team\s*$/i, '')
        .trim()
        .toLowerCase()
    );

    // Direction 1: Every de-duped team in teamMembers.ts has a corresponding <h2>
    expectedTeams.forEach((team) => {
      expect(renderedTeams).toContain(team);
    });

    // Direction 2: Every <h2> element corresponds to a team in teamMembers.ts
    renderedTeams.forEach((renderedTeam) => {
      expect(expectedTeams).toContain(renderedTeam);
    });

    // Full bi-directional set & length consistency
    expect(renderedTeams.sort()).toEqual(expectedTeams.sort());
    expect(h2Elements).toHaveLength(expectedTeams.length);
  });

  it('renders all team members', () => {
    render(<Team />);

    expect(screen.getAllByTestId('mock-team-member-card')).toHaveLength(teamMembers.length);

    teamMembers.forEach((member) => {
      expect(screen.getByText(member.name, { exact: false })).toBeInTheDocument();
    });
  });

  it('verifies no team member name appears more than once in teamMembers', () => {
    const names = teamMembers.map((member) => member.name);
    const duplicates = names.filter((name, index) => names.indexOf(name) !== index);

    expect(duplicates).toEqual([]);
    expect(new Set(names).size).toBe(names.length);
  });

  it('verifies all profilePic paths exist under public/images/headshots', () => {
    const headshotsDir = path.join(__dirname, '..', 'public', 'images', 'headshots');
    const missingPics = teamMembers
      .filter((member) => !fs.existsSync(path.join(headshotsDir, member.profilePic)))
      .map((member) => `${member.name}: ${member.profilePic}`);

    expect(missingPics).toEqual([]);
  });
});

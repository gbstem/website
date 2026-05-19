import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Team from '@/app/team/page';

jest.mock('@/components/team/TeamMemberCard', () => {
  return function MockTeamMemberCard(props: any) {
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

    expect(screen.getByText(/presidents/i)).toBeInTheDocument();
    expect(screen.getByText(/advisors/i)).toBeInTheDocument();
    expect(screen.getByText(/outreach & events/i)).toBeInTheDocument();
    expect(screen.getByText(/math Team/i)).toBeInTheDocument();
    expect(screen.getByText(/engineering Team/i)).toBeInTheDocument();
    expect(screen.getByText(/computer science Team/i)).toBeInTheDocument();
    expect(screen.getAllByText(/science Team/i).length).toBeGreaterThan(0);
  });
});

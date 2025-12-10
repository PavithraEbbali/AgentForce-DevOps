import { render, screen } from '@testing-library/react';
import DashboardCard from './DashboardCard';

describe('DashboardCard', () => {
  it('renders the component', () => {
    render(<DashboardCard />);
    expect(screen.getByText('DashboardCard')).toBeInTheDocument();
  });
});

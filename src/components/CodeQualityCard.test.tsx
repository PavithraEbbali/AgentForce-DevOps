import { render, screen } from '@testing-library/react';
import CodeQualityCard from './CodeQualityCard';

describe('CodeQualityCard', () => {
  it('renders the component', () => {
    render(<CodeQualityCard />);
    expect(screen.getByText('CodeQualityCard')).toBeInTheDocument();
  });
});

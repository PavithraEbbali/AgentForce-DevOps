import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('ProductCard', () => {
  it('renders the component', () => {
    render(<ProductCard />);
    expect(screen.getByText('ProductCard')).toBeInTheDocument();
  });
});

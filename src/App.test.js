import { render, screen } from '@testing-library/react';
import main from './main';

test('renders learn react link', () => {
  render(<main />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

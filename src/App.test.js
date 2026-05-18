import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Greater Boston STEM Program heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Inspiring the Next Generation/i);
  expect(linkElement).toBeInTheDocument();
});



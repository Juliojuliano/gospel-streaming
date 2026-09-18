import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the GospelStream home page', () => {
  render(<App />);
  const heading = screen.getByText(/adoração em streaming/i);
  expect(heading).toBeInTheDocument();
});

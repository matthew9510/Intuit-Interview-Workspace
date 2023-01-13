import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello again Intuit, it's a pleasure to be back!/i);
  expect(linkElement).toBeInTheDocument();
});

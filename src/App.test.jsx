import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders bus schedule heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/bus schedule/i);
  expect(headingElement).toBeInTheDocument();
});

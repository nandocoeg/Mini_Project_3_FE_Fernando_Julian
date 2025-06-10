import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Notfound from './index';

describe('Notfound Page', () => {
  test('renders the "404 Not Found" message correctly', () => {
    render(
      <MemoryRouter>
        <Notfound />
      </MemoryRouter>
    );

    // Check for the main "404 Not Found" message
    // Using a case-insensitive regex for flexibility, though exact match is also fine.
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();

    // Check for the secondary "Something went wrong" message
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });

  test('uses h1 tags for the messages', () => {
    render(
      <MemoryRouter>
        <Notfound />
      </MemoryRouter>
    );

    const heading404 = screen.getByText(/404 Not Found/i);
    expect(heading404.tagName).toBe('H1');

    const headingSomethingWrong = screen.getByText(/Something went wrong/i);
    expect(headingSomethingWrong.tagName).toBe('H1');
  });

  // No specific imagery or links to test in the current component version.
});

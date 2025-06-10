import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GenreButton from './index'; // Component is named GenreButton

describe('GenreButton Component', () => {
  test('renders correctly with the hardcoded genre buttons', () => {
    render(<GenreButton />);

    // Verify each button is rendered with the correct text
    const actionButton = screen.getByRole('button', { name: /Action/i });
    const horrorButton = screen.getByRole('button', { name: /Horror/i });
    const comedyButton = screen.getByRole('button', { name: /Comedy/i });
    const dramaButton = screen.getByRole('button', { name: /Drama/i });

    expect(actionButton).toBeInTheDocument();
    expect(horrorButton).toBeInTheDocument();
    expect(comedyButton).toBeInTheDocument();
    expect(dramaButton).toBeInTheDocument();
  });

  test('all rendered genres are button elements', () => {
    render(<GenreButton />);

    const expectedGenres = ['Action', 'Horror', 'Comedy', 'Drama'];
    expectedGenres.forEach(genreName => {
      const buttonElement = screen.getByText(genreName);
      expect(buttonElement.tagName).toBe('BUTTON');
      // Check for specific classes related to styling, if necessary (can be brittle)
      expect(buttonElement).toHaveClass('underline decoration-2 hover:text-blue-600 transition');
    });
  });

  // Note: The subtask mentioned testing API loading, error states, and dynamic genre data.
  // The current GenreButton component is static and does not implement these features.
  // If the component is refactored in the future to fetch genres, these tests would need to be added.
});

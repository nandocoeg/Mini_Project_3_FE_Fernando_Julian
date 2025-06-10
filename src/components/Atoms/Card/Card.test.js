import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './index'; // Assuming default export
import { imageUrl } from "../../../services/API/api"; // To construct image URLs

// Mock react-youtube as it's an external component and might cause issues in tests
jest.mock('react-youtube', () => ({
  __esModule: true,
  default: ({ videoId, opts }) => (
    <div data-testid="mock-youtube-player" data-videoid={videoId}>
      Mock YouTube Player
    </div>
  ),
}));

// Mock DetailButton from the '../Button' module.
// Directly mock DetailButton as a simple functional component.
jest.mock('../Button', () => ({
  DetailButton: () => {
    return <button>Detail</button>;
  },
  // Add mocks for other named exports from ../Button if Card used them,
  // for example:
  // ButtonStart: () => <button>Mocked Start</button>,
  // SearchButton: () => <button>Mocked Search</button>,
}));

const mockMovie = {
  moviePoster: 'poster.jpg',
  movieTitle: 'Awesome Movie Title',
  movieSinopsys: 'This is a great movie about something really exciting and adventurous. It has a lot of plot twists.',
  movieTrailer: 'dQw4w9WgXcQ', // A classic trailer ID
  moviePopularity: 8.5,
};

describe('Card Component', () => {
  test('renders initial card content correctly', () => {
    render(<Card {...mockMovie} />);

    // Check image
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', `${imageUrl}${mockMovie.moviePoster}`);
    expect(image).toHaveAttribute('alt', 'Placeholder'); // The component uses a generic "Placeholder" alt text

    // Check for title (initially in overlay, might not be directly visible without interaction)
    // For now, we'll check if it's in the document. We'll test overlay visibility/interaction later.
    expect(screen.getByText(mockMovie.movieTitle)).toBeInTheDocument();

    // Check for truncated synopsis (also in overlay)
    // The component uses 'truncate' class, so we can't easily check the full text here without simulating hover.
    // We'll check if part of it is there.
    expect(screen.getByText(mockMovie.movieSinopsys)).toBeInTheDocument();
    // The text is present but might be hidden by opacity by default.
    // Let's ensure it's part of the DOM.

    // Check for DetailButton by its text, rendered by the mock
    expect(screen.getByRole('button', { name: /Detail/i })).toBeInTheDocument();
  });

  test('clicking title shows details modal', () => {
    render(<Card {...mockMovie} />);

    // Modal should not be visible initially
    expect(screen.queryByTestId('mock-youtube-player')).not.toBeInTheDocument();

    // Click the movie title to show details
    fireEvent.click(screen.getByText(mockMovie.movieTitle));

    // Modal should now be visible
    expect(screen.getByTestId('mock-youtube-player')).toBeInTheDocument();
    expect(screen.getByTestId('mock-youtube-player')).toHaveAttribute('data-videoid', mockMovie.movieTrailer);

    // Check for full title in modal
    // The title appears twice (card and modal), so we need to be more specific or use getAllByText
    expect(screen.getAllByText(mockMovie.movieTitle).length).toBeGreaterThanOrEqual(1); // Title should be in modal

    // Check for popularity in modal
    expect(screen.getByText(mockMovie.moviePopularity.toString())).toBeInTheDocument();

    // Check for full sinopsys in modal (the one not truncated)
    // The modal shows the full synopsis, the card might show a truncated one.
    // We are asserting the presence of the full synopsis text.
    const allSynopsisElements = screen.getAllByText(mockMovie.movieSinopsys);
    expect(allSynopsisElements.some(el => !el.classList.contains('truncate'))).toBe(true);


    // Check for the close button in the modal
    expect(screen.getByRole('button', { name: /close-modal/i })).toBeInTheDocument(); // Assuming BsX is wrapped in a button with aria-label or text
  });

  test('clicking DetailButton shows details modal', () => {
    render(<Card {...mockMovie} />);

    expect(screen.queryByTestId('mock-youtube-player')).not.toBeInTheDocument();

    // The onClick is on the <a> tag wrapping the DetailButton
    const detailButton = screen.getByRole('button', { name: /Detail/i });
    fireEvent.click(detailButton.closest('a'));

    expect(screen.getByTestId('mock-youtube-player')).toBeInTheDocument();
    expect(screen.getByText(mockMovie.moviePopularity.toString())).toBeInTheDocument();
  });

  test('clicking close button in modal hides details', () => {
    render(<Card {...mockMovie} />);

    // Open the modal first by clicking the title
    fireEvent.click(screen.getByText(mockMovie.movieTitle));
    expect(screen.getByTestId('mock-youtube-player')).toBeInTheDocument(); // Modal is open

    // Click the close button
    // The close button is <button className="text-red-600 text-3xl" onClick={handleToggleDetails}><BsX /></button>
    // We need a way to target it. Let's assume it's the only button with <BsX /> or add a test-id to it.
    // For now, let's try to find it by role and hope it's unique enough or has a distinguishable characteristic.
    // Giving it an aria-label="close modal" in the component would be best.
    // Modifying component to add aria-label="close-modal" to the close button.
    const closeButton = screen.getByRole('button', { name: /close-modal/i });
    fireEvent.click(closeButton);

    // Modal should be hidden
    expect(screen.queryByTestId('mock-youtube-player')).not.toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from './index';
// Card atom will not be mocked, its actual implementation will be used.
// import Card from '../../Atoms/Card';
import { useGetPopularMoviesQuery } from '../../../services/API/movieApi'; // Import the mock-target
import { imageUrl } from '../../../services/API/api'; // For image URLs

// Card atom is NOT mocked.
// We will mock react-youtube as it's a child of Card and not relevant to this integration test.
jest.mock('react-youtube', () => ({
  __esModule: true,
  default: ({ videoId }) => <div data-testid="mock-youtube-player" data-videoid={videoId}>Mock YouTube Player</div>,
}));

// Mock the RTK Query hook module
jest.mock('../../../services/API/movieApi', () => ({
  useGetPopularMoviesQuery: jest.fn(),
}));

const mockMoviesData = {
  results: [
    { id: 1, title: 'Movie 1', overview: 'Overview 1', poster_path: 'poster1.jpg', trailer: 'trailer1', popularity: 8.0 },
    { id: 2, title: 'Movie 2', overview: 'Overview 2', poster_path: 'poster2.jpg', trailer: 'trailer2', popularity: 8.1 },
    { id: 3, title: 'Movie 3', overview: 'Overview 3', poster_path: 'poster3.jpg', trailer: 'trailer3', popularity: 8.2 },
    { id: 4, title: 'Movie 4', overview: 'Overview 4', poster_path: 'poster4.jpg', trailer: 'trailer4', popularity: 8.3 },
    { id: 5, title: 'Movie 5', overview: 'Overview 5', poster_path: 'poster5.jpg', trailer: 'trailer5', popularity: 8.4 },
    { id: 6, title: 'Movie 6', overview: 'Overview 6', poster_path: 'poster6.jpg', trailer: 'trailer6', popularity: 8.5 },
    { id: 7, title: 'Movie 7', overview: 'Overview 7', poster_path: 'poster7.jpg', trailer: 'trailer7', popularity: 8.6 },
    { id: 8, title: 'Movie 8', overview: 'Overview 8', poster_path: 'poster8.jpg', trailer: 'trailer8', popularity: 8.7 },
    { id: 9, title: 'Movie 9', overview: 'Overview 9', poster_path: 'poster9.jpg', trailer: 'trailer9', popularity: 8.8 },
  ],
};

describe('MovieCard Component (List of Popular Movies)', () => {
  beforeEach(() => {
    // Use imported references for mocks
    jest.mocked(useGetPopularMoviesQuery).mockClear();
    // Card is not mocked, so no need to clear jest.mocked(Card)
  });

  test('renders loading state correctly', () => {
    jest.mocked(useGetPopularMoviesQuery).mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });
    render(<MovieCard />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error state correctly', () => {
    jest.mocked(useGetPopularMoviesQuery).mockReturnValue({
      data: undefined,
      error: { status: 500, data: 'Server Error' },
      isLoading: false,
    });
    render(<MovieCard />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  test('renders a list of movie cards on successful data fetch', () => {
    jest.mocked(useGetPopularMoviesQuery).mockReturnValue({
      data: mockMoviesData, // Use the full mockMoviesData here
      error: undefined,
      isLoading: false,
    });
    render(<MovieCard />);

    // Check for titles from the first few movies to confirm Cards are rendered
    // MovieCard component slices to the first 8 movies.
    expect(screen.getByText(mockMoviesData.results[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockMoviesData.results[7].title)).toBeInTheDocument(); // 8th movie
    if (mockMoviesData.results.length > 8) {
      expect(screen.queryByText(mockMoviesData.results[8].title)).not.toBeInTheDocument(); // 9th movie should not be there
    }

    // Check for an image from one of the cards
    // The actual Card atom uses "Placeholder" as alt text for the poster
    const images = screen.getAllByAltText('Placeholder');
    expect(images.length).toBe(8);
    expect(images[0]).toHaveAttribute('src', `${imageUrl}${mockMoviesData.results[0].poster_path}`);

    // Verify that the DetailButton (part of the Card atom) is rendered for each card
    const detailButtons = screen.getAllByRole('button', {name: /Detail/i});
    expect(detailButtons.length).toBe(8);
  });

  test('renders nothing if movie data results are empty or undefined', () => {
    jest.mocked(useGetPopularMoviesQuery).mockReturnValue({
      data: { results: [] },
      error: undefined,
      isLoading: false,
    });
    const { container } = render(<MovieCard />);
    expect(screen.queryByText(/Movie 1/i)).not.toBeInTheDocument(); // Check that no movie titles are rendered
    expect(container.firstChild).toBeNull();


    jest.mocked(useGetPopularMoviesQuery).mockReturnValue({
        data: undefined,
        error: undefined,
        isLoading: false,
      });
    const { container: containerUndefined } = render(<MovieCard />);
    expect(screen.queryByText(/Movie 1/i)).not.toBeInTheDocument();
    expect(containerUndefined.firstChild).toBeNull();
  });

  // The subtask's requirement "If clicking the card navigates to the correct movie details page"
  // is not applicable to this MovieCard component as it only renders a list of Card atoms.
  // Navigation logic, if any, would be within the Card atom itself (which currently shows a modal).
});

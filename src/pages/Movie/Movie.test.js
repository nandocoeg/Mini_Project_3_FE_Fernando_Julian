import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Movie from './index'; // The page component we are testing

// --- Mocks for Hooks ---
// Import the hooks which will be replaced by mocks via jest.mock below.
// MovieCard will NOT be mocked directly anymore.
import { useGetPopularMoviesQuery, useGetSearchMoviesQuery, useGetUpcomingMoviesQuery } from '../../services/API/movieApi';
// import MovieCard from '../../components/Molecules/MovieCard'; // No longer importing for mocking

jest.mock('../../services/API/movieApi', () => ({
  useGetPopularMoviesQuery: jest.fn(),
  useGetUpcomingMoviesQuery: jest.fn(),
  useGetSearchMoviesQuery: jest.fn(),
}));

// MovieCard is NO LONGER mocked here. We will test its integration.
// jest.mock('../../components/Molecules/MovieCard', () =>
//   jest.fn(() => <div data-testid="mock-movie-card">Mocked MovieCard (Popular)</div>)
// );

// ... (Static components like Banner, Header, Footer, GenreButton, SearchForm are NOT mocked)

const mockPopularMovies = { results: [{ id: 1, title: 'Popular Movie 1', overview: 'Overview Pop', poster_path: 'pop.jpg' }] };
const mockUpcomingMovies = { results: [{ id: 2, title: 'Upcoming Movie 1' }] };
const mockSearchResults = (term) => ({ results: [{ id: 3, title: `Search result for ${term}` }] });


describe('Movie Page (Browse/Search Page)', () => {
  beforeEach(() => {
    // Clear all mocks and set default return values using the imported references
    jest.mocked(useGetPopularMoviesQuery).mockClear().mockReturnValue({ data: mockPopularMovies, isLoading: false, error: null });
    jest.mocked(useGetUpcomingMoviesQuery).mockClear().mockReturnValue({ data: mockUpcomingMovies, isLoading: false, error: null });
    jest.mocked(useGetSearchMoviesQuery).mockClear().mockReturnValue({ data: mockSearchResults("initial"), isLoading: false, error: null });
    // No MovieCard.mockClear() needed as it's not mocked directly.
  });

  test('renders initial layout with Popular and Top-Rated sections', () => {
    render(<MemoryRouter><Movie /></MemoryRouter>);

    // Static elements
    expect(screen.getByText('Search Some Movies')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Action/i })).toBeInTheDocument();

    // Popular Movies section - now testing actual MovieCard rendering via PopularMovies
    // MovieCard internally uses useGetPopularMoviesQuery, which is mocked.
    // Assuming Card atom (child of MovieCard) renders the title:
    expect(screen.getByText('Popular Movies')).toBeInTheDocument(); // Heading from PopularMovies component
    expect(screen.getByText('Popular Movie 1')).toBeInTheDocument();

    // Top-Rated Movies section
    expect(screen.getByText('Top 4 Upcoming Movies')).toBeInTheDocument();
    expect(jest.mocked(useGetUpcomingMoviesQuery)).toHaveBeenCalled();
    // Assuming Card atom is NOT mocked and renders movie titles from TopRatedMovies
    expect(screen.getByText('Upcoming Movie 1')).toBeInTheDocument();


    // SearchMovies section should not be visible initially as searchTerm is empty
    expect(screen.queryByText('Search Results')).not.toBeInTheDocument();

    expect(screen.getByText(/© 2023 Fernando Julian. All rights reserved./i)).toBeInTheDocument();
  });

  test('handles loading state for Top-Rated Movies', () => {
    jest.mocked(useGetUpcomingMoviesQuery).mockReturnValue({ data: null, isLoading: true, error: null });
    render(<MemoryRouter><Movie /></MemoryRouter>);
    // Heading is not rendered in loading state by TopRatedMovies component
    expect(screen.queryByText('Top 4 Upcoming Movies')).not.toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('handles error state for Top-Rated Movies', () => {
    jest.mocked(useGetUpcomingMoviesQuery).mockReturnValue({ data: null, isLoading: false, error: { message: 'Failed to fetch' } });
    render(<MemoryRouter><Movie /></MemoryRouter>);
    // Heading is not rendered in error state by TopRatedMovies component
    expect(screen.queryByText('Top 4 Upcoming Movies')).not.toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  test('search functionality works: triggers search and displays results', async () => {
    const user = userEvent.setup();
    const searchTerm = 'Inception';
    jest.mocked(useGetSearchMoviesQuery).mockReturnValue({
      data: mockSearchResults(searchTerm), isLoading: false, error: null
    });

    render(<MemoryRouter><Movie /></MemoryRouter>);

    const searchInput = screen.getByPlaceholderText('Search'); // Changed from getByRole('searchbox')
    const form = searchInput.closest('form'); // Find form from the input
    const searchButton = form.querySelector('button[type="submit"]');

    await user.type(searchInput, searchTerm);
    expect(searchInput).toHaveValue(searchTerm);

    await user.click(searchButton);

    expect(jest.mocked(useGetSearchMoviesQuery)).toHaveBeenCalledWith(searchTerm);
    expect(screen.getByText('Search Results')).toBeInTheDocument(); // Heading should be present on success
    expect(screen.getByText(`Search result for ${searchTerm}`)).toBeInTheDocument();
  });

  test('handles loading and error states for search results', async () => {
    const user = userEvent.setup();
    const searchTerm = 'LoadingSearch';

    jest.mocked(useGetSearchMoviesQuery).mockReturnValueOnce({ data: null, isLoading: true, error: null });

    render(<MemoryRouter><Movie /></MemoryRouter>);

    const searchInput = screen.getByPlaceholderText('Search'); // Changed from getByRole('searchbox')
    const form = searchInput.closest('form');
    const searchButton = form.querySelector('button[type="submit"]');

    await user.type(searchInput, searchTerm);
    await user.click(searchButton);

    expect(jest.mocked(useGetSearchMoviesQuery)).toHaveBeenCalledWith(searchTerm);
    // Heading is not rendered in loading state by SearchMovies component
    expect(screen.queryByText('Search Results')).not.toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    const errorSearchTerm = "ErrorSearch";
    jest.mocked(useGetSearchMoviesQuery).mockReturnValueOnce({ data: null, isLoading: false, error: { message: 'Search failed'} });

    await user.clear(searchInput);
    await user.type(searchInput, errorSearchTerm);
    await user.click(searchButton);

    expect(jest.mocked(useGetSearchMoviesQuery)).toHaveBeenCalledWith(errorSearchTerm);
    // Heading is not rendered in error state by SearchMovies component
    expect(screen.queryByText('Search Results')).not.toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  // Note: Testing PopularMovies loading/error requires its internal MovieCard to handle those,
  // or PopularMovies itself to have loading/error states based on MovieCard's hook.
  // Since MovieCard is mocked directly, we are not testing its loading/error states here,
  // only that it's rendered.
});

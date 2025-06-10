import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // Needed for page components
import Home from './index';
// BannerHome and Footer will be imported by Home.js, we will not mock them here.
// We will not mock ButtonStart anymore. We will test its actual rendering via BannerHome.
// import { ButtonStart } from '../../components/Atoms/Button'; // No longer needed for mocking


// No longer mocking Button module here, or BannerHome/Footer.

// BsCameraReels is an icon, often tricky to test directly unless vital.
// We'll focus on text content around it.

describe('Home Page', () => {
  // No beforeEach needed for ButtonStart mock clearing anymore

  test('renders main static content correctly, including actual BannerHome, ButtonStart, and Footer content', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Check for content from BannerHome
    expect(screen.getByText(/Incididunt culpa exercitation sint laboris minim mollit qui/i)).toBeInTheDocument();
    // Check for actual ButtonStart text, rendered by BannerHome
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument();

    // Check for content from Footer
    expect(screen.getByText(/© 2023 Fernando Julian. All rights reserved./i)).toBeInTheDocument();
    expect(screen.getByText(/Github/i)).toBeInTheDocument(); // Link text from Footer

    // Check for key static text sections from Home.js itself
    // "Subscribe To Your Needs" appears multiple times
    const subscribeTexts = screen.getAllByText('Subscribe To Your Needs');
    expect(subscribeTexts.length).toBe(3); // Exact count based on current Home.js
    subscribeTexts.forEach(textElement => {
      expect(textElement).toBeInTheDocument();
    });

    // "Stories you'd expect" appears multiple times
    const storiesTexts = screen.getAllByText("Stories you'd expect");
    expect(storiesTexts.length).toBe(2); // Exact count
    storiesTexts.forEach(textElement => {
      expect(textElement).toBeInTheDocument();
    });

    // Check for key phrase in paragraph texts from Home.js
    expect(screen.getAllByText(/Eu aliqua nostrud dolor voluptate reprehenderit incididunt/i).length).toBe(3);
    expect(screen.getAllByText(/Disney\+ Hotstar is the streaming home of Disney, Pixar, Marvel/i).length).toBe(2);

    // Check for images by alt text from Home.js
    expect(screen.getByAltText('Banner 1')).toBeInTheDocument();
    expect(screen.getByAltText('Banner 2')).toBeInTheDocument();

    // Check for the placeholder "1, 2, 3" grid from Home.js
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  // Note: The subtask mentions testing dynamic data loading (popular movies, upcoming, genres),
  // API call mocking, and loading/error states from these calls.
  // The current Home.js component (as of the last file read) is static and does not implement
  // these features or include child components that would manage such dynamic data.
  // Therefore, these aspects of the subtask cannot be tested against the current component code.
  // If Home.js is updated to include these dynamic sections, further integration tests would be needed.
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonStart, DetailButton, SearchButton } from './index';

describe('Button Components', () => {
  describe('ButtonStart', () => {
    test('renders with default text "Get Started"', () => {
      render(<ButtonStart />);
      expect(screen.getByText('Get Started')).toBeInTheDocument();
    });

    test('renders with custom text', () => {
      render(<ButtonStart text="Launch Now" />);
      expect(screen.getByText('Launch Now')).toBeInTheDocument();
    });

    test('calls onClick handler when clicked', () => {
      const handleClick = jest.fn();
      render(<ButtonStart onClick={handleClick} />);
      fireEvent.click(screen.getByText('Get Started'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies custom className', () => {
      render(<ButtonStart className="extra-class" />);
      const button = screen.getByText('Get Started').closest('button');
      expect(button).toHaveClass('extra-class');
    });
  });

  describe('DetailButton', () => {
    test('renders with default text "Detail"', () => {
      render(<DetailButton />);
      expect(screen.getByText('Detail')).toBeInTheDocument();
    });

    test('renders with custom text', () => {
      render(<DetailButton text="View Info" />);
      expect(screen.getByText('View Info')).toBeInTheDocument();
    });

    test('calls onClick handler when clicked', () => {
      const handleClick = jest.fn();
      render(<DetailButton onClick={handleClick} />);
      fireEvent.click(screen.getByText('Detail'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies custom className', () => {
      render(<DetailButton className="another-class" />);
      const button = screen.getByText('Detail').closest('button');
      expect(button).toHaveClass('another-class');
    });
  });

  describe('SearchButton', () => {
    test('renders with default text "Search"', () => {
      render(<SearchButton />);
      expect(screen.getByText('Search')).toBeInTheDocument();
    });

    test('renders with custom text', () => {
      render(<SearchButton text="Find" />);
      expect(screen.getByText('Find')).toBeInTheDocument();
    });

    test('calls onClick handler when clicked', () => {
      const handleClick = jest.fn();
      render(<SearchButton onClick={handleClick} />);
      fireEvent.click(screen.getByText('Search'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies custom className', () => {
      render(<SearchButton className="search-style" />);
      const button = screen.getByText('Search').closest('button');
      expect(button).toHaveClass('search-style');
    });
  });
});

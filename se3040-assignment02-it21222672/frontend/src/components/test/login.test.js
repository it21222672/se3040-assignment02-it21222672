import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Required for testing navigation
import Login from '../login'; // Import the Login component

// Mock Firebase authentication (replace with your actual implementation)
jest.mock('../firebaseConfig', () => ({
  auth: jest.fn().mockReturnValue({
    signInWithEmailAndPassword: jest.fn((email, password) => {
      if (email === 'valid@example.com' && password === 'valid-password') {
        return Promise.resolve({ user: { uid: '123' } });
      } else {
        return Promise.reject(new Error('Invalid email or password'));
      }
    }),
  }),
}));

describe('Login component', () => {
  it('renders correctly and displays appropriate elements', () => {
    render(<Login />, { wrapper: BrowserRouter });

    expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/don't have an account/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /create account/i })).toBeInTheDocument();
  });

  
});

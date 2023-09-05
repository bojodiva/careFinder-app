import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SignUp from './SignUp';



test('should allow a user to sign up successfully', async () => {
  render(<SignUp />);

  fireEvent.change(screen.getByPlaceholderText('Enter username'), { target: { value: 'testuser' } });
  fireEvent.change(screen.getByPlaceholderText('Enter your email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('Enter your password'), { target: { value: 'securePassword!1' } });

 
  fireEvent.click(screen.getByText('Sign Up'));

  
  await screen.findByText('Your account has been created successfully');
});

test('should display validation errors for invalid inputs', () => {
  render(<SignUp />);

  fireEvent.click(screen.getByText('Sign Up'));

  expect(screen.getByText('Username is required')).toBeInTheDocument();
  expect(screen.getByText('Email is required')).toBeInTheDocument();
  expect(screen.getByText('Password is required')).toBeInTheDocument();
});

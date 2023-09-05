import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LogIn from './LogIn'; 

test('renders the Login component', async () => {
  const { getByText, getByLabelText, getByRole } = render(<LogIn />);

  
  const usernameInput = getByLabelText('username*');
  const emailInput = getByLabelText('email*');
  const passwordInput = getByLabelText('password*');
  const submitButton = getByRole('button', { name: 'LogIn' });

  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(getByText('Redirecting to the home page...')).toBeInTheDocument();
  });
});

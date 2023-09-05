

import { handleEmailChange, Errors, User } from './LogIn';

describe('handleEmailChange function', () => {
  it('should validate email correctly', () => {
    const event = {
      target: {
        value: '',
      },
    } as React.ChangeEvent<HTMLInputElement>;

    const user = {
      userName: '',
      email: '',
      password: '',
    };

    const errors: Errors = {};

    const setUser = (updatedUser: User) => {};
    const setErrors = (updatedErrors: Errors) => {};

    handleEmailChange(event, user, errors, setUser, setErrors);

    expect(errors.email).toBe('Email is required');
  });

  it('should validate valid email correctly', () => {
    const event = {
      target: {
        value: 'test@example.com',
      },
    } as React.ChangeEvent<HTMLInputElement>;

    const user = {
      userName: '',
      email: '',
      password: '',
    };

    const errors: Errors = {};

    const setUser = (updatedUser: User) => {};
    const setErrors = (updatedErrors: Errors) => {};

    handleEmailChange(event, user, errors, setUser, setErrors);

    expect(errors.email).toBe('');
  });
});


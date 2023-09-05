import { handlePasswordChange } from './SignUp'; 

interface Errors {
    userName?: string;
    email?: string;
    password?: string;
    login?: string;
  }


describe('handlePasswordChange function', () => {
  it('should validate password correctly', () => {
   
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

    
    const setUser = (updatedUser) => {};
    const setErrors = (updatedErrors) => {};

    
    handlePasswordChange(event, user, errors, setUser, setErrors);

    expect(errors.password).toBe('Password is required');
  });

});

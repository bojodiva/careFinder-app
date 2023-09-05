import React, { useState, ChangeEvent, FormEvent } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase';
import picture1 from '../images/carefinder-logo2.png';
import { NavLink, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

interface User {
  userName: string;
  email: string;
  password: string;
}

interface Errors {
  userName?: string;
  email?: string;
  password?: string;
  login?: string;
}

export const handlePasswordChange = (
  event: ChangeEvent<HTMLInputElement>,
  user: User,
  errors: Errors, 
  setUser: React.Dispatch<React.SetStateAction<User>>, 
  setErrors: React.Dispatch<React.SetStateAction<Errors>> 
  ) => {
   const value = event.target.value;
   const validationErrors: Errors = {};
   let count = 0;

   if (value.trim() === '') {
     validationErrors.password = 'Password is required';
   } else {
     for (let i = 0; i < value.length; i++) {
       const digits = "!@#$%^&*()_+{}[]:;<>,.?~`|-=/0123456789";
       if (digits.includes(value[i])) {
         count++;
       }
     }

     if (count < 2) {
       validationErrors.password = 'Password must contain at least two special characters';
     } else if (value.length < 6) {
       validationErrors.password = 'Password must be at least 6 characters long';
     }
   }
   setUser({ ...user, password: value });
   setErrors({ ...errors, ...validationErrors });
 };

export default function SignUp() {
  const [user, setUser] = useState<User>({
    userName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const signUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = user;

    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        console.log('Redirecting to the home page...');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        let errorMessage = 'An unknown error occurred. Please try again.';

        if (error.code === 'auth/user-not-found') {
          errorMessage = 'User not found. Please check your email and try again.';
        } else if (error.code === 'auth/wrong-password') {
          errorMessage = 'Incorrect password. Please check your password and try again.';
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Invalid email. Please provide a valid email address.';
        }

        setErrors({ login: errorMessage });
      })
      .finally(() => {
        setIsLoading(false);
        setUser({
          userName: '',
          email: '',
          password: '',
        });
      });
  };


  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const validationErrors: Errors = {};

    if (value.trim() === '') {
      validationErrors.email = 'Email is required';
    } else if (!value.includes('@')) {
      validationErrors.email = 'Provide a valid email';
    }

    setUser({ ...user, email: value });
    setErrors({ ...errors, ...validationErrors });
  };

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUser({ ...user, userName: value });
  };

  const isFormValid = !errors.password && !errors.email;

  return (
    <div className="login--container">
      <div className="form--container">
        <form onSubmit={signUp} className="form">
          <h1 className="login--big-text">Create An Account</h1>
          <p className="login--small-text"></p>
          <div className="form--group">
            <label>Username*</label>
            <input
              type="text"
              placeholder="Enter username"
              value={user.userName}
              onChange={handleUserNameChange}
              required
            />
          </div>
          <div className="form--group">
            <label>Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleEmailChange}
            />
            {errors.email && <span className="error--span">{errors.email}</span>}
          </div>
          <div className="form--group">
            <label>Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={(event) => handlePasswordChange(event, user, errors, setUser, setErrors)}
            />
            {errors.password && <span className="error--span">{errors.password}</span>}
          </div>
          {errors.login && <span className="error--span">{errors.login}</span>}
          <div className="form--group">
            <button type="submit" className="btn--submit" disabled={!isFormValid && isLoading}>
              {isLoading ? (<LoadingSpinner />) : 'Sign Up'}
            </button>
          </div>
          <p className="account--already">
            Already have an account? <NavLink className="login--nav-link" to="/login">Login!</NavLink>
          </p>
        </form>
      </div>
      <div className="left--container">
        <div className="nav-logo">
          <img src={picture1} className="logo" alt="logo" />
          <h2 className="logo--name">CareFinder</h2>
        </div>
        <div className="left--remains">
          <div>
            <h1 className="left--big-text">Join Our Community</h1>
            <p className="left--small-text">Enjoy seamless access to medical services.</p>
            <p className="left--foot">TEL: 080CAREFINDER</p>
            <p className="left--foot">&#64;2023 CAREFINDER. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

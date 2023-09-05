import React, { useState,  ChangeEvent, FormEvent } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../components/firebase";
// import picture from "./images/Rectangle-113.png";
import picture1 from "../images/carefinder-logo2.png";
import {NavLink, useNavigate} from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

export interface User {
  userName: string;
  email: string;
  password: string;
}

export interface Errors {
  email?: string;
  password?: string;
  login?: string;
}

export const handleEmailChange = (
  event: ChangeEvent<HTMLInputElement>,
  user: User,
  errors: Errors,
  setUser: (user: User) => void,
  setErrors: (errors: Errors) => void
) => {
     const value = event.target.value;
     const validationErrors: Errors = {}

      
      if (value.trim() === '') {
      validationErrors.email = 'Email is required';
      }else if(!value.includes('@')){
       validationErrors.email = 'provide a valid email';
      } else {
      validationErrors.email = ''
    
    }
      
      setUser({ ...user, email: value });
    setErrors({ ...errors, ...validationErrors });
  }

 const LogIn: React.FC = () => {
  const [user, setUser] = useState<User>({
    userName: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false)
 
  const navigate = useNavigate();

  const logIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true)
    
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredentials) => {
      console.log(userCredentials);
      console.log('Redirecting to the home page...');
      navigate("/");
    })
    .catch((error) => {
      console.log(error)
       let errorMessage = "An unknown error occurred. Please try again.";

      if (error.code === "auth/user-not-found") {
        errorMessage = "User not found. Please check your email and try again.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please check your password and try again.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email. Please provide a valid email address.";
      }

      setErrors({ login: errorMessage })

      
   })
   .finally(() => {
      setIsLoading(false);
    setUser({
      userName: "",
      email: "",
      password: "",
    })
    });

  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const validationErrors: Errors = {}
    let count = 0;
      
      if (value.trim() === '') {
      validationErrors.password = 'Password is required';
    }else{
         for (let i = 0; i <= value.length; i++) {
           let digits = "!@#$%^&*()_+{}[]:;<>,.?~`|-=/0123456789";
            if(digits.includes(value[i])){
              count++;
            }
         }
        
         if(count < 2){
              validationErrors.password = "password must contain at least two special character";
       } else if (value.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
      } else {
      validationErrors.password = ''
     }
       
 }
    setUser({ ...user, password: value });
    setErrors({ ...errors, ...validationErrors });
  }



  function handleUserNameChange(event){
    const value = event.target.value;
    setUser({...user, userName: value })
  }



const isFormValid = !errors.password && !errors.email;
                                   

  return (
    <div className='login--container'>
      <div className="form--container">
      <form onSubmit={logIn} className="form">
        <h1 className="login--big-text">Welcome Back</h1>
        <p className="login--small-text">Login using correct details</p>
      <div className="form--group">
        <label>username*</label>
      <input type="text" placeholder="Enter your username" value={user.userName} onChange={ handleUserNameChange} required/>
        </div>
      <div className="form--group">
        <label>email*</label>
      <input type="email" placeholder="Enter your email" value={user.email} 
       onChange={(event) => handleEmailChange(event, user, errors, setUser, setErrors)} />
         {errors.email && <span className="error--span">{errors.email}</span>}
        </div>
      <div className="form--group">
        <label>password*</label>
      <input type="password" placeholder="Enter your password" value={user.password} onChange={handlePasswordChange} />
        {errors.password && <span className="error--span">{errors.password}</span>}
        </div>
          {errors.login && <span className="error--span">{errors.login}</span>}
        <div className="form--group">
      <button type="submit" className="btn--submit" disabled={!isFormValid && isLoading}>
        {isLoading ? <LoadingSpinner/> : "LogIn"}
      </button>
        </div>
        <p className="account--already">Don't have an account? <NavLink className="login--nav-link" to="/signup">Signup!</NavLink></p>
      </form>
        </div>
     
        <div className="left--container">
           <div className='nav-logo'>
             <img src={picture1} className="logo" alt="logo"></img>
             <h2 className='logo--name'>CareFinder</h2>
           </div>
          <div className='left--remains'>
            <div>
          <h1 className='left--big-text'>Join Our Community</h1>
          <p className='left--small-text'>Enjoy seamless access to medical services.</p>
             
                <p className="left--foot">TEL:080CAREFINDER</p>
                <p className="left--foot">&#64;2023 CAREFINDER. ALL RIGHTS RESERVED</p>
              </div>
            </div>
        </div>
     
    </div>
        )};

export default LogIn;

    

import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import picture from "../images/doctor-celsius.png";
import picture1 from "../images/doctor-kingsley.png";
import picture2 from "../images/doctor-olawale.png";
import picture3 from "../images/doctor-ngozi.png";
import picture4 from "../images/check--logo.png";
import { ref, onValue } from 'firebase/database';
 import {database} from "../components/firebase";
import AuthCheck from "../components/AuthCheck";


export default function Contact(){
  const isLoggedIn = AuthCheck();

  const navigate = useNavigate();

  const[selectOption, setSelectOption] = useState({
     first: "",
     second: "",
     third: "",
     fourth: "",
     name: "",
     address: "",
     email: "",
  });

  const [hospitals, setHospitals] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({})

  function handleOptionChange(event){
     setSelectOption({...selectOption, [event.target.id]: event.target.value })
  }

  useEffect(() => {
    const hospitalsRef = ref(database, "hospitals");
  
    const unsubscribe = onValue(hospitalsRef, (snapshot) => {
      const data = snapshot.val();
      const hospitalsArray = data ? Object.values(data) : [];
      setHospitals(hospitalsArray);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);

  function handleEmailChange(event){
    const value = event.target.value
    const validationErrors = {};

      
      if (value.trim() === '') {
      validationErrors.email = 'Email is required';
      }else if(!value.includes('@')){
       validationErrors.email = 'provide a valid email';
      } else {
      validationErrors.email = ''
    
    }
      
      setSelectOption({ ...selectOption, email: value });
    setErrors({ ...errors, ...validationErrors });
  }

  function handleSubmit(event){
    event.preventDefault();
    if(!isLoggedIn){
      navigate("/signup");
      return;
    }
    setSelectOption ({
      first: "",
      second: "",
      third: "",
      fourth: "",
      name: "",
      address: "",
      email: "",
    });

      setSubmitted(true);
    }

    const isFormValid = errors.email
  

  return(
    <>
      <div className="contact--container">
        <div>
          <h1 className="doctor--heading">QUALIFIED DOCTORS</h1>
        <div className="contact--doctor-section">
          <div className="doctor1">
            <img src={picture} className="contact--photos" alt="doctor"></img>
            <h1 className="doctor--name">Dr Celsus Undie</h1>
            <p>Urologist</p>
            <p>Kelina hospital</p>
          </div>
          <div className="doctor2">
            <img src={picture1} className="contact--photos" alt="doctor1"></img>
            <h1 className="doctor--name">Dr Kingsley Ekwe</h1>
            <p>Orthopedic Surgeon</p>
            <p>National Hospital</p>
          </div>
          <div className="doctor3">
            <img src={picture2} className="contact--photos" alt="doctor2"></img>
            <h1 className="doctor--name">Dr Olawale Sulaiman</h1>
            <p>Neuro Surgeon</p>
            <p>Abuja</p>
          </div>
          <div className="doctor4">
            <img src={picture3} className="contact--photos" alt="doctor3"></img>
            <h1 className="doctor--name">Dr Ngozi Okonkwo</h1>
            <p>Gynecologist</p>
            <p>Ikeja Medical Center</p>
          </div>
        </div>
          </div>
          <div className="form--container">
            {submitted ? (
              <div>
              <img src={picture4} className="check--logo" alt="check"></img>
            <p className="form--submitted">Your appointment has been booked successfully</p>
            </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-heading">Book An Appointment</h1>
          <div className="form_group">
            <label htmlFor="address"></label>
            <textarea type="text" placeholder="Enter Address" id="address" onChange={handleOptionChange} required></textarea>
          </div>
            <div className="form_group">
           <select id="first" value={selectOption.first} onChange={handleOptionChange}>
             <option value="" disabled>Choose Hospital</option>
             {hospitals.map((hospitalName, index) => (
          <option key={index}>
            {hospitalName.name}
          </option>
        ))}
           </select>
              </div>
             <div className="form_group">
           <select id="second" value={selectOption.second} onChange={handleOptionChange}>
             <option value="" disabled>Choose Department</option>
             <option>General Surgery</option>
             <option>Cardiology</option>
             <option>Pathology</option>
             <option>Urology</option>
             <option>Radiology</option>
             <option>Orthopedics</option>
             <option>Neurology</option>
           </select>
              </div>
              <div className="form_group">
            <label htmlFor="name"></label>
            <input type="text" placeholder="Enter Name" id="name" value={selectOption.name} onChange={handleOptionChange} required ></input>
          </div>
              <div className="form_group">
            <label htmlFor="email"></label>
            <input type="text" placeholder="Enter Email" value={selectOption.email} onChange={handleEmailChange} required></input>
            {errors.email && <p className="error--message">Enter a valid email</p>}
          </div>
             <div className="form_group">
              <label htmlFor="date"></label>
           <input id="third" type="date" min="2023-09-31" value={selectOption.third} onChange={handleOptionChange}>
             {/* <option value="" disabled selected>Select Date</option> */}
           </input>
              </div>
              <div className="form_group">
                <label htmlFor="time"></label>
           <input id="fourth" placeholder="Enter date e.g 13:00 WAT" value={selectOption.fourth} onChange={handleOptionChange}>
             {/* <option value="" disabled selected>Select Time</option> */}
           </input>
              </div>
             <div className="form_group">
           <button id="btn" className="btn-submit" type="submit" disabled={isFormValid}>Submit</button>
            </div>
          </form>
          )}  
        </div>
      </div>
    </>
  )
}
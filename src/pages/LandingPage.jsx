import React from "react";
import picture from "../images/background-photo.png"
import {NavLink} from 'react-router-dom'
import MoreAbout from "../pages/MoreAbout.jsx";
import About from "../pages/About.jsx";
import BookAppointment from "../pages/BookAppointment.jsx";
import Testimonial from "../pages/Testimonial.jsx";


export default function LandingPage(){

  return(
    <>
     <div className="home--container">
       <div className='flex--container'>
       <div className="home--text">
         <div>
         <h1 className="head--text">Find the nearest hospital to you and make an appointment</h1>
         <p className='base--text'>Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!</p>
           <div className="start--link-container">
         <NavLink to='/search' className="start--link">Get Started</NavLink>
             </div>
           <div>
         <NavLink to="/about" className="learn--link">Learn more&#8594;</NavLink>
             </div>
       </div>
       </div>
       <div className="home--background">
         <img src={picture} className='photo' alt="care"></img>
       </div>
         </div>
       <div className="search--section">
         <div>
         <p className="top--label">Find a nearby hospital</p>
         <input type="text" className="search--input"></input>
          </div>
       </div>
     </div>
      
      <About/>
      <MoreAbout/>
      <BookAppointment/>
      <Testimonial/>
    </>
  )
}
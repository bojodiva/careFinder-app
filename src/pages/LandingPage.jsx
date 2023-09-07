import React from "react";
// import picture from "../images/background-photo.png"
import {NavLink} from 'react-router-dom'
import MoreAbout from "../pages/MoreAbout.jsx";
import AboutBody from "../pages/AboutBody.jsx";
import BookAppointment from "../pages/BookAppointment.jsx";
import Testimonial from "../pages/Testimonial.jsx";
import NavBar from "../components/NavBar.jsx";
import NavBar2 from "../components/NavBar2.jsx";
import AuthCheck from "../components/AuthCheck";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';



export default function LandingPage(){
   const isLoggedIn = AuthCheck();

  return(
    <>
     {isLoggedIn ? <NavBar2/> : <NavBar/> }
     <div className="home--container">
      <Helmet>
        <title>CareFinder</title>
        <meta name="description" content="Find the nearest hospital to you and make an appointment" />
        <meta name="keywords" content="hospital, anywhere, anytime"/>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/carefinder-logo2.png" />
      </Helmet>
     <div className="flex--container">
       {/* <div className="home--text"> */}
         <div className="home--text">
         <h1 className="head--text">Find the nearest hospital to you and make an appointment</h1>
         <p className='base--text'>Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!</p>
           <div className="start--link-container">
         <NavLink to='/signup' className="start--link">Get Started</NavLink>
             </div>
           <div>
         <NavLink to="/about" className="learn--link">Learn more&#8594;</NavLink>
             </div>
       {/* </div> */}
       </div>
       </div>

    
     </div>
      
      <AboutBody/>
      <MoreAbout/>
      <BookAppointment/>
      <Testimonial/>
      <Footer/>
    </>
  )
}
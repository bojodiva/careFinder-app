import React from "react";
import picture from "../images/Rectangle-7.png";
import picture2  from "../images/Rectangle-8.png";
import {NavLink} from 'react-router-dom';
 import NavBar from "../components/NavBar.jsx";
  import NavBar2 from "../components/NavBar2.jsx";
 import Footer from "../components/Footer.jsx";
 import AuthCheck from "../components/AuthCheck";

export default function About(){
  const isLoggedIn = AuthCheck();
  return(
    <>
    { isLoggedIn ? <NavBar2/> : <NavBar/>}
   <div className="about--section">
     <div className="about--photos-container">
       <div>
       <img src={picture} className="about--photo1" alt="about-photo1"></img>
         </div>
       <div>
       <img src={picture2} className="about--photo2" alt="about-photo2"></img>
         </div>
     </div>
     <div className="about--text">
       <div>
       <h1>Welcome to</h1>
       <h1 className="special--name">CareFinder</h1>
       <p className="about--paragraph">Carefinder is a platform where users can search for hosiptals in their areas, export hospital details for your records and enhance your healthcare experience by connecting with others and sharing valuable resources.</p>
         
        <h2 className='about--link-container'> <NavLink to="/search" className='about--link'>Our Services</NavLink></h2>
         </div>
     </div>
   </div>
   <Footer/>
    </>
  )
}
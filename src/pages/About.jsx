import React from "react";
import picture from "../images/Rectangle-7.png";
import picture2  from "../images/Rectangle-8.png";
import {NavLink} from 'react-router-dom';

export default function About(){
  return(
    <>
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
         
        <h2 className='about--link-container'> <NavLink className='about--link'>Our Services</NavLink></h2>
         </div>
     </div>
   </div>
    </>
  )
}
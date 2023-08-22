import React, { useEffect, useState } from 'react';
import {Outlet, NavLink} from "react-router-dom"
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import picture from "./images/carefinder-logo.png";
import picture1 from "./images/avatar--profile.png";


export default function UserProfile() {
  return (
    <>
      <div>
        <div className='profile--nav'>
  <div className='nav--logo'>
     <img src={picture} className="logo"></img>
      <h2 className='logo--name'>CareFinder</h2>
      </div>
          
            <div className="image--container">  
                <img src={picture1}
        className="avatar" 
        alt="Clickable Image"
        style={{ cursor: 'pointer' }}>
      </img>
 </div>
</div>
        <div className="profile--container">
        <div className="profile--links">
          <div>
          <NavLink to="/profile/user" className="profile--link">Profile Details</NavLink>
          <NavLink className="profile--link">Find Hospital</NavLink>
          <NavLink className="profile--link">Book An Appointment</NavLink>
          <NavLink className="profile--link">Home</NavLink>
          <NavLink className="profile--link">Library</NavLink>
          <NavLink to="/profile/add-hospital" className="profile--link">Add Hospital</NavLink>
            </div>
        </div>
          <div>
             <Outlet/>
            </div>
          </div>
        </div>
      </>
  );
}





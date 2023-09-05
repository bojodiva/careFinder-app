import React from 'react';
import {Outlet, NavLink} from "react-router-dom"
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import picture from "../images/carefinder-logo.png";
import picture1 from "../images/avatar--profile.png";


export default function UserProfile() {
  return (
    <>
      <div>
        <div className='profile--nav'>
         <div className='nav--logo'>
     <img src={picture} className="logo" alt="logo"></img>
      <h2 className='logo--name'>CareFinder</h2>
      </div>
          
            <div className="image--container">  
                <img src={picture1}
        className="avatar" 
        alt="Clickable"
        style={{ cursor: 'pointer' }}>
      </img>
          </div>
</div>
        <div className="profile--container">
        <div className="profile--links">
          <div className="profile--link-div">
          <NavLink to="/profile/user" className="profile--link">Profile Details</NavLink>
          </div>
          {/* <div className="profile--link-div">
            <NavLink className="profile--link">Find Hospital</NavLink>
          </div> */}
          <div className="profile--link-div">
          <NavLink className="profile--link" to="/profile/book-appointment">Book An Appointment</NavLink>
          </div>
          <div className="profile--link-div">
            <NavLink to="/profile/add-hospital" className="profile--link">Add Hospital</NavLink>
          </div>
          <div className="profile--link-div">
          <NavLink to="/profile/library" className="profile--link">Library</NavLink>
          </div>
          <div className="profile--link-div">
            <NavLink className="profile--link" to="/">Home</NavLink>
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





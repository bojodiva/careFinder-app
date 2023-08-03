import React from "react"
import picture from "../images/doctor-celsius.png";
import picture1 from "../images/doctor-kingsley.png";
import picture2 from "../images/doctor-olawale.png";
import picture3 from "../images/doctor-ngozi.png";

export default function Contact(){
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
            <h1 className="form-heading">Book An Appointment</h1>
          <form className="form">
          <div className="form_group">
            <label for="address"></label>
            <input type="text" placeholder="Address" required></input>
          </div>
            <div className="form_group">
           <select>
             <option value="" disabled selected>Choose Hospital</option>
           </select>
              </div>
             <div className="form_group">
           <select>
             <option value="" disabled selected>Choose Department</option>
           </select>
              </div>
              <div className="form_group">
            <label for="name"></label>
            <input type="text" placeholder="Enter Name" required></input>
          </div>
              <div className="form_group">
            <label for="email"></label>
            <input type="text" placeholder="Enter Email" required></input>
          </div>
             <div className="form_group">
           <select>
             <option value="" disabled selected>Select Date</option>
           </select>
              </div>
              <div className="form_group">
           <select>
             <option value="" disabled selected>Select Time</option>
           </select>
              </div>
             <div className="form_group">
           <button id="btn" className="btn-submit" type="submit" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
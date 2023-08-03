import React from "react";
import picture from "../images/fontisto_doctor.svg";
import picture1 from "../images/mingcute_save-line.svg";
import picture2 from "../images/ph_share-bold.svg";
import picture3 from "../images/streamline-emojis_hospital.svg";

export default function MoreAbout(){
  return(
    <>
      <div>
        <div className="more--about-section">
          <div className="each--about-container">
          <img src={picture3} className="more--about-icons" alt="icon3"></img>
            <h1 className="big--text">Search Hospital</h1>
            <p>Effortlessly Find the Best Hospitals Near You</p>
          </div>
          <div className="each--about-container">
            <img src={picture} className="more--about-icons" alt="icon2"></img>
            <h1 className="big--text">Search Doctors</h1>
            <p>Effortlessly Find the Best Doctors Near You</p>
          </div>
          <div className="each--about-container">
            <img src={picture1} className="more--about-icons" alt="icon"></img>
            <h1 className="big--text">Export Hospital</h1>
            <p>Save list of hospitals.</p>
          </div>
          <div className="each--about-container">
            <img src={picture2} className="more--about-icons" alt="icon1"></img>
            <h1 className="big--text">Share Hospital</h1>
            <p>Share the list of hospitals with others.</p>
          </div>
        </div>
        </div>
    </>
  )
}
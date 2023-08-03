import React from "react";
import picture from "../images/material-symbols_search.svg";
import picture2 from "../images/Rectangle-57.png";
import picture3 from "../images/Rectangle-58.svg";
import picture4 from "../images/Rectangle-59.png";
import picture5 from "../images/Rectangle-60.png"

export default function FindHospital(){
  return(
    <>
      <div>
        <div className="hospital--search-container">
          <div className="hospital--search-field">
            <input type="text" className="hospital--search-input"></input>
            <img src={picture} className="search--icon" alt="search-icon"></img>
          </div>
        </div>

        <div className="hospital--second-section">
          <div>
          <img src={picture2} alt="hospital1"></img>
            <h4>Eve Foundation Hospital </h4>
            <h4>32, Admiralty way</h4>
            <p>See More...</p>
          </div>
          
          <div>
            <img src={picture3} alt="hospital2"></img>
            <h4>Nigerian Police Hospital</h4>
            <h4>Falomo</h4>
            <p>See More...</p>
          </div>
             
          <div>
            <img src={picture4} alt="hospital3"></img>
            <h4>Gold cross Hospital </h4>
            <h4> Bourdillon Road</h4>
            <p>See More...</p>
          </div>
          
          <div>
            <img src={picture5} alt="hospital4"></img>
            <h4>Mayo Clinic </h4>
            <h4>12, Femi Okunnu Road</h4>
            <p> See More...</p>
          </div>
        </div>
      </div>
    </>
  )
}
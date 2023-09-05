import React from "react";
import picture2 from "../images/Rectangle-57.png";
import picture3 from "../images/Rectangle-58.svg";
import picture4 from "../images/Rectangle-59.png";
import picture5 from "../images/Rectangle-60.png";
import GetHospital from "./GetHospital.jsx";
import NavBar from "../components/NavBar.jsx";
import NavBar2 from "../components/NavBar2.jsx";
import Footer from "../components/Footer.jsx";
import {NavLink} from "react-router-dom";
import AuthCheck from "../components/AuthCheck";

export default function FindHospital(){
  const isLoggedIn = AuthCheck();
  return(
    <>
      {isLoggedIn ? <NavBar2 /> : <NavBar />}
      <div>
        <GetHospital/>

       <h1 className='result--heading'>Hospitals Nearby</h1>

        <div className="hospital--second-section">  
          <div>
          <img src={picture2} alt="hospital1"></img>
            <h4>Osuntuyi Medical Centre</h4>
            <h4>225Iju Road, Ifako-Ijaiye 101232, Ikeja, Lagos</h4>
            <NavLink to="/search/individual/-NawIh3PGDRnpZh8O-Zd" className="see--more">See More...</NavLink>
          </div>
          
          <div>
            <img src={picture3} alt="hospital2"></img>
            <h4>Bechs Specialist Hospital </h4>
            <h4>33, psychiatric hospital road, Rumuigbo, port Harcourt </h4>
            <NavLink to="/search/individual/-Nc7dcP5RsT6JpoO1u7y" className="see--more">See More...</NavLink>
          </div>
             
          <div>
            <img src={picture4} alt="hospital3"></img>
            <h4>Cozar Specialist Hospital </h4>
            <h4>No.6 main school road, off hospital road, eket</h4>
            <NavLink to="/search/individual/-NbGJDIhVknpPJHd9QGA" className="see--more">See More...</NavLink>
          </div>
          
          <div>
            <img src={picture5} alt="hospital4"></img>
            <h4>Afrimed specialist Hospital </h4>
            <h4>1B, Williams street, behind GTbank, sawmill, gbagada</h4>
            <NavLink to="/search/individual/-Nc7ZgK6r6ptibFx1WVu" className="see--more"> See More...</NavLink>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import About from "../pages/About";
import FindHospital from "../pages/FindHospital";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp"
import NavBar from "./NavBar";
import Footer from "./Footer";


export default function GeneralRouter(){
    const currentPath = window.location.pathname;

  return(
    <>
       <nav>
        {currentPath !== "/login" && <NavBar/>}
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
              
                <Route path="/about" element={<About/>}/>
                <Route path="/search" element={<FindHospital/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="*" element={<h1 className="error--note">Not Found</h1>}/>
          </Routes>

          {currentPath !== "/login" && <Footer/>}
        </nav>
    </>
  )
}
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import About from "../pages/About";
import FindHospital from "../pages/FindHospital";
import LogIn from "../pages/LogIn.tsx";
import SignUp from "../pages/SignUp.tsx";
import UserProfile from "../pages/UserProfile.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import DataForm from "../pages/AddHospital.jsx";
import IndividualHospital from "../pages/IndividualHospital";
import BookAppointment from "../pages/BookAppointment";
import Library from "../pages/Library";
import { DataProvider } from "./DataContext";
import NotFoundPage from "./404Page";
import HospitalMarkdownEditor from "../pages/Markdown";


export default function GeneralRouter(){
    

  return(
    <>
       <nav>
              <DataProvider>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/profile" element={<UserProfile/>}>
                 <Route index  element={<ProfilePage/>}/>
              <Route path="/profile/user" element={<ProfilePage/>}/>
               <Route path="/profile/add-hospital" element={<DataForm/>}/>
                <Route path="/profile/book-appointment" element={<BookAppointment/>}/>
                <Route path="/profile/library" element={<Library/>}/>
             </Route>
                <Route path="/about" element={<About/>}/>
                <Route path="/search" element={<FindHospital/>}/>
                <Route path="/search/individual/:id" element={<IndividualHospital/>} />
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/blog" element={<HospitalMarkdownEditor/>}/>
                <Route path="*" element={<NotFoundPage />}/>
          </Routes>
                </DataProvider>

         
        </nav>
    </>
  )
}
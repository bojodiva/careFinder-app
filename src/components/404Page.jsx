import React from "react";
import {NavLink} from "react-router-dom"

export default function NotFoundPage(){
    return(
        <>
        <div className="not--found-container">
            <div className="not--found">
                <h1 className="number">404</h1>
         <h1 className="not--found-big">Oops! Page Not Found</h1>
         <div className="not--found-small">
        <p>Seems you are trying to access a page that does not exist or was probably deleted.</p>
         <p>We apologize for the incovenience</p>
         </div>
         <NavLink to="/" className="back--home">Back to Home</NavLink>
         </div>
        </div>
        </>
    )
}
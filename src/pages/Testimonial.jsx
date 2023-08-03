import React from "react"
import picture from "../images/testifier1.png";
import picture1 from "../images/testifier2.jpg";
import picture2 from "../images/testifier3.jpg";
import picture3 from "../images/star-icon.svg"


export default function Testimonial(){
  return(
    <>
      <div className="testimonial--section">
<div className="testimony--heading">
  <div className="vertical--line"></div>
  <h2 className="testimony">Testimonials</h2>
</div>

        <div>
          <h1 className="testimony--big-text">What Our Users Say</h1>
        </div>
        
      <div className="review--box-container">
        <div className="review--box">
          <p>Finding the right hospital has never been easier! With this website, I was able to locate a nearby hospital quickly and efficiently. The search feature is user-friendly, and it provided me with all the essential information I needed. Highly recommended</p>
          <div className="star--icon" ><img src={picture3} alt="star1"></img></div>
          <div className="reviewer">
          <img src={picture} alt="reviewer1"></img>
            <h3>Emily T.</h3>
          </div>
        </div>
        <div className="review--box">
         <p>I can not express how grateful I am for carefinder website. When I needed urgent medical care while travelling, it helped me locate the nearest hospital in a matter of seconds. The accurate results and detailed directions saved me valuable time and ensured i received the care i needed</p>
          <div className="star--icon"><img src={picture3} alt="star2"></img></div>
          <div className="reviewer">
          <img src={picture1} className="adjust" alt="reviewer2"></img>
            <h3>Chioma O.</h3>
          </div>
        </div>
        <div className="review--box">
         <p>I recently moved to a new city and had no idea where to go for medical assistance, my friend shared me some hospital details using the carefinder website. It made my life easier, i was able to fine reputable hospitals near me effortlessly. The website’s is user friendly interface and comprehnsive search gave me peace of mind. I highly recommend.</p>
          <div className="star--icon"><img src={picture3} alt="star3"></img></div>
          <div className="reviewer">
          <img src={picture2} className="adjust" alt="reviewer3"></img>
            <h3>Tade G.</h3>
          </div>
        </div>
      </div>
        </div>
    </>
  )
}
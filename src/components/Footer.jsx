import './NavBar.css';
import picture from "../images/carefinder-logo2.png";

export default function Footer(){
  return(
    <>
      <div className="footer--section">
        <div>
          <div className='nav--logo'>
        <img src={picture} className="logo2" alt="foot-logo"></img>
      <h2 className='logo--name'>CareFinder</h2>
            </div>
          <p>Plot 42, Akinza Street, Victoria island, Lagos +2349167351788</p>
        </div>
        <div>
          <h2 className='link--heading'>About Us</h2>
          <p>News &#38; Media</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h2 className='link--heading'>Quick Links</h2>
          <p>My Account</p>
          <p>Book an Appointment</p>
          <p>Library</p>
        </div>
      </div>
    </>
  )
}
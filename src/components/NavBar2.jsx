import './NavBar.css';
import picture from "../images/carefinder-logo.png";
import picture1 from "../images/avatar--profile.png";
import {NavLink, useNavigate} from "react-router-dom";

export default function NavBar(){

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#0c7179" : "black",
      // fontWeight: isActive ? "bold" : "normal",
    };
  };

const navigate = useNavigate();

  function handleImageClick(){
    navigate("/profile");
  }

  function handleLogoClick(){
    navigate("/newhome")
  }
  
  return (
    <>
      <div className="navbar--section">
      <div className='nav--logo'>
        <img src={picture} onClick={handleLogoClick} className="logo" alt="logo"></img>
      <h2 className='logo--name' onClick={handleLogoClick}>CareFinder</h2>
      </div>

      <div className='nav--links'>
        <NavLink to="/" style={navLinkStyle} className='nav--link'>Home</NavLink>
        <NavLink to="/about" style={navLinkStyle} className='nav--link'>About</NavLink>
        <NavLink to="/search" style={navLinkStyle} className='nav--link'>Find Hospital</NavLink>
      </div>

   <div className="image--container">
      <img src={picture1}
        className="avatar" 
        alt="Clickable"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}>
      </img>
 </div>
      </div>  
    </>
  )
}
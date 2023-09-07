import React, { useState, useEffect } from 'react';
import { useParams, NavLink, useNavigate} from 'react-router-dom';
import { ref, get } from 'firebase/database';
import { database } from '../components/firebase';
import picture3 from "../images/Rectangle-67.jpg"
import picture1 from "../images/mingcute_save-line.svg";
import picture2 from "../images/ph_share-bold.svg";
import picture from "../images/star-icon.svg";
import picture4 from "../images/check--logo.png";
import {useData} from "../components/DataContext";
import AuthCheck from '../components/AuthCheck';
import Papa from "papaparse";



export default function IndividualPage() {
  const isLoggedIn = AuthCheck();
  const navigate = useNavigate()
  const { id } = useParams(); 
  const { savedContent, setSavedContent } = useData();

  const [hospitalData, setHospitalData] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  
  useEffect(() => {
    const hospitalRef = ref(database, `hospitals/${id}`);

    get(hospitalRef)
    .then((snapshot) => {
        console.log('Fetched document data:', snapshot.val());
        
        if (snapshot.exists()) {
          setHospitalData(snapshot.val());
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.error('Error fetching document:', error);
      });
  }, [id]);

  if (!hospitalData) {
    return <div>No such document!</div>;
  }


  const csvData = [
    { name: hospitalData.name, address: hospitalData.address, tel: hospitalData.tel },
  ];


  const downloadCSV = () => {
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'data.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };
  
  const handleSave = () => {
    if(!isLoggedIn){
      navigate("/signup");
      return;
    };
    setSavedContent((prevSavedContent) => [...prevSavedContent, hospitalData]);
  };  


    function handleButtonClick(event){
      event.preventDefault();
      if(!isLoggedIn){
        navigate("/signup");
        return;
      }
      setSubmitted(true);
    }

  return (
    <>
    <div className="individual--hospital-container">
    <div>
      <div>
      <img src={picture3} alt="Random" className='individual--photo' />
      </div>
       <div className='icon--container'>
        <img src={picture} className='star--icon' alt="icon"></img>
      <img src={picture1} className="user--icon" onClick={handleSave} alt="icon"></img>
      <img src={picture2} className="user--icon" onClick={downloadCSV} alt="icon"></img>
      </div>
    </div>
    <div className='form--container'>
      {submitted ? (
          <div>
              <img src={picture4} className="check--logo" alt="check"></img>
            <p className="form--submitted">Your appointment has been booked successfully</p>
            <div className='back--home-container'>
             <NavLink to="/search" className="back--home">Back to Home</NavLink>
             </div>
            </div>
      ) : (
      <form className='form' onSubmit={handleButtonClick}>
        <div className="form_group">
      <input type="text" value={hospitalData.name} disabled></input>
        </div>
        <div className="form_group">
      <input type="text" value={hospitalData.address} disabled></input>
      </div>
      <div className="form_group">
      <input type="text" value={hospitalData.tel} disabled></input>
      </div>
      <div className="form_group">
      <input type="text" value="opening 24 Hours" disabled></input>
      </div>
      <div className='form_group'>
      <button className='btn--submit'>Book Appointment Now</button>
      </div>
      <div className='form_group'>
        <NavLink to="/search"className="see--more">&larr; Back</NavLink>
      </div>
      </form>
      )}
    </div>
    </div>
    </>
  );
}



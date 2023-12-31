import React, { useEffect, useState } from 'react';
import { auth } from '../components/firebase';
import UserSignOut from "../components/UserSignOut";
import LoadingSpinner from '../components/LoadingSpinner';

export default function ProfilePage(){
   const [userProfile, setUserProfile] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = () => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      const { email, uid } = currentUser;
      setUserProfile({
        email: email,
        uid: uid,
      });
    } else {
      console.log('User not logged in.');
    }
  };

  useEffect(() => {
    const savedValue1 = localStorage.getItem('name');
    const savedValue2 = localStorage.getItem('address');
    
    if (savedValue1) {
      setName(savedValue1);
    }
    
    if (savedValue2) {
      setAddress(savedValue2);
    }
  }, []);



  const handleFormSave = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('address', address);
  }
  
  return(
    <>
      <div>
         <div className='user--profile'>
      <h1>Profile Details</h1>
      {userProfile ? (
        <div>
          <p>Email: {userProfile.email}</p>
        </div>
      ) : (
        <LoadingSpinner/>
      )}
    </div>
        <div>
          <div>
             <form onSubmit={handleFormSave} className="form">
      <div className="form--group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
</div>
      <div className="form--group">
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={userProfile?.email || ""} disabled/>
</div>
      <div className="form--group">
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" required />
</div>
      <div className="form--group">
      <button type="submit" className="btn--submit">Save</button>
        </div>
    </form>
          </div>
          <UserSignOut/>
        </div>
      </div>
    </>
  )
}
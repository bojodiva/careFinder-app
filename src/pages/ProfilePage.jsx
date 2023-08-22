import React, { useEffect, useState } from 'react';
import { auth } from './components/firebase';
import UserSignOut from "./components/UserSignOut";
import LoadingSpinner from './components/LoadingSpinner';

export default function ProfilePage(){
   const [userProfile, setUserProfile] = useState(null);
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
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

  const handleFormSave = (e) => {
    e.preventDefault();

    const NewName = e.target.elements.name.value;
    const NewAddress = e.target.elements.address.value
    setName(NewName);
    setAddress(NewAddress);
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
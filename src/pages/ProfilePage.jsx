import React, { useEffect, useState } from 'react';
import { auth, storage } from './firebase';
import UserSignOut from "./UserSignOut"

export default function ProfilePage(){
   const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = () => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      const { displayName, email, uid } = currentUser;
      const userName = displayName || "N/A";
      setUserProfile({
        displayName: userName,
        email: email,
        uid: uid,
      });
    } else {
      console.log('User not logged in.');
    }
  };
  
  return(
    <>
      <div>
         <div>
      <h1>User Profile</h1>
      {userProfile ? (
        <div>
          <p>Username: {userProfile.userName}</p>
          <p>Email: {userProfile.email}</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
        <div>
          <UserSignOut/>
        </div>
      </div>
    </>
  )
}

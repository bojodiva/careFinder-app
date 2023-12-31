
import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from "../components/firebase";
import picture from "../images/material-symbols_search.svg";

export default function SearchHospitals({ onSearch }) {
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [searchTerm, setSearchTerm] = useState("");
  const [showBackground, setShowBackground] = useState(true);

  useEffect(() => {
    const hospitalsRef = ref(database, "hospitals");

    const unsubscribe = onValue(hospitalsRef, (snapshot) => {
      const data = snapshot.val();
      const hospitalsArray = data ? Object.entries(data).map(([key, value]) => ({ ...value, key })) : [];
      setHospitals(hospitalsArray);
      setIsLoading(false); 
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSearch = () => {
    const filteredHospitals = hospitals.filter((hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredHospitals); 
    setShowBackground(false)
    setSearchTerm("");
  };

  return (
    <>
      <div className={`${showBackground ? "hospital--search-container" : "" }`}>
        <div className="hospital--search-field">
          <input type="text" className="hospital--search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter the name of hospital..."/>
          <img src={picture} className="search--icon" alt="search-icon" onClick={handleSearch} />
        </div>
      </div>
    </>
  );
}

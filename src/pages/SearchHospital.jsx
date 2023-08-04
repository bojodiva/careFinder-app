import React, { useState, useEffect } from "react";
import { ref, onValue } from 'firebase/database';
import {database} from "./firebase"

export default function SearchHospitals({ onSearch }) {
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    
    const hospitalsRef = ref(database, "hospitals");

    const unsubscribe = onValue(hospitalsRef, (snapshot) => {
      const data = snapshot.val();
     
        const hospitalsArray = data ? Object.values(data) : [];
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
      setSearchTerm("")
  };

  return (
    <>
              <div className="hospital--search-container">
          <div className="hospital--search-field">
            <input type="text" className="hospital--search-input" value={searchTerm} onChange={e) => setSearchTerm(e.target.value)}></input>
            <img src={picture} className="search--icon" alt="search-icon" onClick={handleSearch}></img>
          </div>
        </div>

{/*       <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div> */}
    </>
  );
}

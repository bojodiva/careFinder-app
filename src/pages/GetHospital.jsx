import React, { useState } from 'react';
import SearchHospital from './SearchHospital';
import GetHospitalImage from '../components/GetHospitalImage';
import {NavLink} from "react-router-dom"

export default function GetHospitals(){
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <SearchHospital onSearch={handleSearchResults} />
     
      
      {/* <h1 className='result--heading'>Result(s)</h1> */}
      <div className="result">
  {searchResults.map((result) => (
    <div key={result.key}>
          <GetHospitalImage />
    <ul className='hospital--list'>
      <li className='hospital--list-item'>{result.name}</li>
      <li className='hospital--list-item'>{result.address}</li>
      {/* <li className='hospital--list-item'>{result.tel}</li> */}
     </ul>
     <NavLink to={`/search/individual/${result.key}`} className='see--more'>See More...</NavLink>
     </div>
      ))} 
      </div>
      
    </div>
  );
};

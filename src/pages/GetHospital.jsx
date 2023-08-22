import React, { useState } from 'react';
import SearchHospital from './SearchHospital';

export default function GetHospitals(){
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <SearchHospital onSearch={handleSearchResults} />
     
      <>
  {searchResults.map((result) => (
    <ul key={result.name}>
      <li>{result.name}</li>
      <li>{result.address}</li>
     </ul>
      ))}
      </>
    </div>
  );
};

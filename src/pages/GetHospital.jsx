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
     
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

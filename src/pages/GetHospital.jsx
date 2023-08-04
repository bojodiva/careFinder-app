import React, { useState } from 'react';
import SearchHospitals from './SearchHospitals';

export default function GetHospitals(){
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <SearchHospitals onSearch={handleSearchResults} />
     
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

import React from 'react';
import { useData } from '../components/DataContext';
import picture2 from "../images/ph_share-bold.svg";

export default function LibraryComponent() {
  const { savedContent } = useData();

  return (
    <div>
      <h2 className="library--heading"> Library</h2>
      {savedContent.map((content, index) => (
        <div key={index} className="library--container">
          <div className='library--content'>
          <p>{content.name}</p>
          <p>{content.address}</p>
          <p>{content.tel}</p>
          </div>
          <div>
          <img src={picture2} className="user--icon" alt="icon"></img>
          </div>
          </div>
      ))}
    </div>
  );
}
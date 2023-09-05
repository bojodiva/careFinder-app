import React from 'react';
import imageFile from '../imageData';

function GetHospitalImage() {
  const randomIndex = Math.floor(Math.random() * imageFile.length);
  const randomImageSrc = imageFile[randomIndex];

  return (
    <div>
      <img src={randomImageSrc} alt="Random" />
    </div>
  );
}

export default GetHospitalImage;

import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { database } from '../components/firebase.jsx';

 const DataForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [tel, setTel] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

     const hospitalsRef = ref(database, 'hospitals');
  push(hospitalsRef, {
      name: name,
      address: address,
      tel: tel,
    });

   
    setName('');
    setAddress('');
    setTel('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="form">
      <h1 className="add--big-text">Add Hospitals that you know around you.</h1>
      <div className="form--group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
</div>
      <div className="form--group">
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
</div>
      <div className="form--group">
      <label htmlFor="tel">Tel:</label>
      <input type="number" id="tel" value={tel} onChange={(e) => setTel(e.target.value)} required />
</div>
      <div className="form--group">
      <button type="submit" className="btn--submit">Submit</button>
        </div>
    </form>
  );
};

export default DataForm;


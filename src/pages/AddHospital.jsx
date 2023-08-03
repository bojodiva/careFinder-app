import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const DataForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [tel, setTel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data object to be added to the database
    const newData = {
      name: name,
      address: address,
      tel: parseInt(tel), // Assuming age is a number
    };

    // Get a reference to the 'users' path in the database
    const usersRef = firebase.database().ref('users');

    // Push the new data to the database with a unique key
    usersRef.push(newData);

    // Reset the form fields after successful submission
    setName('');
    setAddress('');
    setTel('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={tel} onChange={(e) => setTel(e.target.value)} />
      </div>
      <button type="submit">Add Data</button>
    </form>
  );
};

export default DataForm;

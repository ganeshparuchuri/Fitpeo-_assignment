import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Form = () => {
  const { username } = useParams();
  const history = useHistory();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  // Fetch existing data if available (e.g., from localStorage)
  useEffect(() => {
    const existingData = localStorage.getItem(username);
    if (existingData) {
      const parsedData = JSON.parse(existingData);
      setPhoneNumber(parsedData.phoneNumber);
      setEmail(parsedData.email);
      setName(parsedData.name);
      setDob(parsedData.dob);
    }
  }, [username]);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleSubmit = () => {
    // Save form data to localStorage
    const formData = {
      phoneNumber,
      email,
      name,
      dob,
    };
    localStorage.setItem(username, JSON.stringify(formData));

    // Navigate to the Result Page
    history.push('/result');
  };

  const handleCancel = () => {
    // Navigate back to the Homepage
    history.push('/');
  };

  return (
    <div className='main-container form-container'>
      <h1>Form Page</h1>
      <form>
        <label>
          Phone Number:
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={handleDobChange} />
        </label>
        <br />
        <button className='submit-btn' type="button" onClick={handleSubmit}>Submit</button>
        <button className='submit-btn' type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default Form;

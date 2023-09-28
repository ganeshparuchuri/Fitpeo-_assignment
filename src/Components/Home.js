import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    if (username) {
      // Navigate to the Form Page with the username
      history.push(`/form/${username}`);
    }
  };

  return (
    <div className='main-container form-container'>
      <h1 >Welcome to the Homepage</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
        style={{marginBottom:"10px"}}
      />
      <button className='submit-btn' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Home;

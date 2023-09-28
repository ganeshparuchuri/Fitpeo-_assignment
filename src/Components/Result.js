import React from 'react';
import { useHistory } from 'react-router-dom';

const Result = () => {
  const history = useHistory();
  const handleReturnHome = () => {
    history.push('/');
  };

  return (
    <div className='main-container form-container'>
      <h1>Result Page</h1>
      <p>Congratulations! Form submitted successfully.</p>
      <button className='submit-btn' onClick={handleReturnHome}>Return to Homepage</button>
    </div>
  );
};

export default Result;

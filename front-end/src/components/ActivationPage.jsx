import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../assets/axiosSingleton.js';
import '../../src/index.css';
import './ActivationPage.css'; // Assuming the CSS file is named ActivationPage.css

function ActivationPage() {
  const [confirmationcode, setConf] = useState('');
  const navigateTo = useNavigate();

  const handleSubmit = async () => {
    try {
      const { status } = await axios.get(`http://127.0.0.1:3000/api/users/confirm/${confirmationcode}`);
      if (status === 200) {
        console.log('confirmed');
        navigateTo('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <h2>Set the confirmation code received in your Gmail</h2>
      <div className='input-container'>
        <input type="text" value={confirmationcode} onChange={(e) => setConf(e.target.value)} />
      </div>
      <div className='button-container'>
        <button onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  );
}

export default ActivationPage;

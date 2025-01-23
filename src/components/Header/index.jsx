import { useState } from 'react';
import './style.css';
import ullrLogo from '../../assets/ullrlogohorizontalyellow.png';

export default function Header() {
  const [showModal, setShowModal] = useState(true);
  const year = new Date().getFullYear().toString().split('');

  const handleRedirect = () => {
    window.location.href = 'https://www.ullrgrass.com/';
  };

  const handleModal = () => {
    setShowModal(false);
  };
  
  return (
    <div className="header">
      <div className="logo-wrapper">
        <div className={showModal ? 'show-modal' : 'hide-modal'}>
          <div className="close-modal-btn" onClick={() => handleModal()}>X</div>
          <button className="redirect-btn" onClick={() => handleRedirect()}
          >Click to go to the official Ullrgrass.com website</button>
        </div>
        <img className="banner-img" src={ullrLogo} alt="Ullr Logo" />
      </div>
      <div className="year">
        {year.map((num, i) => <span key={i}>{num}</span>)}
      </div>
    </div>
  );
};
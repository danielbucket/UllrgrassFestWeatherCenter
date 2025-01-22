import { useState } from 'react';
import './style.css';
import ullrLogo from '../../assets/ullrlogohorizontalyellow.png';

export default function Header() {
  const [isHovering, setIsHovering] = useState(false);
  const year = new Date().getFullYear().toString().split('');

  const handleClick = () => {
    window.location.href = 'https://www.ullrgrass.com/';
  };
  
  return (
    <div className="header">
      <div className="logo-wrapper">
        {
          isHovering
          ? <p className="redirect-overlay"
                onClick={() => handleClick()}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >Click to go to the official Ullrgrass.com website.</p>
          : null
        }
        <img src={ullrLogo}
              alt="Ullr Logo"
              onMouseEnter={() => setIsHovering(true)} />
      </div>
      <p className="year">
        {year.map((num, i) => <span key={i}>{num}</span>)}
      </p>
    </div>
  )
};
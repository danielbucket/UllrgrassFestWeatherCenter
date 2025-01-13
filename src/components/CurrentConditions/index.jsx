// import './style.css';
import './mobile.style.css';
import { useState, useEffect } from 'react';
import ullrLogo from '../../assets/ullrlogohorizontalyellow.png';

export default function CurrentConditions() {
  const [weather, setWeather] = useState();

  useEffect(() => {

  }, []);


  return (
   <>
      <div className="current-weather-container">
        <div className="inner-box-shadow">
          <div className="current-temp">
            <p>12°F</p>
            <img src="" />
          </div>
          <p className="condition-text">Hot and clammy</p>
          <div className='wind-details'>
            <p>Wind:<span>14</span>mph<span>NNW</span></p>
            <p>Windchill: 89.5°F</p>
          </div>
          <p className='updated-at'>Updated at:<span>2024-01-41 13:34:45</span></p>
        </div>
      </div>
    </>
  );
};
// import './style.css';
import './mobile.style.css';
import { useState, useEffect } from 'react';
import ullrLogo from '../../assets/ullrlogohorizontalyellow.png';
import stub from '../../stubs/currentWeather.json';

const token = import.meta.env.VITE_WEATHER_API_KEY;
const coordinates = import.meta.env.VITE_GOLDEN_COORDS

export default function Header() {
  const [weather, setWeather] = useState(stub);

  useEffect(() => {

  function getLocation() {
    return navigator.geolocation.getCurrentPosition(success)
  }

  const success = (pos) => {
    const { latitude, longitude } = pos.coords;
    const url = `https://api.weather.gov/points/${latitude},${longitude}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
      const { gridX, gridY } = data.properties

      fetch(`https://api.weather.gov/gridpoints/BOU/${gridX},${gridY}/forecast`)
      .then(res => res.json())
      .then(data => {
        setWeather(() => data.properties.periods)
      })
    })
    .catch(err => console.log(err))
  }
  const error = (err) => console.warn(`ERROR(${err.code}): ${err.message}`)

  getLocation(success, error, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  });

}, []);


  return (
    <div className="header">
      {/* <div className="logo">
        <img src={ullrLogo} alt="Ullr Logo" />
        <p className="year">
          <span>2</span>  
          <span>0</span>  
          <span>2</span>  
          <span>5</span>  
        </p>
      </div>
      <div className="current-weather-container">
        <div className="inner-box-shadow">
        <div className="current-temp">
          <p>{weather.current.temp_f}°F</p>
          <img src={weather.current.condition.icon} />
        </div>
        <p className="condition-text">{weather.current.condition.text}</p>
        <div className='wind-details'>
          <p>Wind:<span>{weather.current.wind_mph}</span>mph<span>{weather.current.wind_dir}</span></p>
          <p>Windchill: {weather.current.windchill_f}°F</p>
        </div>
        <p className='updated-at'>Updated at:<span>{weather.location.localtime}</span></p>
      </div>
      </div> */}
    </div>
  );
};
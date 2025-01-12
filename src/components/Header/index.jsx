// import './style.css';
import './mobile.style.css';
import { useState, useEffect } from 'react';
import ullrLogo from '../../assets/ullrlogohorizontalyellow.png';
import weatherStub from '../../stubs/currentWeather.json'

const token = import.meta.env.VITE_WEATHER_API_KEY;
const coordinates = import.meta.env.VITE_GOLDEN_COORDS

export default function Header() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${token}&q=${coordinates}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      console.log('poop: ', data)
      setWeather(() => data)
    })
    .catch(err => console.error("Error: ", err))
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
import './style.css';
import { useState, useEffect } from 'react';
import ullrLogo from '../../assets/ullrlogohorizontalyellow.png';
import weatherStub from '../../stubs/currentWeather.json'

const token = import.meta.env.VITE_WEATHER_API_KEY;
const coordinates = import.meta.env.VITE_GOLDEN_COORDS

export default function Header() {
  const [weather, setWeather] = useState(weatherStub);

  // useEffect(() => {
  //   fetch(`http://api.weatherapi.com/v1/current.json?key=${token}&q=${coordinates}&aqi=no`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setWeather(() => data)
  //   })
  //   .catch(err => console.error(err))
  // }, []);
  
  return (
    <div className="header">
      <div className="logo">
        <img src={ullrLogo} alt="Ullr Logo" />
        <p>2025</p>
      </div>
      <div className="current-weather">
        <div>
          <p>{weather.location.name}, {weather.location.region}</p>
          <p>{weather.current.temp_f}°F</p>
          <div className="current-weather-details">
            <p>{weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} />
          </div>
          <div className='wind-details'>
            <p>Wind:<span>{weather.current.wind_mph}</span>mph<span>{weather.current.wind_dir}</span></p>
            <p>Windchill: {weather.current.windchill_f}°F</p>
          </div>
        </div>
      </div>
    </div>
  );
};
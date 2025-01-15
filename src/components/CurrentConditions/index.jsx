import './style.css';
import { useState, useEffect } from 'react';
import Loading from '../Loading';

export default function CurrentConditions({ currentConditions }) {
  const { temperature, windChill, windSpeed, timestamp, textDescription, shortForecast, icon, windDirection } = currentConditions;
  const formatTime = (time) => {
    const localString = new Date(time).toLocaleTimeString();
    const [hours, minutes, seconds, meridiem] = localString.split(/[:\s]/);
    return `${hours}:${minutes} ${meridiem}`;
  }

  const weather = Object.assign({}, {
    tempF: ((temperature.value * 9/5) + 32).toFixed(0),
    wind: {
      speed: Math.round(windSpeed.value),
      chill: Math.round(windChill.value),
      direction: windDirection.value
    },
    updatedAt: formatTime(timestamp),
    description: textDescription,
    icon: icon
  });


  console.log(weather.tempF);

  return (
    <>
      <div className="current-weather-container">
        {
          !currentConditions
          ? <Loading />
          : (
            <div className="current-weather-wrapper outer-box-shadow">
              <div className="inner-box-shadow">
                <div className="current-weather-content">
                  <div className="current-temp">
                    <p>{weather.tempF}°F</p>
                    <img src={weather.icon} />
                  </div>
                    <p className="condition-text">{weather.description}</p>
                  <div className='wind-details'>
                    <p>Wind:<span>{weather.wind.speed}</span>mph</p>
                    <p>Windchill:<span>{weather.wind.chill}</span>°F</p>
                  </div>
                  <p className='updated-at'>Updated at:<span>{weather.updatedAt}</span></p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};
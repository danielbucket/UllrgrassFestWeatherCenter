import { useState, useEffect } from 'react';
import './style.css';
import schedule from '../../data/schedule.json';

export default function ExtendedForecast({ extendedForecast }) {

  const forecast = extendedForecast.map((hour, i) => {
    const { endTime, icon, startTime, temperature, shortForecast, windDirection, windSpeed } = hour;
    
    const formatTime = (time) => {
      const localString = new Date(time).toLocaleTimeString();
      const [hours, minutes, seconds, meridiem] = localString.split(/[:\s]/);
      return `${hours}:${minutes} ${meridiem}`;
    }
    const formattedTimeEnd = formatTime(endTime);
    const formattedTimeStart = formatTime(startTime);
    
    return (
      <div key={i} className="hourly-forecast-card">
        <div className="period">
          <p>{formattedTimeStart} - {formattedTimeEnd}</p>
          <img src={icon} />
        </div>
        <p>{hour.temperature}°F</p>
        <p>{hour.shortForecast}</p>
        <p>{hour.windSpeed}mph {hour.windDirection}</p>
      </div>
    )
  })

  return (
    <>
      <div className="hourly-forecast-container">
        <div className="inner-box-shadow">
          <div className="forecast-subcontainer">
            <p>Extended Forecast</p>
            <div className="hourly-forecast">
              {
                !extendedForecast
                ? <p>Loading...</p>
                : forecast
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
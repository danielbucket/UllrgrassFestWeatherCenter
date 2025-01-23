import { useState, useEffect } from 'react';
import { TVStyle } from '../../styled.components'
import './style.css';
import { formatTime } from '../../utils';

export default function ExtendedForecast({ extendedForecast }) {
  const forecast = extendedForecast.map((hour, i) => {
    const { endTime, icon, startTime, temperature, shortForecast, windDirection, windSpeed } = hour;
    const formattedTimeEnd = formatTime(endTime);
    const formattedTimeStart = formatTime(startTime);
    
    return (
      <div key={i} className="extended-forecast-card">
        <div className="extended-period-indicator">
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
      <TVStyle>
        <div className="extended-forecast-container">
          <p>Extended Forecast</p>
          <div className="extended-forecast-list">
            {forecast}
          </div>
        </div>
      </TVStyle>
    </>
  )
}
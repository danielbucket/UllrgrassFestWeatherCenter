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
      <TVStyle>
        <div id="inner-tv">
          <div className="forecast-container">
            <p>Extended Forecast</p>
            <div className="hourly-forecast">
              {forecast}
            </div>
          </div>
        </div>
      </TVStyle>
    </>
  )
}
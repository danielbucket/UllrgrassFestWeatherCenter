import { useState, useEffect } from 'react';
import { TVStyle } from '../../styled.components'
import './style.css';
import { formatTime } from '../../utils';
import schedule from '../../data/schedule.json';

export default function GeneralForecast({ generalForecast }) {
  const forecast = generalForecast.map((hour, i) => {
    const { detailedForecast, icon, name, startTime, temperature, windDirection, windSpeed } = hour;

    return (
      <div key={i} className="general-forecast-card">
        <div className="period-indicator">
          <img src={icon} />
          <p>{name}</p>
          <p>{temperature}°F</p>
        </div>
        <p>{detailedForecast}</p>
        <p>{windSpeed} {windDirection}</p>
      </div>
    )
  })

  return (
    <>
      <TVStyle>
        <div className="general-forecast-container">
          <p>General Forecast</p>
          <div className="general-forecast-list">
            { forecast }
          </div>
        </div>
      </TVStyle>
    </>
  )
}
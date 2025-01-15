import { useState, useEffect } from 'react';
import './style.css';
import schedule from '../../data/schedule.json';

export default function GeneralForecast({ generalForecast }) {
  


  return (
    <>
      <div className="hourly-forecast-container">
        <div className="inner-box-shadow">

          <div className="forecast-subcontainer">
            <p>Scheduled & Weather</p>
            <div className="hourly-forecast">
              {
                !generalForecast
                ? <p>Loading...</p>
                : generalForecast.map((hour, i) => {
                  return (
                    <div key={i} className="hourly-forecast-card">
                      <p>{hour.name}</p>
                      <p>{hour.temperature}</p>
                      <p>{hour.shortForecast}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
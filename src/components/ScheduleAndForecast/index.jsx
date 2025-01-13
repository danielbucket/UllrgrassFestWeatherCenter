import { useState, useEffect } from 'react';
import './style.css';
import schedule from '../../data/schedule.json';

export default function ScheduleAndForecast({ locationData }) {
  const [forecast, setForecast] = useState();
  
  useEffect(() => {
    const { forecastOfficeId, gridX, gridY } = locationData;

    fetch(`https://api.weather.gov/gridpoints/${forecastOfficeId}/${gridX},${gridY}/forecast`)
    .then(res => res.json())
    .then(data => {
      setForecast(data.properties.periods)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="hourly-forecast-container">
        <div className="inner-box-shadow">

          <div className="forecast-subcontainer">
            <p>Scheduled & Weather</p>
            <div className="hourly-forecast">
              {
                forecast === undefined
                ? <p>Loading...</p>
                : forecast.map((hour, i) => {
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
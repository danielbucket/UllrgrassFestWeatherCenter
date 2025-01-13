// import './style.css';
import './mobile.style.css';
import { useState, useEffect } from 'react';
import Loading from '../Loading';

export default function CurrentConditions({ locationData }) {
  const [weather, setWeather] = useState();
  const { forecastOfficeId, gridX, gridY } = locationData
  const url = `https://api.weather.gov/gridpoints/${forecastOfficeId}/${gridX},${gridY}/stations?limit=500`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.features) return;
      const { stationIdentifier } = data.features[0].properties;

      fetch(`https://api.weather.gov/stations/${stationIdentifier}/observations/latest`)
      .then(res => res.json())
      .then(data =>  {
        // mutate the data to match the structure of the forecast data before setting it to state
        setWeather(data.properties)
      })
      .catch((err) => console.log(err))
    })
    .catch(err => console.log(err))

  }, [locationData]);

// console.log(weather)
  return (
    <>
      {
        !weather
        ? <Loading />
        : (
          <div className="current-weather-container">
            <div className="inner-box-shadow">
              <div className="current-temp">
                {/* <p>{weather.temperature.value}°F</p> */}
                <img src="" />
              </div>
              {/* <p className="condition-text">{weather.textDescription}</p> */}
              <div className='wind-details'>
                <p>Wind:<span>13</span>mph<span>NNW</span></p>
                <p>Windchill: 89.5°F</p>
              </div>
              <p className='updated-at'>Updated at:<span>2024-01-41 13:34:45</span></p>
            </div>
          </div>
        )
      }
    </>
  );
};
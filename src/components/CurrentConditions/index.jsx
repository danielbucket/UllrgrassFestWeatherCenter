import './style.css';
import { useState, useEffect } from 'react';
import Loading from '../Loading';

export default function CurrentConditions({ locationData }) {
  const [weather, setWeather] = useState();
  const { forecastOfficeId, gridX, gridY } = locationData
  const url = `https://api.weather.gov/gridpoints/${forecastOfficeId}/${gridX},${gridY}/stations?limit=500`

  useEffect(() => {
    if(!locationData.gridX || !locationData.gridY) return;
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.features) return;
      const { stationIdentifier } = data.features[0].properties;

      fetch(`https://api.weather.gov/stations/${stationIdentifier}/observations/latest`)
      .then(res => res.json())
      .then(data =>  {
        const weatherData = Object.assign({},
          {
            tempF: ((data.properties.temperature.value * 9/5) + 32),
            icon: data.properties.icon,
            description: data.properties.textDescription,
            wind: {
              speed: Math.round(data.properties.windSpeed.value),
              chill: Math.round((data.properties.windChill.value * 9/5) + 32)
            },
            updatedAt: data.properties.timestamp.slice(0, 10)
          }
        )
        setWeather(weatherData)
      })
      .catch((err) => console.log(err))
    })
    .catch(err => console.log(err))

  }, [locationData]);

  return (
    <>
      <div className="current-weather-container">
        {
          !weather
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
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ExtendedForecast from './components/ExtendedForecast';
import Loading from './components/Loading';
import CurrentConditions from './components/CurrentConditions';
import GeneralForecast from './components/GeneralForecast';

export default function App() {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = () => {
    const error = (err) => console.warn(`ERROR(${err.code}): ${err.message}`);
    const apiCall = (url) => fetch(url).then(res => res.json());
    const success = (pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://api.weather.gov/points/${latitude},${longitude}`;
      
      fetch(url)
      .then(res => res.json())
      .then(async data => {
        const { 
          gridX,  //--> gridpoint id
          gridY, //--> gridpoint id
          cwa, //--> field office id, i.e. "BOU", which is to say Boulder, CO
          forecast, //--> url
          forecastHourly, //--> url
          county, //--> url
          observationStations, //--> url
         } = data.properties;

        // this seems like a blocking-code type bottleneck.
        // I would suggest using Promise.all() to make these requests concurrently
        // Even better, pass the call string objects to react components
        // wrapped in Suspense and make the fetch calls there.
         const observationStationId = await apiCall(observationStations).then(data => data.features[0].properties.stationIdentifier)
         const currentConditions = await apiCall(`https://api.weather.gov/stations/${observationStationId}/observations/latest`).then(data => data.properties)
         const extendedForecast = await apiCall(forecastHourly).then(data => data.properties.periods.slice(0, 12))
         const generalForecast = await apiCall(forecast).then(data => data.properties.periods)

         Promise.all([observationStationId, currentConditions, extendedForecast, generalForecast])
          .then((responses) => {
            const handpickedData = Object.assign({}, {
              gridX,
              gridY,
              cwa,
              county,
              observationStationId: responses[0],
              currentConditions: responses[1],
              extendedForecast: responses[2],
              generalForecast: responses[3]   
            });

            setWeatherData(handpickedData);
          });
      });
    };
    
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  };

  return (
    <>
      <div className="app-container">
        <Header />
        <div className="page-content">
          {
            !weatherData
            ? <Loading />
            : (
              <>
                <CurrentConditions currentConditions={ weatherData.currentConditions } />
                <GeneralForecast generalForecast={ weatherData.generalForecast } />
                <ExtendedForecast extendedForecast={ weatherData.extendedForecast }/>
              </>
            )
          }
        </div>
      </div>
    </>
  )
};
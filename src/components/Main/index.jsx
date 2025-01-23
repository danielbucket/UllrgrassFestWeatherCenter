import { useEffect, useState } from 'react';
import CurrentConditions  from '../CurrentConditions';
import Schedule from '../Schedule';
import { MainContent } from './styled.js';

export default function Main() {
  const [urlStrings, setUrlStrings] = useState({});
  const [urlResources, setUrlResources] = useState({});

  useEffect(() => {
    getWeatherUrls();
  },[]);

  const getWeatherUrls = () => {
    const error = (err) => console.warn(`ERROR(${err.code}): ${err.message}`);
    const success = (pos) => {
      const { latitude, longitude } = pos.coords;
      const pointsUrl = `https://api.weather.gov/points/${latitude},${longitude}`;

      fetch(pointsUrl)
        .then(res => res.json())
        .then(async data => {
          const {
            gridX,
            gridY,
            cwa,
            forecast,
            forecastHourly,
            county,
            observationStations
          } = data.properties;

          const observationStationId = await fetch(observationStations).then(res => res.json()).then(data => data.features[0].properties.stationIdentifier);
          const currentConditionsUrl = `https://api.weather.gov/stations/${observationStationId}/observations/latest`;

          const ulrsObj = Object.assign({}, {
            forecastUrl: forecast,
            forecastHourlyUrl: forecastHourly,
            countyUrl: county,
            observationStationsUrl: observationStations,
            currentConditionsUrl
          });

          const urlResourcesObj = Object.assign({}, {
            gridX,
            gridY,
            cwa,
            observationStationId
          });
          
          setUrlStrings(ulrsObj);
          setUrlResources(urlResourcesObj);
        });
      };

      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    };
  
  return (
    <MainContent>
      <CurrentConditions urlString={
          urlStrings.currentConditionsUrl
          ? urlStrings.currentConditionsUrl
          : false
        } />
      <Schedule />
    </MainContent>
  );
};
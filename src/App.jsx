import { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import ScheduleAndForecast from './components/ScheduleAndForecast';
import Loading from './components/Loading';
import CurrentConditions from './components/CurrentConditions';

export default function App() {
  const [locationData, setLocationData] = useState({
    forecastOfficeId: 'BOU'
  });

  useEffect(() => {
    getAPIPoints();
  }, [])

  const getAPIPoints = () => {
    const error = (err) => console.warn(`ERROR(${err.code}): ${err.message}`);
    const success = (pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://api.weather.gov/points/${latitude},${longitude}`

      fetch(url)
      .then(res => res.json())
      .then(data => {
        const { gridX, gridY } = data.properties;
        setLocationData(prevData => {
          return {
            ...prevData,
            gridX,
            gridY
          }
        });
      })
      .catch(err => console.log(err))
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
        <Header locationData={locationData} />
        <div className="page-content">
          <CurrentConditions locationData={locationData} />
          {
            locationData.gridX === undefined || locationData.gridY === undefined
            ? <Loading />
            : (
              <>
                <ScheduleAndForecast locationData={locationData} />
                <Main />
              </>
            )
          }
        </div>
      </div>
    </>
  )
};
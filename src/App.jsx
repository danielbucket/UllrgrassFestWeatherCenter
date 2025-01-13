import { useState, useEffect } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import HourlyForecast from './components/HourlyForecast';
// import Loading from './components/Loading';

export default function App() {
  const [gridPoints, setGridPoints] = useState('');

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
        setGridPoints({ gridX, gridY });
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
      <div>
        <Header />
        {
          gridPoints  === ''
          ? <p>Loading...</p>
          : <HourlyForecast gridPoints={gridPoints} />
        }
        <Main />
      </div>
    </>
  )
};
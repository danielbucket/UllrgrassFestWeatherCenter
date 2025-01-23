import './style.css';
import { useState, useEffect } from 'react';
import { TVStyle } from '../../styled.components.jsx';
import Conditions from './Conditions';
import Loading from '../Loading';

export default function CurrentConditions({ urlString }) {
  const [currentConditions, setCurrentConditions] = useState(null);

  useEffect(() => {
    if (!urlString) return;

    fetch(urlString)
      .then(res => res.json())
      .then(data => {
        const { temperature, windChill, windSpeed, timestamp, textDescription, shortForecast, icon, windDirection } = data.properties;
        const formatTime = (time) => {
          const localString = new Date(time).toLocaleTimeString();
          const [hours, minutes, seconds, meridiem] = localString.split(/[:\s]/);
          return `${hours}:${minutes} ${meridiem}`;
        };

        const weather = Object.assign({}, {
          tempF: ((temperature.value * 9/5) + 32).toFixed(0),
          wind: {
            speed: Math.round(windSpeed.value),
            chill: Math.round(windChill.value),
            direction: windDirection.value
          },
          updatedAt: formatTime(timestamp),
          description: textDescription,
          icon: icon
        });
        setCurrentConditions(weather);
      })
      .catch(err => console.warn(`ERROR(${err.code}): ${err.message}`));
  }, [urlString]);
  
  return (
    <TVStyle>
      {
        currentConditions === null
        ? <Loading />
        : <Conditions conditions={currentConditions} />
      }
    </TVStyle>
  );
};
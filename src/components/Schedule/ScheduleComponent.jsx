import { useState, useEffect } from 'react';
import './style.css';

  export default function ScheduleComponent({ schedule }) {
    const [sortedSchedule, setSortedSchedule] = useState([]);
    const [currentDay, setCurrentDay] = useState();
    const { year, outline } = schedule;
    
    const sortSchedule = Object.keys(outline).map((day, i) => {
      const { date, events } = outline[day];
      const fullDate = new Date(date);

      const dayElement = (
        <>
          <div className="day">
            <h2>{date}</h2>
            <ul className="day-event" key={i}>
              {
                events.map((event, i) => {
                  const { start_time, end_time, artist, stage, description } = event;
                  return (
                    <>
                      <li className="event-content" key={i}>
                        <h3>{start_time} - {end_time}</h3>
                        <h4>{artist}</h4>
                        <p>{stage}</p>
                        <p>{description ? description : ''}</p>
                      </li>
                    </>
                  )
                })
              }
            </ul>
          </div>
        </>
      );
      return { fullDate, dayElement };
    });

    useEffect(() => {
      const today = new Date();
      sortSchedule.map((day, i) => {
        const date_A = day.fullDate.getDate();
        const date_B = today.getDate();

        if (today.getDate() === day.fullDate.getDate()) {
          setCurrentDay(i);
        };
      });
      setSortedSchedule(sortSchedule);
    }, []);

    return (
      <div id="inner-tv">
        <div className="schedule-container">
          <h1>{year}</h1>
          <div className="" id="schedule">
            {
              currentDay !== undefined
              ? sortedSchedule.map((day, i) => {
                return (
                  <>
                    <div className={currentDay === i ? 'active' : 'inactive'}>
                      {day.dayElement}
                    </div>
                  </>
                )
              }) : null
            }
          </div>
        </div>
      </div>
    );
  };
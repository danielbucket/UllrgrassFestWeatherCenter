import { useState, useEffect } from 'react';
import './style.css';

  export default function ScheduleComponent({ schedule }) {
    const [sortedSchedule, setSortedSchedule] = useState([]);
    const [currentDay, setCurrentDay] = useState({});
    const { year, outline } = schedule;
    
    const sortSchedule = Object.keys(outline).map((day, i) => {
      const { date, events } = outline[day];
      const fullDate = new Date(date);

      const dayElement = (
        <>
          <div className="daily-content">
            <h2>{date}</h2>
            <div className="day-events">
              {
                events.map((event, i) => {
                  return (
                    <div className="event" key={i}>
                      <h3>{event.start_time} - {event.end_time}</h3>
                      <p>{event.artist}</p>
                      <p>{event.stage}</p>
                      {event.description ? <p>{event.description}</p> : null}
                    </div>
                  );
                })
              }
            </div>
          </div>
        </>
      );
      return { fullDate, dayElement };
    });

    useEffect(() => {
      setSortedSchedule(() => sortSchedule);
    }, []);

    return (
      <div id="inner-tv">
        <div className="schedule-container">
          <h1>{year}</h1>
          <div className="schedule-content" id="schedule">
            {
              currentDay !== undefined
              ? sortedSchedule.map((day, i) => {
                return (
                  <>
                    <div className={currentDay === i ? 'is-active' : 'is-inactive'}>
                      {day.dayElement}
                    </div>
                  </>
                );
              }) : null
            }
          </div>
        </div>
      </div>
    );
  };
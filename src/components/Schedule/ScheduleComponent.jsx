import { useState, useEffect } from 'react';

  export default function ScheduleComponent({ schedule }) {
    const [sortedDays, setSortedDays] = useState({});
    const { year } = schedule;

    useEffect(() => {
      const { outline } = schedule;
      const sortedDays = Object.keys(outline).reduce((acc, day) => {
        if(!acc[day]) {
          acc[day] = outline[day];
        }
        return acc
      }, {});

      setSortedDays(sortedDays);
    }, [schedule]);
        

    const schedulePrint = Object.keys(sortedDays).map((day, i) => {
      console.log(sortedDays[day]);
      return (
        <>
          {/* <div>{date}</div> */}
          {/* <li key={i}>
            {
              events.map(event => {
                const { start_time, end_time, artist, stage, description } = event;
                return (
                  <div key={event.time}>
                    <div>{start_time}-{end_time}</div>
                    <div>{artist}</div>
                    <div>{stage}</div>
                    <div>
                      {
                        description !== ""
                        ? <div>{description}</div>
                        : null
                      }
                    </div>
                  </div>
                )
              })
            }
          </li> */}
        </>
      )
    })

    return (
      <div id="inner-tv">
        <h1>{year}</h1>
        <ul>
          {schedulePrint}
        </ul>
      </div>
    )
  }
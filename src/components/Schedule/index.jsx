import { useState, useEffect } from 'react';
import { TVStyle } from '../../styled.components'
import Loading from '../Loading';
import scheduleData from '../../data/schedule.json';
import ScheduleComponent from './ScheduleComponent';

export default function Schedule() {
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setSchedule(scheduleData);
    }, 1000);
  },[])


  return (
    <>
      <TVStyle>
        {
          schedule === null
          ? <Loading />
          : <ScheduleComponent schedule={scheduleData} />
        }
      </TVStyle>
    </>
  )
}
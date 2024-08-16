import React, { useState, useEffect } from 'react';
import { Clock, Bus, Search, Moon, Sun } from 'lucide-react';
 
const scheduleData = [
  { EGHQ: "0:10", TECOM1: "0:43", EGHQ_RETURN: "1:23" },
  { EGHQ: "0:30", TECOM1: "1:03", EGHQ_RETURN: "1:43" },
  { EGHQ: "0:50", TECOM1: "1:23", EGHQ_RETURN: "2:03" },
  { EGHQ: "1:10", TECOM1: "1:43", EGHQ_RETURN: "2:23" },
  { EGHQ: "1:30", TECOM1: "2:03", EGHQ_RETURN: "2:43" },
  { EGHQ: "1:50", TECOM1: "2:23", EGHQ_RETURN: "3:03" },
  { EGHQ: "2:10", TECOM1: "2:43", EGHQ_RETURN: "3:23" },
  { EGHQ: "2:30", TECOM1: "3:03", EGHQ_RETURN: "3:43" },
  { EGHQ: "2:50", TECOM1: "3:23", EGHQ_RETURN: "4:03" },
  { EGHQ: "3:15", TECOM1: "3:48", EGHQ_RETURN: "4:28" },
  { EGHQ: "3:40", TECOM1: "4:13", EGHQ_RETURN: "4:53" },
  { EGHQ: "4:00", TECOM1: "4:33", EGHQ_RETURN: "5:13" },
  { EGHQ: "4:20", TECOM1: "4:53", EGHQ_RETURN: "5:33" },
  { EGHQ: "4:40", TECOM1: "5:13", EGHQ_RETURN: "5:53" },
  { EGHQ: "5:00", TECOM1: "5:33", EGHQ_RETURN: "6:13" },
  { EGHQ: "5:20", TECOM1: "5:53", EGHQ_RETURN: "6:33" },
  { EGHQ: "5:40", TECOM1: "6:13", EGHQ_RETURN: "6:53" },
  { EGHQ: "6:00", TECOM1: "6:42", EGHQ_RETURN: "7:22" },
  { EGHQ: "6:20", TECOM1: "7:02", EGHQ_RETURN: "7:42" },
  { EGHQ: "6:40", TECOM1: "7:22", EGHQ_RETURN: "8:02" },
  { EGHQ: "7:00", TECOM1: "7:42", EGHQ_RETURN: "8:22" },
  { EGHQ: "7:20", TECOM1: "8:02", EGHQ_RETURN: "8:42" },
  { EGHQ: "7:40", TECOM1: "8:22", EGHQ_RETURN: "9:02" },
  { EGHQ: "8:00", TECOM1: "8:42", EGHQ_RETURN: "9:22" },
  { EGHQ: "8:20", TECOM1: "9:02", EGHQ_RETURN: "9:42" },
  { EGHQ: "8:40", TECOM1: "9:22", EGHQ_RETURN: "10:02" },
  { EGHQ: "9:05", TECOM1: "9:47", EGHQ_RETURN: "10:27" },
  { EGHQ: "9:30", TECOM1: "10:08", EGHQ_RETURN: "10:48" },
  { EGHQ: "9:55", TECOM1: "10:33", EGHQ_RETURN: "11:13" },
  { EGHQ: "10:15", TECOM1: "10:52", EGHQ_RETURN: "11:32" },
  { EGHQ: "10:35", TECOM1: "11:12", EGHQ_RETURN: "11:52" },
  { EGHQ: "10:55", TECOM1: "11:32", EGHQ_RETURN: "12:12" },
  { EGHQ: "11:15", TECOM1: "11:52", EGHQ_RETURN: "12:32" },
  { EGHQ: "11:35", TECOM1: "12:12", EGHQ_RETURN: "12:52" },
  { EGHQ: "11:55", TECOM1: "12:32", EGHQ_RETURN: "13:12" },
  { EGHQ: "12:15", TECOM1: "12:52", EGHQ_RETURN: "13:32" },
  { EGHQ: "12:35", TECOM1: "13:12", EGHQ_RETURN: "13:52" },
  { EGHQ: "12:55", TECOM1: "13:32", EGHQ_RETURN: "14:12" },
  { EGHQ: "13:15", TECOM1: "13:52", EGHQ_RETURN: "14:32" },
  { EGHQ: "13:35", TECOM1: "14:12", EGHQ_RETURN: "14:52" },
  { EGHQ: "13:55", TECOM1: "14:32", EGHQ_RETURN: "15:12" },
  { EGHQ: "14:15", TECOM1: "14:52", EGHQ_RETURN: "15:32" },
  { EGHQ: "14:35", TECOM1: "15:12", EGHQ_RETURN: "15:52" },
  { EGHQ: "15:00", TECOM1: "15:37", EGHQ_RETURN: "16:17" },
  { EGHQ: "15:20", TECOM1: "15:57", EGHQ_RETURN: "16:37" },
  { EGHQ: "15:45", TECOM1: "16:22", EGHQ_RETURN: "17:02" },
  { EGHQ: "16:05", TECOM1: "16:42", EGHQ_RETURN: "17:22" },
  { EGHQ: "16:30", TECOM1: "17:15", EGHQ_RETURN: "18:10" },
  { EGHQ: "16:55", TECOM1: "17:50", EGHQ_RETURN: "18:45" },
  { EGHQ: "17:20", TECOM1: "18:15", EGHQ_RETURN: "19:10" },
  { EGHQ: "17:45", TECOM1: "18:40", EGHQ_RETURN: "19:35" },
  { EGHQ: "18:10", TECOM1: "19:05", EGHQ_RETURN: "20:00" },
  { EGHQ: "18:35", TECOM1: "19:30", EGHQ_RETURN: "20:25" },
  { EGHQ: "19:00", TECOM1: "19:55", EGHQ_RETURN: "20:50" },
  { EGHQ: "19:25", TECOM1: "20:20", EGHQ_RETURN: "21:10" },
  { EGHQ: "19:50", TECOM1: "20:45", EGHQ_RETURN: "21:30" },
  { EGHQ: "20:15", TECOM1: "21:07", EGHQ_RETURN: "21:52" },
  { EGHQ: "20:40", TECOM1: "21:32", EGHQ_RETURN: "22:12" },
  { EGHQ: "21:05", TECOM1: "21:57", EGHQ_RETURN: "22:37" },
  { EGHQ: "21:30", TECOM1: "22:15", EGHQ_RETURN: "22:55" },
  { EGHQ: "21:55", TECOM1: "22:38", EGHQ_RETURN: "23:18" },
  { EGHQ: "22:20", TECOM1: "23:03", EGHQ_RETURN: "23:43" },
  { EGHQ: "22:45", TECOM1: "23:28", EGHQ_RETURN: "0:08" },
  { EGHQ: "23:10", TECOM1: "23:53", EGHQ_RETURN: "0:33" },
  { EGHQ: "23:40", TECOM1: "0:23", EGHQ_RETURN: "1:03" },  
];

const BusScheduleComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextDepartures, setNextDepartures] = useState({
    toTecom1: [],
    fromTecom1: []
  });
  const [timeUntilNextBus, setTimeUntilNextBus] = useState({
    toTecom1: '',
    fromTecom1: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateDepartures = () => {
      const now = new Date();
      now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + 240); // Adjust to UAE time (UTC+4)

      const getNextDepartures = (from, to, count) => {
        return scheduleData
          .filter(row => {
            const [hours, minutes] = row[from].split(':').map(Number);
            const departureTime = new Date(now);
            departureTime.setHours(hours, minutes, 0, 0);
            return departureTime > now;
          })
          .slice(0, count)
          .map(row => row[from]);
      };

      const nextToTecom1 = getNextDepartures('EGHQ', 'TECOM1', 3);
      const nextFromTecom1 = getNextDepartures('TECOM1', 'EGHQ', 3);

      setNextDepartures({
        toTecom1: nextToTecom1,
        fromTecom1: nextFromTecom1
      });

      // Calculate time until next bus
      const calculateTimeUntil = (nextDeparture) => {
        if (nextDeparture.length === 0) return 'No upcoming departures';
        const [hours, minutes] = nextDeparture[0].split(':').map(Number);
        const departureTime = new Date(now);
        departureTime.setHours(hours, minutes, 0, 0);
        const timeDiff = departureTime - now;
        return timeDiff <= 0 ? 'Departing now' : timeDiff;
      };

      setTimeUntilNextBus({
        toTecom1: calculateTimeUntil(nextToTecom1),
        fromTecom1: calculateTimeUntil(nextFromTecom1)
      });
    };

    updateDepartures();
    const interval = setInterval(updateDepartures, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [currentTime]);

  const formatTimeUntil = (timeUntil) => {
    if (typeof timeUntil !== 'number') return timeUntil;
    const hours = Math.floor(timeUntil / 3600000);
    const minutes = Math.floor((timeUntil % 3600000) / 60000);
    const seconds = Math.floor((timeUntil % 60000) / 1000);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const RouteSchedule = ({ title, departures, timeUntil }) => (
    <div style={{ backgroundColor: '#F5EDED', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', color: '#6482AD' }}>
        <Bus style={{ marginRight: '0.5rem' }} />
        <span>{title}</span>
      </h2>
      <div style={{ backgroundColor: '#E2DAD6', borderRadius: '0.25rem', padding: '0.5rem', marginBottom: '0.5rem', color: '#6482AD', fontWeight: 'bold' }}>
        Next bus in: {formatTimeUntil(timeUntil)}
      </div>
      <ul>
        {departures.map((time, index) => (
          <li key={index} style={{ fontSize: '1.125rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#7FA1C3' }}>
            <span style={{ fontWeight: index === 0 ? 'bold' : 'normal' }}>{time}</span>
            {index === 0 && <span style={{ color: '#6482AD', fontSize: '0.875rem', fontWeight: '600' }}>Next</span>}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#6482AD', padding: '2rem' }}>
      <div style={{ maxWidth: '28rem', margin: '0 auto', backgroundColor: '#7FA1C3', borderRadius: '0.5rem', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', padding: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F5EDED' }}>
          <Bus style={{ marginRight: '0.5rem' }} /> Bus Schedule
        </h1>
        
        <div style={{ backgroundColor: '#E2DAD6', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6482AD' }}>
          <Clock style={{ marginRight: '0.5rem' }} />
          <p>Current Time (UAE): {currentTime.toLocaleTimeString('en-AE', { timeZone: 'Asia/Dubai' })}</p>
        </div>
        
        <RouteSchedule 
          title="EGHQ to Tecom-1" 
          departures={nextDepartures.toTecom1} 
          timeUntil={timeUntilNextBus.toTecom1}
        />

        <RouteSchedule 
          title="Tecom-1 to EGHQ" 
          departures={nextDepartures.fromTecom1} 
          timeUntil={timeUntilNextBus.fromTecom1}
        />
      </div>
    </div>
  );
};

export default BusScheduleComponent;
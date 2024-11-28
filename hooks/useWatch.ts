'use client';
import { useEffect, useMemo, useState } from 'react';
import { humanizeDateValue } from '@/utils/functions/date';

const useWatch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const currentTime = new Date();
      if (currentTime.getMinutes() !== time.getMinutes()) {
        setTime(currentTime);
      }
    }, 3000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [time]);

  return useMemo(
    () => ({
      year: time.getFullYear(),
      month: humanizeDateValue(time.getMonth() + 1),
      day: humanizeDateValue(time.getDate()),
      hours: humanizeDateValue(time.getHours()),
      minutes: humanizeDateValue(time.getMinutes()),
      seconds: humanizeDateValue(time.getSeconds()),
    }),
    [time]
  );
};

export default useWatch;

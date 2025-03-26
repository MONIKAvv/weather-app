import React, { useEffect, useState } from 'react'

export default function UseDate() {
  const locale = 'en';
  const [today, setToDate] = useState(new Date());


  useEffect(() => {
const timer = setInterval(() => {
  setToDate(new Date())
}, 60*1000);
    return () => {
clearInterval(timer);
    }
  }, [])

  const day = today.toLocaleDateString(locale, {weekday: 'long'});
  const date = `${day}, ${today.toLocaleTimeString(locale, {month: 'long'})}\n\n`;
  const time = today.toLocaleDateString(locale, {hour: 'numeric',
    hour12: true,
    minute: 'numeric'
  });
  return {
    date, time
  }
}

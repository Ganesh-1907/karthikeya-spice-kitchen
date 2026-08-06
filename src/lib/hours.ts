import { useEffect, useState } from "react";

function getLondonTimeDetails(now = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  let weekday = "";
  let hour = 0;
  let minute = 0;

  for (const part of parts) {
    if (part.type === "weekday") weekday = part.value;
    if (part.type === "hour") hour = parseInt(part.value, 10);
    if (part.type === "minute") minute = parseInt(part.value, 10);
  }

  return { weekday, hour, minute };
}

export function getLondonTimeStatus(now = new Date()) {
  const { weekday, hour, minute } = getLondonTimeDetails(now);
  const currentMinutes = hour * 60 + minute;

  const isWeekend = weekday === "Saturday" || weekday === "Sunday";
  const openHour = isWeekend ? 8 : 12;
  const closeHour = 23;

  const openMinutes = openHour * 60;
  const closeMinutes = closeHour * 60;

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isOpen) {
    return "Open • Closes 11 PM";
  } else {
    if (currentMinutes < openMinutes) {
      return `Closed • Opens ${openHour === 12 ? "12 PM" : "8 AM"}`;
    } else {
      const isTomorrowWeekend = weekday === "Friday" || weekday === "Saturday";
      return `Closed • Opens ${isTomorrowWeekend ? "8 AM" : "12 PM"}`;
    }
  }
}

export function useLondonTimeStatus() {
  const [status, setStatus] = useState(() => getLondonTimeStatus());

  useEffect(() => {
    const id = window.setInterval(() => {
      setStatus(getLondonTimeStatus());
    }, 60_000);

    return () => window.clearInterval(id);
  }, []);

  return status;
}

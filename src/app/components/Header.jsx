"use client"
import { useEffect, useState } from "react";

export default function TodayDate() {
  let [date, setDate] = useState([]);
  

  useEffect(() => {
    let today = new Date();
    let formattedDate = today.toDateString(); 
    setDate(formattedDate);
  }, []);

  return (
    <div>

      <p>{date}  {temperature}°C</p>
    </div>
  );
}
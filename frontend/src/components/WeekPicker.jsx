import React from 'react';
//import './App.css';
import { WeeklyCalendar } from 'react-week-picker';
import 'react-week-picker/src/lib/calendar.css';
import { format } from "date-fns"

export default function WeekPicker({ onHandleWeekPicker }) {

  const handleJumpToCurrentWeek = (currenDate) => {
    console.log(`current date: ${currenDate}`);
  }

  const handleWeekPick = (startDate, endDate) => {
    const strStartDate = format(new Date(startDate), "yyyy-MM-dd")
    const strEndDate = format(new Date(endDate), "yyyy-MM-dd")
    onHandleWeekPicker(strStartDate , strEndDate)
  }

  return (
    <div>
      <WeeklyCalendar onWeekPick={handleWeekPick} jumpToCurrentWeekRequired={true} onJumpToCurrentWeek={handleJumpToCurrentWeek}/>
    </div>
  );
}
//         {this.props.events.map((e, key) => {
//           return <div key={key}>{e.summary}</div>;
//         })}

import * as React from 'react';
import { useState, useEffect } from 'react';
import * as S from './style';

export default function Calendar(props) {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAT', 'DOM'];
  const MONTHS = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ'
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear ? DAYS_LEAP : DAYS;

  return (
    <S.Frame>
      {console.log(props.events)}
      <S.Header>
        <S.Button onClick={() => setDate(new Date(year, month - 1, day))}>
          Prev
        </S.Button>
        <div>
          {MONTHS[month]} {year}
        </div>
        <S.Button onClick={() => setDate(new Date(year, month + 1, day))}>
          Next
        </S.Button>
      </S.Header>
      <S.Body>
        {DAYS_OF_THE_WEEK.map(d => (
          <S.DayHead key={d}>
            <strong>{d}</strong>
          </S.DayHead>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <S.Day
                key={index}
                // isToday={d === today.getDate()}
                // isSelected={d === day}
                // onClick={() => setDate(new Date(year, month, d))}
              >
                {d > 0 ? d : ''}
                {props.events.length &&
                  props.events.map((e, key) => {
                    const eventDay = new Date(e.start.dateTime);
                    console.log(eventDay);
                    return (
                      eventDay.getDate() === d &&
                      eventDay.getMonth() === month && <S.Event key={key}>{e.summary}</S.Event>
                    );
                  })}
              </S.Day>
            );
          })}
      </S.Body>
    </S.Frame>
  );
}

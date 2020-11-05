import React, {useState} from 'react';
import {css} from '@emotion/core';

const DatepickerDays = () => {
  const daysInMonth = (year, month) => {
    const lastDayOfGivenMonth = new Date(year, month, 0);
    let daysInMonths = [];

    for (let i = 1; i < lastDayOfGivenMonth.getDate(); i++) {
      daysInMonths = [...daysInMonths, new Date(year, month, i)];
    }

    return daysInMonths;
  }

  const today = new Date();
  const days = daysInMonth(today.getFullYear(), today.getMonth())
  const [selectedDay, setSelectedDay] = useState(today)

  const clickOnDay = (date) => {
    console.log(date)
  }

  const daysIndexes = days.map(date => {
      const isSelected = date => selectedDay.getDate() === date.getDate()
        && selectedDay.getMonth() === date.getMonth()
        && selectedDay.getFullYear() === date.getFullYear();

      return (
        <div
          className={"hover:bg-orange-500 cursor-pointer" + ( isSelected(date) ? " bg-orange-700" : "")}
          key={date.toLocaleString()}
          css={date.getDate() === 1
            ? css`grid-column-start: ${date.getDay() - 1 > 0 ? date.getDay() - 1 : 7};`
            : undefined}
          onClick={() => {
            setSelectedDay(date)
          }}
        >
          {date.getDate()}
        </div>
      )
    }
  )

  return (
    <>
      <div css={css`
      max-width: 300px;
    `}>
        <div css={css`
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      `}>
          <div>Lun</div>
          <div>Mar</div>
          <div>Mer</div>
          <div>Jeu</div>
          <div>Ven</div>
          <div>Sam</div>
          <div>Dim</div>
          {daysIndexes}
        </div>
      </div>
    </>
  )
}

export default DatepickerDays;
import React, {useState} from 'react';
import {css} from '@emotion/core';

const DatepickerDays = ({selectedDay, onSelectDay, navigationDay, color}) => {
  const daysInMonth = (year, month) => {
    const lastDayOfGivenMonth = new Date(year, month, 0);
    let daysInMonths = [];

    for (let i = 1; i < lastDayOfGivenMonth.getDate(); i++) {
      daysInMonths = [...daysInMonths, new Date(year, month, i)];
    }

    return daysInMonths;
  }

  const handleSelectDay = date => onSelectDay(date)

  const days = daysInMonth(navigationDay.getFullYear(), navigationDay.getMonth())

  const daysIndexes = days.map(date => {
      const isSelected = (date) => {
        return selectedDay.getDate() === date.getDate()
        && selectedDay.getMonth() === date.getMonth()
        && selectedDay.getFullYear() === date.getFullYear()
      }

      const selectedClass = `bg-${color}-700 text-white`;
      const firstDayOffset = `col-start-${date.getDay() - 1 >= 0 ? date.getDay() : 7} `;

      return (
        <div
          className={
            `hover:bg-${color}-500 hover:text-white cursor-pointer rounded-full flex items-center justify-center p-2 transition-all duration-500 ease-in-out `
            + (isSelected(date) ? selectedClass : "")
            + (date.getDate() === 1 ? firstDayOffset : "")
          }
          key={date.toLocaleString()}
          onClick={() => {
            handleSelectDay(date)
          }}
        >
          <div css={css`width: 32px; height: 32px;`} className="flex items-center justify-center">
            {date.getDate()}
          </div>
        </div>
      )
    }
  )

  return (
    <>
      <div className="grid grid-cols-7 gap-2 text-center p-4 pt-0">
        <div>Lun</div>
        <div>Mar</div>
        <div>Mer</div>
        <div>Jeu</div>
        <div>Ven</div>
        <div>Sam</div>
        <div>Dim</div>
        {daysIndexes}
      </div>
    </>
  )
}

export default DatepickerDays;
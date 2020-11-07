import React, {useState} from 'react';
import {css} from '@emotion/core';

const DatepickerDays = ({selectedDay, onSelectDay, navigationDay}) => {
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
      const isSelected = date => selectedDay.getDate() === date.getDate()
        && selectedDay.getMonth() === date.getMonth()
        && selectedDay.getFullYear() === date.getFullYear();

      const selectedClass = "bg-orange-700 ";
      const firstDayOffset = `col-start-${date.getDay() - 1 > 0 ? date.getDay() - 1 : 7} `;

      return (
        <div
          className={
            "hover:bg-orange-500 cursor-pointer rounded-full "
            + (isSelected(date) ? selectedClass : "")
            + (date.getDate() === 1 ? firstDayOffset : "")
          }
          key={date.toLocaleString()}
          onClick={() => {
            handleSelectDay(date)
          }}
        >
          {date.getDate()}
        </div>
      )
    }
  )

  return (
    <>
      <div className="grid grid-cols-7 gap-2 text-center">
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
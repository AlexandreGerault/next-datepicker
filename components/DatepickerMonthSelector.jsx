import React from 'react';

const DatepickerMonthSelector = ({navigationDay, onMonthDown, onMonthUp}) => {
  const handleMonthUp = date => {
    onMonthUp(date)
  }
  const handleMonthDown = date => {
    onMonthDown(date)
  }

  return (
    <>
      <button onClick={() => handleMonthDown(navigationDay)}> - </button>
      {Intl.DateTimeFormat('fr-FR', { month: 'short', year: 'numeric'}).format(navigationDay)}
      <button onClick={() => handleMonthUp(navigationDay)}> + </button>
    </>
  )
};

export default DatepickerMonthSelector;
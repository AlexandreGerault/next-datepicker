import React from 'react';
import { css } from '@emotion/core';

const DatepickerMonthSelector = ({navigationDay, onMonthDown, onMonthUp}) => {
  const handleMonthUp = date => {
    onMonthUp(date)
  }
  const handleMonthDown = date => {
    onMonthDown(date)
  }

  return (
    <div className="grid grid-cols-3 text-center py-4">
      <button onClick={() => handleMonthDown(navigationDay)} className="flex justify-end items-center">
        <img src="/back.svg" alt="Flèche de navigation vers la gauche" css={css`width: 16px;`} />
      </button>
      {Intl.DateTimeFormat('fr-FR', { month: 'short', year: 'numeric'}).format(navigationDay)}
      <button onClick={() => handleMonthUp(navigationDay)} className="flex justify-start items-center">
        <img src="/next.svg" alt="Flèche de navigation vers la droite" css={css`width: 16px;`} />
      </button>
    </div>
  )
};

export default DatepickerMonthSelector;
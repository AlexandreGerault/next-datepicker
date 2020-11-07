import React, { useState } from 'react';
import {css} from '@emotion/core';
import DatepickerDays from './DatepickerDays';
import DatepickerMonthSelector from './DatepickerMonthSelector';
import DateDisplayer from './DateDisplayer';

const Datepicker = ({width, color}) => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [navigationDay, setNavigationDay] = useState(new Date());

  return (
    <div css={css`width: ${width}px;`} className="shadow rounded-lg">
      <DateDisplayer selectedDate={selectedDay} color={color} />

      <DatepickerMonthSelector
        navigationDay={navigationDay}
        onMonthUp={date => setNavigationDay(new Date(date.getFullYear(), date.getMonth() + 1, 1))}
        onMonthDown={date => setNavigationDay(new Date(date.getFullYear(), date.getMonth() - 1, 1))}
        color={color}
      />

      <DatepickerDays
        navigationDay={navigationDay}
        selectedDay={selectedDay}
        onSelectDay={date => setSelectedDay(date)}
        color={color}
      />

      {/*
      <input
        type="text"
        value={selectedDay.toLocaleDateString(dateFormat)}
      />
      */}

    </div>
  )
};

export default Datepicker;

// Idée de Jéremy : pouvoir récupérer la valeur dans un input selon un format passé en propriété
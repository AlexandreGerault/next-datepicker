import React, { useState } from 'react';
import {css} from '@emotion/core';
import DatepickerDays from './DatepickerDays';
import DatepickerMonthSelector from './DatepickerMonthSelector';
import DateDisplayer from './DateDisplayer';

const Datepicker = ({width}) => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [navigationDay, setNavigationDay] = useState(new Date());

  return (
    <div className="shadow p-4" css={css`width: ${width}px;`}>
      <DateDisplayer selectedDate={selectedDay} />

      <DatepickerMonthSelector
        navigationDay={navigationDay}
        onMonthUp={date => setNavigationDay(new Date(date.getFullYear(), date.getMonth() + 1, 1))}
        onMonthDown={date => setNavigationDay(new Date(date.getFullYear(), date.getMonth() - 1, 1))}
      />

      <DatepickerDays
        navigationDay={navigationDay}
        selectedDay={selectedDay}
        onSelectDay={date => setSelectedDay(date)}
      />
    </div>
  )
};

export default Datepicker;
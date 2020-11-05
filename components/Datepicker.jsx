import React, { useState } from 'react';
import DatepickerDays from './DatepickerDays';
import DatepickerMonthSelector from './DatepickerMonthSelector';

const Datepicker = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [navigationDay, setNavigationDay] = useState(new Date());

  return (
    <>
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
    </>
  )
};

export default Datepicker;
import React from 'react';
import DatepickerDays from './DatepickerDays';
import DatepickerMonthSelector from './DatepickerMonthSelector';

const Datepicker = () => {
  return (
    <>
      <DatepickerMonthSelector />
      <DatepickerDays />
    </>
  )
};

export default Datepicker;
import React from 'react';

const DateDisplayer = ({selectedDate}) => {
  const day = selectedDate.toLocaleDateString(selectedDate, { weekday: 'long' })

  const date = selectedDate.toLocaleDateString(selectedDate, { day: 'numeric' })

  const month = selectedDate.toLocaleDateString(selectedDate, { month: 'long' })

  const year = selectedDate.toLocaleDateString(selectedDate, { year: 'numeric' })
  
  return (
    <div className="text-center -m-4 mb-0 capitalize">
      <div className="bg-orange-700 py-2 text-white">
        {day}
      </div>
      <div className="bg-orange-500 text-white flex flex-col py-4">
        <div className="text-xl">
          {month}
        </div>
        <div className="text-6xl -my-3">
          {date}
        </div>
        <div className="text-xl text-grey-400">
          {year}
        </div>
      </div>
    </div>
  )
}

export default DateDisplayer;
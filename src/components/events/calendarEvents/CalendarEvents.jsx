import { useState } from 'react'
import Calendar from 'react-calendar'

import './Calendar.css'
export const CalendarEvents = ({ queryValue, date, setDate }) => {
  const [openCalendar, setOpenCalendar] = useState(false)
  const { handleChangeUrl, handlePushQuery } = queryValue


  const dayEvents = e => {
    const dateFormat = new Date(e)
      .toLocaleDateString()
      .split('/')
      .reverse()
      .join('/')
    setDate(dateFormat)
    handlePushQuery(dateFormat, 'date')
    handleChangeUrl()
  }

  const handleOpenCalendar = () => setOpenCalendar(!openCalendar)

  return (

    <>
      <button
        onClick={handleOpenCalendar}
        className='bg-gradientButtonFilter text-white flexCenter gap-3 p-2 px-12 block m-auto rounded-full lg:hidden'
      >
        Calendar
        {!openCalendar ? (
          <span className='material-symbols-outlined'>calendar_month</span>
        ) : (
          <span className='material-symbols-outlined'>event_busy</span>
        )}
      </button>
      <Calendar
        onChange={e => dayEvents(e)}
        className={`${openCalendar ? 'block' : 'hidden'} dark:text-white lg:block`}
      />
      <span className='block text-lg m-auto text-center hidden lg:mt-8 lg:block dark:text-white '>{`Selected Date: ${date}`}</span>
    </>

  )
}

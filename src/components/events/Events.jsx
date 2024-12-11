import { useQuery } from '../../hooks/useQuery'
import { useState } from 'react'
import { CalendarEvents } from './calendarEvents/CalendarEvents'
import { ContainerEvents } from './containerEvents/ContainerEvents'
import { FilterEvents } from './filterEvents/FilterEvents'
import { BanerLayout } from '../banerLayout/BanerLayout'

export const Events = () => {
  const queryParams = useQuery()

  const { existedQuery } = queryParams

  const defaultDate = existedQuery('date')

  const [date, setDate] = useState(defaultDate ? defaultDate : 'All Events')

  return (
    <main className='bg-white dark:bg-create'>
      <BanerLayout title='Events' />
      <section className='w-full block gap-5 px-2  py-4 lg:py-16 sm:px-8 lg:px-4 lg:flex'>
        <div className='lg:w-[60%] animate__animated animate__bounceInLeft'>
          <CalendarEvents
            queryValue={queryParams}
            date={date}
            setDate={setDate}
          />
          <FilterEvents queryValue={queryParams} setDate={setDate} />
        </div>
        <div className='w-full lg:w-[40%]'>
          <div className=' border border-whiteBorderInput mt-8 lg:mt-0 dark:border-borderInput'>
            <ContainerEvents
              date={date}
              queryParams={queryParams}
              setDate={setDate}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

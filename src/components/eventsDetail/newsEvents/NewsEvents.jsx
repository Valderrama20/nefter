import { useEffect } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { CardNewEvent } from '../cardNewEvent/CardNewEvent'

export const NewsEvents = () => {
  const { fetcher, data, error, loading } = useFetch({
    url: '/event/?size=3&sort=date-desc',
  })

  useEffect(() => {
    fetcher()
  }, [])

  return (
    <div
      className={`w-full border-2 p-5 border-borderInput ${
        error && 'hidden lg:block'
      } dark:text-white rounded`}
    >
      <h4 className='font-bold text-xl my-2'>Recent Events</h4>

      <CardNewEvent
        data={data}
        loading={loading}
        error={error}
      />
    </div>
  )
}

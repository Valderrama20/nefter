import { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { SkCardEvents } from '../../skeletons/skCardEvents/SkCardEvents'
import { CardNewEvent } from '../eventsDetail/cardNewEvent/CardNewEvent'

export const FooterNewEvents = () => {
  const { fetcher, data, error, loading } = useFetch({
    url: '/event/?size=2&sort=date-desc',
  })

  useEffect(() => {
    fetcher()
  }, [])
  return (
    <>
      <h6 className='font-bold text-[18px] mt-4 mb-2'>News Events</h6>
      {loading && [1, 2].map(skleton => <SkCardEvents key={skleton} />)}
      <CardNewEvent data={data} error={error} />
    </>
  )
}

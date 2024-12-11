import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useFetch } from '../../hooks/useFetch'
import { SkDetailEvent } from '../../skeletons/skDetailEvent/SkDetailEvent'
import { BanerLayout } from '../banerLayout/BanerLayout'
import { ModelComments } from '../modelComments/ModelComments'
import { RequestError } from '../requestError/RequestError'
import { DescriptionEvent } from './descriptionEvent/DescriptionEvent'
import { ImageEventDetail } from './imageEventDetail/ImageEventDetail'
import { NewsEvents } from './newsEvents/NewsEvents'

export const EventsDetails = () => {
  const { id } = useParams()
  const { fetcher, data, loading, error } = useFetch({ url: `/event/${id}` })

  useEffect(() => {
    fetcher()
  }, [id])

  return (
    <main className='bg-white dark:bg-bgDetail'>
      <BanerLayout title='Event Detail' />
      <section className='w-[90%] m-auto py-12 sm:py-28'>
        <div className='lg:flex gap-16'>
          <div className='m-auto sm:w-[90%] lg:w-2/3'>
            {loading && <SkDetailEvent />}
            {error && <RequestError title='Ooops, sorry, the event you are looking for does not exist!'/>}
            {data && !loading && (
              <>
                <ImageEventDetail data={data} />
                <DescriptionEvent data={data} />
              </>
            )}
          </div>
          <div className='flexCenter flex-col lg:w-1/3 mt-12'>
            <NewsEvents />
            <img
              className='mt-12 rounded h-56 w-72 hidden lg:block'
              src={
                'https://uploads-ssl.webflow.com/63b490b0a0787f8735fd1269/63b490b0a0787f83ddfd1299_Neefter-3D-NFT.png'
              }
              alt='poster of Neefter'
            />
          </div>
        </div>
        <ModelComments type={'event'} />
      </section>
    </main>
  )
}

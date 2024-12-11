import { Link } from 'react-router-dom'
import hooks from '../../../hooks/smallHooks'
import { SkCardEvents } from '../../../skeletons/skCardEvents/SkCardEvents'
import { ImageFromAws } from '../../imageFromAws/ImageFromAws'
import { ErrorNewEvents } from '../newsEvents/errorNewEvents/ErrorNewEvents'
import imageDefault from '../../../assets/imageDefault.png'
import styles from './index.module.css'

export const CardNewEvent = ({ data, loading, error }) => {
  return (
    <>
      {loading && [1, 2, 3].map(skleton => <SkCardEvents key={skleton} />)}
      {error && <ErrorNewEvents />}
      {data &&
        !loading &&
        !error &&
        data?.events?.map(event => (
          <div className={`${styles.imageContainer} py-3`} key={event?.id}>
            <Link to={`/eventsDetails/${event?.id}`} className='flex gap-5'>
              <ImageFromAws image={event?.coverImage?.medium || imageDefault} />

              <div className='truncate'>
                <div className='flex items-center gap-2 mb-1 truncate '>
                  <span className='material-symbols-outlined text-white text-xl text-fuchsia500'>
                    calendar_month
                  </span>
                  <span className='mt-1 text-sm text-grayWhite mb-1 dark:text-whitexs'>
                    {hooks.newDate(event?.createdAt)}
                  </span>
                </div>
                <p className='text-gray500 font-bold truncate'>{event.name}</p>
              </div>
            </Link>
          </div>
        ))}
    </>
  )
}

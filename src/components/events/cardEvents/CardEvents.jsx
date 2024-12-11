import { Link } from 'react-router-dom'
import hooks from '../../../hooks/smallHooks'
import { ImageFromAws } from '../../imageFromAws/ImageFromAws'
import styles from './CardEvents.module.css'
import imageDefault from '../../../assets/imageDefault.png'

export default function CardEvents({ data: event }) {
  return (
    <div
      className={`${styles.imageContainer} px-2 h-auto  border-b border-r border-whiteBorderInput dark:border-borderNavMobile`}
    >
      <Link to={`/eventsDetails/${event.id}`} className='py-5 flex gap-3'>
        <ImageFromAws image={event?.coverImage?.medium || imageDefault} />
        <div className='text-white w-[calc(100%-136px)]'>
          <div className='flex items-center gap-2 text-whitePurple'>
            <h3 className='text-xs'>{hooks.newDate(event?.startDate)}</h3>
            <span className='material-symbols-outlined text-lg'>
              calendar_month
            </span>
          </div>

          <p
            title={event?.name}
            className='text-lg text-topBar font-bold dark:text-white truncate'
          >
            {event?.name}
          </p>
          <div className='flex gap-2 mt-2'>
            {event?.Categories?.map(e => (
              <span
                className='text-xs text-topBar dark:text-grayOpacity'
                key={e.id}
              >
                {`${e?.title}`}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}

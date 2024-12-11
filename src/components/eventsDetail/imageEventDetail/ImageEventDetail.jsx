import hooks from '../../../hooks/smallHooks'
import { ImageFromAws } from '../../imageFromAws/ImageFromAws'
import styles from './index.module.css'

export const ImageEventDetail = ({ data: event }) => {
  return (
    <div className={`${styles.containerImage} w-full relative mb-24`}>
      <ImageFromAws image={event?.coverImage?.medium} />
      <ul className='absolute w-full -bottom-10 flex justify-center m-auto py-3 rounded-md bg-white shadow-shadowFilters'>
        <li className='flexCenter gap-2 w-2/6 w-2/6 border-r border-whiteBorderInput pl-2'>
          <span className='material-symbols-outlined text-fuchsia500 text-xl'>
            account_circle
          </span>
          {event?.User?.firstName && event?.User?.lastName ? (
            <span className='text-xs truncate sm:text-sm'>{`${event?.User?.firstName} ${event?.User?.lastName}`}</span>
          ) : (
            <span className='text-xs truncate sm:text-sm'>{event?.User?.email}</span>
          )}
        </li>
        <li className='flexCenter gap-2 w-2/6 w-2/6 border-r pl-2 border-whiteBorderInput'>
          <span className='material-symbols-outlined text-fuchsia500 text-xl'>
            calendar_month
          </span>
          <span className='text-xs sm:text-sm truncate'>
            {hooks.newDate(event?.createdAt)}
          </span>
        </li>
        <li className='flexCenter gap-2 w-2/6 pl-2'>
          <span className='material-symbols-outlined text-fuchsia500 text-xl'>
            chat
          </span>
          <span className='text-sm hidden sm:block'>Comments</span>
        </li>
      </ul>
    </div>
  )
}

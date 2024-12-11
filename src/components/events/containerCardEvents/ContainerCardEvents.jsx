import { Link } from 'react-router-dom'
import hooks from '../../../hooks/smallHooks'
import { SkCardEvents } from '../../../skeletons/skCardEvents/SkCardEvents'
import { EmptyRequest } from '../../emptyRequest/EmptyRequest'
import { ImageFromAws } from '../../imageFromAws/ImageFromAws'
import { RequestError } from '../../requestError/RequestError'
import CardEvents from '../cardEvents/CardEvents'
import styles from './index.module.css'
export const ContainerCardEvents = ({ data, loading, error }) => {
  return (
    <section
      className={`${
        data?.events.length &&
        'grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2'
      }`}
    >
      {loading && [1, 2, 3, 4].map(number => <SkCardEvents key={number} />)}
      {error && <RequestError />}
      {!data?.events.length && !loading && <EmptyRequest />}
      {data && !loading && (
        <div className='animate__animated animate__fadeIn animate__slow'>
          {data?.events?.map(event => (
            <CardEvents data={event} key={event.id} />
          ))}
        </div>
      )}
    </section>
  )
}

import { EmptyRequest } from '../../emptyRequest/EmptyRequest'
import CardEvents from '../../events/cardEvents/CardEvents'

export const UserEvents = ({ data }) => {
  return (
    <>
      <div className='flexCenter mb-8 gap-3'>
        <h1 className='text-center text-2xl dark:text-white'>Your Events</h1>
        <span className='material-symbols-outlined dark:text-white'>event</span>
      </div>
      {!data?.length && (
        <EmptyRequest
          clear={false}
          title='You have not created any events so far'
        />
      )}
      {data && data.map(e => <CardEvents data={e} key={e.id} />)}
    </>
  )
}

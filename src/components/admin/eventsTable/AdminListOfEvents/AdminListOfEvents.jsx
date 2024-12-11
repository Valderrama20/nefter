import { useState } from 'react'
import { Link } from 'react-router-dom'
import { handleAlertConfirmed } from '../../../../alerts/alerts'
import hooks from '../../../../hooks/smallHooks'
import { useFetch } from '../../../../hooks/useFetch'
import { ImageFromAws } from '../../../imageFromAws/ImageFromAws'
import style from '../../styleTablets.module.css'

export const AdminListOfEvents = ({ data: e, allEvents, setEvents }) => {
  const [isApproved, setIsApproved] = useState(e.isApproved)

  const { fetcher: isApprovedEvent } = useFetch({
    url: `/event/${e.id}`,
    type: 'put',
    body: { isApproved: !isApproved },
  })

  const { fetcher: deleteEvent } = useFetch({
    url: `/event/${e.id}`,
    type: 'delete',
  })

  const handleIsApprovedEvent = () => {
    setIsApproved(!isApproved)
    isApprovedEvent()
  }

  const handleDeleteEvent = () => {
    const filterEvents = allEvents.events.filter(event => event.id !== e.id)

    setEvents({ ...allEvents, events: filterEvents })
    deleteEvent()
  }

  const actionsEvents = ({ target }) => {
    const { value } = target
    if (value === 'Approve' || value === 'Disapprove') handleIsApprovedEvent()
    if (value === 'Delete') handleAlertConfirmed({ action: handleDeleteEvent })
  }

  return (
    <tr key={e.id} className='dark:border-table'>
      <td>
        <Link to={`/eventsDetails/${e.id}`}>
          <div className={`${style.collection} dark:text-white`}>
            <ImageFromAws image={e.coverImage.medium || imageDefault} />
            <div>
              <h3>{e.name}</h3>
              <h4>Red</h4>
            </div>
          </div>
        </Link>
      </td>
      <td>
        <h3 className='dark:text-white'>{hooks.newDate(e.startDate)}</h3>
      </td>
      <td>
        <h3 className='dark:text-white'>{hooks.newDate(e.endDate)}</h3>
      </td>
      <td className={style.status1}>
        <div className={style[e.status]}></div>
        <h3>{e.status}</h3>
      </td>
      <td>
        <h3 className={style[isApproved]}>{`${isApproved}`}</h3>
      </td>
      <td>
        <select name='action' className={style.select} onChange={actionsEvents}>
          <option value=''>Actions</option>
          {!isApproved && <option value='Approve'>Approve</option>}
          {isApproved && <option value='Disapprove'>Disapprove</option>}
          <option value='Delete'>Delete</option>
        </select>
      </td>
    </tr>
  )
}

import { useEffect, useState } from 'react'
import { handleAlertConfirmed } from '../../../../alerts/alerts'
import hooks from '../../../../hooks/smallHooks'
import { useFetch } from '../../../../hooks/useFetch'
import { ImageFromAws } from '../../../imageFromAws/ImageFromAws'
import style from '../../styleTablets.module.css'

export const AdminListOfUsers = ({ data: e }) => {
  const [isBanned, setIsBanned] = useState(e.isBanned)

  const [dateEliminated, setDateEliminated] = useState(
    e.deleteDate ? e.deleteDate : '-',
  )

  const { fetcher: isBannedUser } = useFetch({
    url: `/user/${e.id}`,
    type: 'put',
    body: { isBanned: !isBanned },
  })

  const { fetcher: deletedUser } = useFetch({
    url: `/user/${e.id}`,
    type: 'delete',
  })

  const { fetcher: unDeletedUser } = useFetch({
    url: `/user/${e.id}`,
    type: 'put',
    body: { deleteDate: null },
  })

  const handleIsBannedUser = () => {
    setIsBanned(!isBanned)
    isBannedUser()
  }

  const handleIsDeletedUser = () => {
    const dateDeleted = new Date()
    setDateEliminated(dateDeleted)
    deletedUser()
  }

  const handleIsUndeletedUser = () => {
    setDateEliminated('-')
    unDeletedUser()
  }

  const actionsUsers = ({ target }) => {
    const { value } = target
    if (value === 'Banned' || value === 'UnBann') handleIsBannedUser()
    if (value === 'Delete')
      handleAlertConfirmed({ action: handleIsDeletedUser })
    if (value === 'Undelete') handleIsUndeletedUser()
  }

  return (
    <tr key={e.id} className='dark:border-table'>
      <td>
        <div
          className={`flexCenter cursor-pointer bg-bgPurple w-10 h-10 rounded-full text-white font-bold uppercase text-base sm:text-2xl sm:w-12 sm:h-12 ${style.collection} dark:text-white`}
        >
          <ImageFromAws image={e.avatarUrl} email={e.email} />
        </div>
      </td>
      <td>
        <h3 className='dark:text-white'>{e.email}</h3>
      </td>
      <td>
        <h3 className='dark:text-white'>{e.role}</h3>
      </td>
      <td>
        <h3 className={style[isBanned]}>{`${isBanned}`}</h3>
      </td>
      <td>
        <h3 className='dark:text-white'>{` ${
          dateEliminated === '-'
            ? dateEliminated
            : hooks.newDate(dateEliminated)
        }`}</h3>
      </td>
      <td>
        <select
          name='action'
          value='Actions'
          className={style.select}
          onChange={actionsUsers}
        >
          <option value=''>Actions</option>
          {!isBanned && <option value={'Banned'}>Banned </option>}
          {isBanned && <option value={'UnBann'}>Unban</option>}
          {dateEliminated === '-' ? (
            <option value='Delete'>Delete</option>
          ) : (
            <option value='Undelete'>Undelete</option>
          )}
        </select>
      </td>
    </tr>
  )
}

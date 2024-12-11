import { Link } from 'react-router-dom'
import { useState } from 'react'
import hooks from '../../../../hooks/smallHooks'
import { ImageFromAws } from '../../../imageFromAws/ImageFromAws'
import imageDefault from '../../../../assets/imageDefault.png'
import style from '../../styleTablets.module.css'
import { useFetch } from '../../../../hooks/useFetch'
import { handleAlertConfirmed } from '../../../../alerts/alerts'
export const AdminListOfCollection = ({
  data: e,
  dataCollection,
  setDataCollection,
}) => {
  const [isApproved, setIsApproved] = useState(e.isApproved)

  const { fetcher: fetcherUpdateCollection } = useFetch({
    url: `/collection/${e.id}`,
    type: 'put',
    body: { isApproved: !isApproved },
  })

  const { fetcher: fetcherDeleteCollection } = useFetch({
    url: `/collection/${e.id}`,
    type: 'delete',
  })

  const handleIsApproved = () => {
    fetcherUpdateCollection()
    setIsApproved(!isApproved)
  }

  const handleDeleteCollection = () => {
    const filterCollections = dataCollection.collections.filter(
      collection => collection.id !== e.id,
    )

    setDataCollection({ ...dataCollection, collections: filterCollections })
    fetcherDeleteCollection()
  }

  const actionsCollections = ({ target }) => {
    const { value } = target
    if (value === 'Approve' || value === 'Disapprove') handleIsApproved()
    if (value === 'Delete')
      handleAlertConfirmed({ action: handleDeleteCollection })
  }

  return (
    <tr key={e.id} className='dark:border-table'>
      <td>
        <Link to={`/collectionDetails/${e.id}`}>
          <div className={`${style.collection} dark:text-white`}>
            <ImageFromAws image={e.coverImage.medium || imageDefault} />
            <div>
              <h3>{e.name}</h3>
              <h4>Red</h4>
            </div>
          </div>
        </Link>
      </td>
      <td className={style.td1}>
        <h3 className='dark:text-white'>{hooks.newDate(e.presaleDate)}</h3>
      </td>
      <td className={style.td2}>
        <h3 className='dark:text-white'>{hooks.newDate(e.mintDate)}</h3>
      </td>
      <td className={style.td3}>
        <h3 className='dark:text-white'>{e.mintPrice}</h3>
      </td>
      <td className={style.status1}>
        <div className={style[e.status]}></div>
        <h3 className='dark:text-white'>{e.status}</h3>
      </td>
      <td>
        <h3 className={style[isApproved]}>{`${isApproved}`}</h3>
      </td>
      <td>
        <select
          name='action'
          className={style.select}
          onChange={actionsCollections}
        >
          <option value=''>Actions</option>
          {!isApproved && <option value='Approve'>Approve</option>}
          {isApproved && <option value='Disapprove'>Disapprove</option>}

          <option value='Delete'>Delete</option>
        </select>
      </td>
    </tr>
  )
}

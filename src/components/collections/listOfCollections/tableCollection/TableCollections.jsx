import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import hooks from '../../../../hooks/smallHooks'
import { SKTable } from '../../../../skeletons/skTable/SKTable'
import { EmptyRequest } from '../../../emptyRequest/EmptyRequest'
import { ImageFromAws } from '../../../imageFromAws/ImageFromAws'
import { RequestError } from '../../../requestError/RequestError'
import { FavoriteCollection } from '../../favoriteCollection/FavoriteCollection'
import imageDefault from '../../../../assets/imageDefault.png'
import style from './TableCollections.module.css'

export const TableCollections = ({ data, loading, error }) => {
  return (
    <div className={`${style.padre} scrollbar overflow-y-auto lg:overflow-auto`}>
      {error && <RequestError />}
      {loading && <SKTable />}
      {!data?.collections.length && !loading && <EmptyRequest />}
      {data?.collections.length && !loading ? (
        <table
          className={`${style.table} lg:w-full dark:bg-body animate__animated animate__slideInLeft`}
        >
          <thead>
            <tr className='dark:border-table'>
              <th className='dark:text-white'>No.</th>
              <th className='dark:text-white'>Collection</th>
              <th className={`${style.td1} dark:text-white`}>presale Date</th>
              <th className={`${style.td2} dark:text-white`}>Mint Date</th>
              <th className={`${style.td3} dark:text-white`}>Mint Price</th>
            </tr>
          </thead>
          <tbody className='dark:border-table'>
            {data?.collections.map((e, index) => (
              <tr key={e.id} className='dark:border-table'>
                <td className='dark:text-white'>{index + 1}</td>
                <td>
                  <div className={`${style.collection} dark:text-white`}>
                    <FavoriteCollection id={e.id} itIsFavorite={false} />
                    <Link
                      to={`/collectionDetails/${e.id}`}
                      className={`${style.collection}`}
                    >
                      <ImageFromAws image={e.coverImage.medium || imageDefault} />
                      <h3 className='dark:text-white'>{e.name}</h3>
                    </Link>
                  </div>
                </td>
                <td className={style.td1}>
                  <h3 className='dark:text-white'>
                    {hooks.newDate(e.presaleDate)}
                  </h3>
                </td>
                <td className={style.td2}>
                  <h3 className='dark:text-white'>
                    {hooks.newDate(e.mintDate)}
                  </h3>
                </td>
                <td className={style.td3}>
                  <h3 className='dark:text-white'>{e.mintPrice}</h3>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  )
}

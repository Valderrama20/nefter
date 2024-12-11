import { useEffect } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import style from '../styleTablets.module.css'
import { SKTable } from '../../../skeletons/skTable/SKTable'
import { AdminListOfUsers } from './AdminListOfUsers/AdminListOfUsers'
import { useLocation } from 'react-router'
export default function TabletUsers({ searchName, dinamicQuery }) {
  const { resetValue } = dinamicQuery
  const isSearched = searchName('q')
  const { search } = useLocation()
  const { data, fetcher, loading } = useFetch({
    url: `/user/all/${isSearched ? `?q=${isSearched}` : ''}`,
  })

  useEffect(() => {
    fetcher()
  }, [search])

  return (
    <div className='overflow-y-auto scrollbar lg:overflow-auto'>
      <button
        onClick={resetValue}
        className='block h-10 ml-auto mb-5 w-36 rounded-full bg-whiteInputs dark:bg-modalDark dark:text-white'
      >
        Clear
      </button>
      {data && !loading ? (
        <table className={`${style.table} lg:w-full dark:bg-body `}>
          <thead>
            <tr className='dark:border-table'>
              <th className='dark:text-white'>Users</th>
              <th className={`dark:text-white`}>Email</th>
              <th className={`dark:text-white`}>Role</th>
              <th className={`dark:text-white`}>Banned</th>
              <th className={`dark:text-white`}>Delete Date</th>
              <th className={`dark:text-white`}>Action</th>
            </tr>
          </thead>
          <tbody className='dark:border-table'>
            {data?.map(e => (
              <AdminListOfUsers data={e} key={e.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <SKTable />
      )}
    </div>
  )
}

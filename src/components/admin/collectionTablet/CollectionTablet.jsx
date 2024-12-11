import { useEffect } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import style from '../styleTablets.module.css'
import { useLocation } from 'react-router'
import { SKTable } from '../../../skeletons/skTable/SKTable'
import { ModelPagination } from '../../modelPagination/ModelPagination'
import { AdminListOfCollection } from './AdminListOfCollection/AdminListOfCollection'
import { FilterAdmin } from '../filterAdmin/FilterAdmin'
import { EmptyRequest } from '../../emptyRequest/EmptyRequest'

export default function CollectionTablet({ dinamicQuery }) {
  const { search } = useLocation()

  const { data, setData, loading, fetcher } = useFetch({
    url: `/collection/all/${search?.length ? `${search}&` : '?'}`,
  })
  const { pagination } = dinamicQuery

  useEffect(() => {
    fetcher()
  }, [search])

  return (
    <div className='overflow-y-auto scrollbar lg:overflow-auto'>
      <FilterAdmin dinamicQuery={dinamicQuery} />

      {data?.collections?.length && !loading && (
        <div className=''>
          <table className={`${style.table} mt-5 lg:w-full dark:bg-body`}>
            <thead>
              <tr className='dark:border-table'>
                <th className='dark:text-white'>Collection</th>
                <th className={`dark:text-white`}>presale Date</th>
                <th className={`dark:text-white`}>Mint Date</th>
                <th className={`dark:text-white`}>Mint Price</th>
                <th className={`dark:text-white`}>Status</th>
                <th className={`dark:text-white`}>Approved</th>
                <th className={`dark:text-white`}>Action</th>
              </tr>
            </thead>
            <tbody className='dark:border-table'>
              {data?.collections.map(e => (
                <AdminListOfCollection
                  key={e.id}
                  data={e}
                  setDataCollection={setData}
                  dataCollection={data}
                />
              ))}
            </tbody>
          </table>

          <ModelPagination
            numberPage={data?.totalPages}
            changePage={pagination}
          />
        </div>
      )}

      {!data?.collections?.length && !loading && (
        <EmptyRequest title='There are no collections with the searched parameters.' />
      )}

      {loading && <SKTable />}
    </div>
  )
}

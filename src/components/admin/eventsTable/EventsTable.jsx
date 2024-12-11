import { useEffect, useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import style from '../styleTablets.module.css'
import { useLocation } from 'react-router'
import { SKTable } from '../../../skeletons/skTable/SKTable'
import { ModelPagination } from '../../modelPagination/ModelPagination'
import { AdminListOfEvents } from './AdminListOfEvents/AdminListOfEvents'
import { FilterAdmin } from '../filterAdmin/FilterAdmin'
import { EmptyRequest } from '../../emptyRequest/EmptyRequest'

export default function EventsTable({ dinamicQuery }) {
  const { search } = useLocation()

  const { data, setData, loading, fetcher } = useFetch({
    url: `/event/all/${search?.length ? `${search}&` : '?'}`,
  })

  const { pagination } = dinamicQuery

  useEffect(() => {
    fetcher()
  }, [search])

  return (
    <div className='overflow-y-auto scrollbar lg:overflow-auto'>
      <FilterAdmin dinamicQuery={dinamicQuery} />
      {data?.events?.length && !loading && (
        <>
          <table className={`${style.table} mt-5 lg:w-full  dark:bg-body`}>
            <thead>
              <tr className='dark:border-table'>
                <th className='dark:text-white'>Events</th>
                <th className={`dark:text-white`}>Start Date</th>
                <th className={`dark:text-white`}>End Date</th>
                <th className={`dark:text-white`}>Status</th>
                <th className={`dark:text-white`}>Approved</th>
                <th className={`dark:text-white`}>Action</th>
              </tr>
            </thead>
            <tbody className='dark:border-table'>
              {data?.events.map(e => (
                <AdminListOfEvents
                  key={e.id}
                  data={e}
                  allEvents={data}
                  setEvents={setData}
                />
              ))}
            </tbody>
          </table>
          <ModelPagination
            numberPage={data?.totalPages}
            changePage={pagination}
          />
        </>
      )}

      {!data?.events?.length && !loading && (
        <EmptyRequest title='There are no events with the searched parameters.' />
      )}

      {loading && <SKTable />}
    </div>
  )
}

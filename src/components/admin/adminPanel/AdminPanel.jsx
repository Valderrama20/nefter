import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useQuery } from '../../../hooks/useQuery'
import CollectionTablet from '../collectionTablet/CollectionTablet'
import EventsTable from '../eventsTable/EventsTable'
import { SearchBarAdmin } from '../searchBarAdmin/SearchBarAdmin'
import TabletUsers from '../tabletUsers/TabletUsers'
import style from './AdminPanel.module.css'
export default function AdminPanel() {
  const tables = {
    collections: 'collection',
    events: 'event',
    users: 'user',
  }
  const { table } = useParams()
  const navigate = useNavigate()

  ![tables.collections, tables.events, tables.users, 'table'].includes(table) &&
    navigate('/404Page')

  const isTableCollection = table === tables.collections || table === 'table'
  const isTableUser = table === tables.users
  const isTableEvents = table === tables.events

  const dinamicQuery = useQuery()
  const { existedQuery } = dinamicQuery

  // const tableExisted = existedQuery('table')

  const changeTable = ({ target }) => {
    const { value } = target
    navigate(`/admin/${value}`)
  }

  const handleSearch = search => {
    isTableUser
      ? navigate(`/admin/${table}/?q=${search}`)
      : navigate(`/admin/${table}/?name=${search}`)
  }

  return (
    <div className={`w-full bg-white pb-8 ${style.padre} dark:bg-body px-4`}>
      <div className={`py-6 flex gap-5 w-full sm:gap-12`}>
        <SearchBarAdmin searchParams={handleSearch} />

        <select
          onChange={changeTable}
          className='sm:px-8 text-sm dark:bg-body dark:text-white'
          defaultValue={table}
        >
          <option value={tables.collections}>{tables.collections}</option>
          <option value={tables.events}>{tables.events}</option>
          <option value={tables.users}>{tables.users}</option>
        </select>
      </div>
      {isTableCollection && <CollectionTablet dinamicQuery={dinamicQuery} />}
      {isTableEvents && <EventsTable dinamicQuery={dinamicQuery} />}
      {isTableUser && (
        <TabletUsers searchName={existedQuery} dinamicQuery={dinamicQuery} />
      )}
    </div>
  )
}

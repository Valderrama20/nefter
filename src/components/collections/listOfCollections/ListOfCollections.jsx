import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { CardsCollections } from './cardsCollection/CardsCollections'
import { TableCollections } from './tableCollection/TableCollections'

const modeView = {
  modeCard: 'Cards',
  modeTable: 'Table',
}

export const ListOfCollections = ({ dataCollection, changeUrl }) => {
  const [mode, setMode] = useState(modeView.modeCard)
  const { existedQuery } = changeUrl
  const existedSearch = existedQuery('name')
  const { search } = useLocation()
  const { data, loading, error, fetcher } = dataCollection

  useEffect(() => {
    fetcher()
  }, [search])

  const changeMode = () => {
    mode === modeView.modeCard
      ? setMode(modeView.modeTable)
      : setMode(modeView.modeCard)
  }

  return (
    <section>
      <div className='w-full my-5 mr-5 px-3 flex items-center justify-between sm:px-10 sm:mr-5'>
        {existedSearch ? (
          <h1 className='ml-5 text-sm text-end sm:text-lg dark:text-white'>
            Search: 🕵️ {existedSearch}
          </h1>
        ) : null}
        <button
          className='ml-auto py-1 px-5 font-bold bg-bgSelect rounded text-xs sm:px-5 sm:text-base sm:py-2.5 dark:text-white'
          onClick={() => changeMode()}
        >
          {mode}
        </button>
      </div>
      {mode === modeView.modeCard ? (
        <CardsCollections data={data} loading={loading} error={error} />
      ) : (
        <TableCollections data={data} loading={loading} error={error} />
      )}
    </section>
  )
}

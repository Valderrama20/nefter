import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { routes } from '../../../routes/appRouter/helperRoutes'
import { ModelPagination } from '../../modelPagination/ModelPagination'
import { ContainerCardEvents } from '../containerCardEvents/ContainerCardEvents'

export const ContainerEvents = ({ date, queryParams, setDate }) => {
  const { existedQuery, pagination } = queryParams
  const { search } = useLocation()
  const { fetcher, data, error, loading } = useFetch({
    url: `/event${search.length ? `${search}&` : '?'}size=4`,
  })

  useEffect(() => {
    fetcher()
    !existedQuery('date') && setDate('All Events')
  }, [search])

  return (
    <>
      <div className='flex mb-2 items-center justify-between px-8 py-4 '>
        <h3 className='text-grayWhite text-xs sm:text-lg dark:text-white'>
          {`${date} ${
            existedQuery('name') ? `- 🕵️ ${existedQuery('name')}` : ''
          }`}
        </h3>
        <Link
          to={routes.createEvents}
          className='flexCenter gap-2 text-grayWhite dark:text-white'
        >
          <span className='text-xs sm:text-base'>CREATE EVENT</span>
          <span className='material-symbols-outlined'>add_circle</span>
        </Link>
      </div>

      <ContainerCardEvents data={data} loading={loading} error={error} />
      {!loading && (
        <ModelPagination
          numberPage={data?.totalPages}
          changePage={pagination}
        />
      )}
    </>
  )
}

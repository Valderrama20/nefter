import { useContext } from 'react'
import { useLocation } from 'react-router'
import { useFetch } from '../../hooks/useFetch'
import { useQuery } from '../../hooks/useQuery'
import { AuthContext } from '../../routes/auth/userContext'
import { BanerLayout } from '../banerLayout/BanerLayout'
import { ModelPagination } from '../modelPagination/ModelPagination'
import { FiltersCollection } from './filtersCollection/FiltersCollection'
import { ListOfCollections } from './listOfCollections/ListOfCollections'

export const Collections = () => {
  const { user } = useContext(AuthContext)
  const changeUrl = useQuery()
  const { pagination } = changeUrl
  const { search } = useLocation()

  const dataCollection = useFetch({
    url: `/collection${search.length ? `${search}&` : '?'}size=8&user=${
      user.id
    }`,
  })
  const { data, loading } = dataCollection
 
  return (
    <main className='bg-white dark:bg-body'>
      <BanerLayout title={'Collections'} />
      <FiltersCollection changeUrl={changeUrl} />
      <ListOfCollections
        dataCollection={dataCollection}
        changeUrl={changeUrl}
      />
      {!loading && (
        <ModelPagination
          numberPage={data?.totalPages}
          changePage={pagination}
        />
      )}
    </main>
  )
}

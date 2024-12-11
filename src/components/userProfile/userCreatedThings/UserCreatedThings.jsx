import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useFetch } from '../../../hooks/useFetch'
import { UserCollections } from '../userCollections/UserCollections'
import { UserComments } from '../userComments/UserComments'
import { UserEvents } from '../userEvents/UserEvents'
import { UserFavoritesCollection } from '../userFavoritesCollection/UserFavoritesCollection'

export const UserCreatedThings = ({ user }) => {
  const { search } = useLocation()
  const query = new URLSearchParams(search)
  const thingsUser = query.get('action') || 'favorite'

  const isUserEventsCollection =
    thingsUser === 'events' || thingsUser === 'collection'

  const navigate = useNavigate()
  const { fetcher, data, setData, loading, error } = useFetch({
    url: `/${isUserEventsCollection ? '' : `${thingsUser}/`}user/${user?.id}`,
  })

  useEffect(() => {
    fetcher()
  }, [search])

  return (
    <section className='border-l border-whiteBorderInput py-5 sm:w-[60%] lg:w-[60%] dark:border-borderInput'>
      <div className='flexCenter gap-1 mt-8 mb-12 mx-1 sm:gap-3 '>
        <button
          onClick={() => navigate('/userProfile/?action=favorite')}
          className='py-2 w-28 rounded-full bg-gradientButtonFilter text-white font-bold text-xs sm:text-base'
        >
          Favorites
        </button>
        <button
          onClick={() => navigate('/userProfile/?action=comment')}
          className='py-2 w-28 rounded-full bg-gradientButtonFilter text-white font-bold text-xs sm:text-base'
        >
          Comments
        </button>
        <button
          onClick={() => navigate('/userProfile/?action=events')}
          className='py-2 w-28 rounded-full bg-gradientButtonFilter text-white font-bold text-xs sm:text-base'
        >
          Events
        </button>
        <button
          onClick={() => navigate('/userProfile/?action=collection')}
          className='py-2 w-28 rounded-full bg-gradientButtonFilter text-white font-bold text-xs sm:text-base'
        >
          Collections
        </button>
      </div>
      <div className=' scrollbar sm:h-screen sm:overflow-y-scroll  '>
        {(thingsUser === 'favorite' || thingsUser === '') && (
          <UserFavoritesCollection
            setData={setData}
            data={data}
            loading={loading}
            error={error}
          />
        )}
        {thingsUser === 'comment' && (
          <UserComments data={data} loading={loading} />
        )}
        {thingsUser === 'collection' && (
          <UserCollections data={data?.Collections} />
        )}
        {thingsUser === 'events' && (
          <UserEvents data={data?.Events} loading={loading} />
        )}
      </div>
    </section>
  )
}

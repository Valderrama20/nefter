import { SKCardCollection } from '../../../skeletons/skCardCollection/SKCardCollection'
import { EmptyRequest } from '../../emptyRequest/EmptyRequest'
import { CardsNFT } from '../../home/cardsNFT/CardsNFT'

export const UserFavoritesCollection = ({ data, setData, loading, error }) => {
  const handleDeleteFavorite = id => {
    const newsColecciones = data.filter(
      collection => collection.CollectionId !== id,
    )
    setData(newsColecciones)
  }

  return (
    <section>
      <h1 className='text-center text-2xl my-8 dark:text-white'>
        Your favorite collections ❤️
      </h1>
      <div className='px-2 flex flex-wrap justify-center gap-10 sm:m-5 sm:px-5 animate__animated animate__slideInLeft'>
        <>
          {error && <RequestError />}

          <div className='px-2 flex flex-wrap justify-center gap-10 sm:m-5 sm:px-5 animate__animated animate__slideInLeft'>
            {loading && [1, 2, 3, 4].map(sk => <SKCardCollection key={sk} />)}

            {data && !data?.length && !loading && (
              <EmptyRequest title='No favorite collections yet' clear={false} />
            )}

            {data &&
              data[0]?.Collection &&
              !loading &&
              data?.map(e => {
                if (!e.Collection) return
                return (
                  <CardsNFT
                    data={e.Collection}
                    key={e.id}
                    deleteCard={handleDeleteFavorite}
                  />
                )
              })}
          </div>
        </>
      </div>
    </section>
  )
}

import { SKCardCollection } from '../../../../skeletons/skCardCollection/SKCardCollection'
import { EmptyRequest } from '../../../emptyRequest/EmptyRequest'
import { CardsNFT } from '../../../home/cardsNFT/CardsNFT'
import { RequestError } from '../../../requestError/RequestError'

export const CardsCollections = ({ data, loading, error }) => {
  return (
    <>
      {error && <RequestError />}

      <div className='px-2 flex flex-wrap justify-center gap-10 sm:m-5 sm:px-5 animate__animated animate__slideInLeft'>
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map(sk => <SKCardCollection key={sk} />)}

        {!data?.collections.length && !loading && <EmptyRequest />}

        {data &&
          !loading &&
          data?.collections.map(e => <CardsNFT data={e} key={e.id} />)}
      </div>
    </>
  )
}

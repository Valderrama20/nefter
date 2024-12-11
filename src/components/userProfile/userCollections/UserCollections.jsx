import React from 'react'
import { CardsNFT } from '../../home/cardsNFT/CardsNFT'
import { EmptyRequest } from '../../emptyRequest/EmptyRequest'

export const UserCollections = ({ data }) => {
  return (
    <>
      <div className='flexCenter mb-8 gap-3'>
        <h1 className='text-center text-2xl dark:text-white'>Your Collections</h1>
        <span className='material-symbols-outlined dark:text-white'>apps</span>
      </div>
      <div className='px-2 flex flex-wrap justify-center gap-10 sm:m-5 sm:px-5 animate__animated animate__slideInLeft'>
        {!data?.length && (
          <EmptyRequest
            title='You have not created collections so far.'
            clear={false}
          />
        )}
        {data && data.map(e => <CardsNFT data={e} key={e.id} />)}
      </div>
    </>
  )
}

import React from 'react'
import { useLocation } from 'react-router'
import { convertArrayNumberPage } from './helperPagination'

export const ModelPagination = ({ numberPage = 1, changePage }) => {
  const { search } = useLocation()
  const query = new URLSearchParams(search)
  let currentPage = Number(query.get('page')) || 1

  const handleNextPage = () => {
    changePage(currentPage + 1)
  }
  const handlePrevPage = () => {
    changePage(currentPage - 1)
  }
  const pages = convertArrayNumberPage(numberPage, currentPage)
  return (
    <div className='flexCenter gap-5 w-full py-8 px-2'>
      {currentPage !== 1 && (
        <button
          onClick={handlePrevPage}
          className='w-12 h-12 rounded-full bg-gradientButtonFilter font-bold text-white'
        >
          {'<'}
        </button>
      )}
      {pages.map(page => (
        <button
          className={`w-12 h-12 rounded-full ${
            currentPage === page ? 'bg-gradientButtonFilter' : 'bg-grayTopBar'
          }  font-bold text-white text-xs sm:text-base`}
          onClick={() => changePage(page)}
          key={page}
        >
          {page}
        </button>
      ))}
      {numberPage !== currentPage && numberPage !== 0 && (
        <button
          onClick={handleNextPage}
          className='w-12 h-12 rounded-full bg-gradientButtonFilter font-bold text-white'
        >
          {'>'}
        </button>
      )}
    </div>
  )
}

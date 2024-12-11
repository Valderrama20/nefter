import React from 'react'

export const ErrorsForm = ({ error, nameError }) => {
  return (
    <>
      {error?.[nameError] && (
        <div className='flex items-center gap-2'>
          <span className='text-red500 text-xs font-bold block mt-1 ml-2'>
            {error[nameError]}
          </span>
          <i className='bi bi-exclamation-triangle-fill text-xs mt-1 text-red500'></i>
        </div>
      )}
    </>
  )
}

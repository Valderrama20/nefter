import React from 'react'
import { Spinner } from '../../../sppiner/Sppiner'

export const ViewImage = ({ image, loading }) => {
  console.log(image)
  return (
    <>
      {image && (
        <img
          src={image}
          className='animate__animated animate__zoomInDown animate__delay-1s rounded-full w-20 h-20 object-cover block col-span-2 absolute m-auto  right-0 -top-20 sm:right-10  sm:w-28 sm:h-28 lg:right-10 lg:-top-20 lg:w-36 lg:h-36 '
        />
      )}
      {loading && (
        <div className='flexCenter m-auto rounded-full bg-grayTopBar border w-20 h-20  object-cover block col-span-2 absolute m-auto  right-0 -top-20 sm:right-10  sm:w-28 sm:h-28 lg:right-10 lg:-top-20 lg:w-36 lg:h-36 '>
          <Spinner w={8} h={8} />
        </div>
      )}
    </>
  )
}

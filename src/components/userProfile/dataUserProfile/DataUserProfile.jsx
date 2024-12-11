import React from 'react'
import { useSelector } from 'react-redux'

export const DataUserProfile = ({ userData }) => {
  const dataUserProfile = useSelector(state => state.dataUserProfile)
  const user = dataUserProfile ? dataUserProfile : userData
  return (
    <>
      <div className='flex items-center mb-12 gap-3'>
        <h2 className='font-bold text-xl lg:ml-9 lg:text-2xl'>
          Your information
        </h2>
        <span className='material-symbols-outlined'>badge</span>
      </div>
      {(user?.firstName || user?.lastName) && (
        <>
          <div className='flex items-center gap-3'>
            <span className='font-bold text-xl'>Your name</span>
            <span className='material-symbols-outlined'>account_circle</span>
          </div>
          <p className='my-3'>{`${user?.firstName} ${user?.lastName}`}</p>
        </>
      )}
      <div className='flex items-center gap-3'>
        <span className='font-bold text-xl'>Your email</span>
        <span className='material-symbols-outlined'>mail</span>
      </div>
      <p className='my-3'>{userData.email}</p>

      {user?.phone && (
        <>
          <div className='flex items-center gap-3'>
            <span className='font-bold text-xl'>Your phone</span>
            <span className='material-symbols-outlined'>phone_enabled</span>
          </div>
          <p className='my-3'>{user.phone}</p>
        </>
      )}

      {user?.country && (
        <>
          <div className='flex items-center gap-3'>
            <span className='font-bold text-xl'>Your country</span>
            <span className='material-symbols-outlined'>emoji_flags</span>
          </div>
          <p className='my-3'>{user?.country}</p>
        </>
      )}
    </>
  )
}

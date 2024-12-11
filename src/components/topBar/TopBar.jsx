import React, { useContext } from 'react'
import { AuthContext } from '../../routes/auth/userContext'
import { SocialNetWork } from '../socialNetwork/SocialNetWork'

export const TopBar = () => {
  const { user } = useContext(AuthContext)

  return (
    <section className='bg-whiteTopBar h-9 text-white px-2 sm:px-0 dark:bg-grayTopBar'>
      <div className='w-full sm:w-4/5 m-auto flex justify-between'>
        <div className='flex items-center h-9 gap-2 sm:gap-5 '>
          <span className='text-topBar bg-white py-1 px-5 block text-xs rounded hidden sm:block dark:bg-bgButtonTopBar dark:text-white'>
            Ethereum
          </span>
          <span className='text-topBar bg-white py-1 px-5 block text-xs rounded dark:bg-bgButtonTopBar dark:text-white'>
            English
          </span>
          {user.email ? (
            <span className='text-topBar py-1 px-5 block text-xs rounded dark:text-white'>
              {user.email}
            </span>
          ) : null}
        </div>
        <div className='items-center gap-8 hidden sm:flex'>
          <div className='items-center h-9 gap-5 hidden lg:flex'>
            <span className='text-topBar text-xs dark:text-white'>
              Product Coming
            </span>
            <div className='flexCenter h-6 px-5 block text-sm rounded bg-bgCounter'>
              5 : 21 : 24 : 20
            </div>
          </div>
          <SocialNetWork />
        </div>
      </div>
    </section>
  )
}

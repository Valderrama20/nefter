import { useState } from 'react'

export const SocialNetWork = () => {
  return (
    <ul className='flex text-white text-sm gap-3'>
      {/* <li>
        <i className='bi bi-facebook'></i>
      </li> */}
      <li className='flexCenter w-8 h-8 rounded-full bg-bgGradientAccount'>
        <i className='bi bi-twitter'></i>
      </li>
      <li className='flexCenter w-8 h-8 rounded-full bg-zinc900'>
        <i className='bi bi-messenger'></i>
      </li>
      <li className='flexCenter w-8 h-8 rounded-full bg-zinc900'>
        <i className='bi bi-instagram'></i>
      </li>
      <li className='flexCenter w-8 h-8 rounded-full bg-zinc900'>
        <i className='bi bi-linkedin'></i>
      </li>
    </ul>
  )
}

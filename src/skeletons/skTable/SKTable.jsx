import React from 'react'

export const SKTable = () => {
  return (
    <div
      role='status'
      className='p-4 space-y-4 border border-gray200 rounded shadow animate-pulse w-[840px] lg:w-full dark:border-zinc800'
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map(number => (
        <div
          key={number}
          className='flex items-center justify-between pb-8 border-b border-gray200 my-5 dark:border-zinc800'
        >
          <div className='h-4 bg-gray200 rounded-full w-8 mb-2.5 dark:bg-zinc700'></div>
          <div className='w-32 h-4 bg-gray200 rounded-full dark:bg-zinc700'></div>
          <div className='w-32 h-3.5 bg-gray200 rounded-full dark:bg-zinc700'></div>
          <div className='w-32 h-3.5 bg-gray200 rounded-full dark:bg-zinc700'></div>
          <div className='w-32 h-3.5 bg-gray200 rounded-full dark:bg-zinc700'></div>
        </div>
      ))}
    </div>
  )
}

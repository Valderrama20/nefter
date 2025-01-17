export const SkComment = () => {
  return (
    <div className='flex border-t gap-8 py-5 border-borderInput relative sm:static'>
      <svg
        className='w-12 h-12 sm:w-20 sm:h-20 absolute text-gray400 sm:static dark:text-zinc700'
        aria-hidden='true'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
          clipRule='evenodd'
        ></path>
      </svg>
      <div className='w-[70%]'>
        <div className='ml-20 mb-5 sm:ml-0 sm:mb-0 w-full'>
          <div className='w-full sm:w-52 mt-2 h-2.5 bg-gray200 rounded-full dark:bg-gray-700 mb-2 dark:bg-zinc700'></div>
          <div className='mb-3 h-2 bg-gray200 rounded-full dark:bg-gray-700 w-32 mb-2 dark:bg-zinc700'></div>
        </div>
        <div className='mb-3 h-2 bg-gray200 rounded-full dark:bg-gray-700 w-[90%] mb-2 dark:bg-zinc700'></div>
        <div className='mb-3 h-2 bg-gray200 rounded-full dark:bg-gray-700 w-16 mb-2 dark:bg-zinc700'></div>
      </div>
    </div>
  )
}

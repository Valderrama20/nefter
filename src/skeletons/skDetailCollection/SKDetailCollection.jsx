export const SKDetailCollection = () => {
  return (
    <div
      role='status'
      className='block m-auto w-full py-16 w-[90%] lg:flex rounded shadow animate-pulse'
    >
      <div className='w-full lg:w-2/5 rounded '>
        <div className='flexCenter border border-gray200 w-full m-auto rounded-2xl h-96 lg:w-4/5 lg:min-h-full dark:border-zinc800'>
          <svg
            className='w-12 h-12 text-gray400 dark:text-zinc700'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 640 512'
          >
            <path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z' />
          </svg>
        </div>
      </div>

      <div className='mt-12 w-full lg:w-3/5 lg:mt-0'>
        <div className='h-3 bg-gray200 rounded-full w-48 mb-5 dark:bg-zinc700 '></div>
        <div className='h-2.5 bg-gray200 rounded-full mb-2.5 dark:bg-zinc700'></div>
        <div className='h-2.5 bg-gray200 rounded-full mb-2.5 dark:bg-zinc700'></div>
        <div className='h-2.5 bg-gray200 rounded-full mb-2.5 dark:bg-zinc700'></div>
        <div className='h-2.5 bg-gray200 rounded-full mb-2.5 dark:bg-zinc700'></div>
        <div className='h-2.5 bg-gray200 rounded-full mb-2.5 dark:bg-zinc700'></div>
        <div className='sm:flex justify-between items-center mt-10 lg:block lg:mt-0'>
          <div className='flex items-center my-8 space-x-3'>
            <svg
              className='text-gray400 w-20 h-20  dark:text-zinc700'
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
            <div>
              <div className='h-2.5 bg-gray200 rounded-full w-32 mb-3 dark:bg-zinc700'></div>
              <div className='w-36 h-2 bg-gray200 rounded-full lg:w-48 dark:bg-zinc700'></div>
            </div>
          </div>
          <div className='flex gap-2 sm:gap-12'>
            <div>
              <div className='h-2.5 bg-gray200 rounded-full w-32 mb-3 dark:bg-zinc700'></div>
              <div className='w-32 h-2 bg-gray200 rounded-full mb-8 lg:w-48 dark:bg-zinc700'></div>
              <div className='h-2.5 bg-gray200 rounded-full w-32 mb-3 dark:bg-zinc700'></div>
              <div className='w-32 h-2 bg-gray200 rounded-full lg:w-48 dark:bg-zinc700'></div>
            </div>
            <div>
              <div className='h-2.5 bg-gray200 rounded-full w-32 mb-3 dark:bg-zinc700'></div>
              <div className='w-32 h-2 bg-gray200 rounded-full mb-8 lg:w-48 dark:bg-zinc700'></div>
              <div className='h-2.5 bg-gray200 rounded-full w-32 mb-3 dark:bg-zinc700'></div>
              <div className='w-32 h-2 bg-gray200 rounded-full lg:w-48 dark:bg-zinc700'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

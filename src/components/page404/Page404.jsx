import { Link } from 'react-router-dom'

export const Page404 = () => {
  return (
    <main className='bg404 h-screen w-full'>
      <div className='flexCenter flex-col h-full bg-bg404Dark'>
        <p className='text-center text-white font-black mb-8 text-xl sm:text-3xl lg:text-5xl'>
          Page not found, please visit us again.
        </p>
        <span className='bg-gradientButtonFilter font-bold py-2 px-5 rounded mb-16'>
          <Link to={'/'} className='cursor-pointer text-white hover:text-white'>
            Returning home
          </Link>
        </span>
        <h1 className=' text-white font-black text-[18vw] sm:text-[12vw] lg:text-[8vw]'>404</h1>
      </div>
    </main>
  )
}

import './RequestError.css'
import logoError from '../../assets/logoErrorData.png'
import { urlCurrent } from '../../routes/appRouter/helperRoutes'

export const RequestError = ({
  title = ' Ooops we are experiencing unexpected problems, try again later!',
}) => {
  const reloadError = () => window.location.assign(urlCurrent)

  return (
    <div className='flexCenter bg-bg404Dark hola fixed  w-full h-screen z-10 top-0 left-0'>
      <div className='bg-bgModal w-[95%]  rounded-2xl p-2 h-[440px]  sm:w-[60%] dark:bg-modalDark'>
        <h1 className='w-[80%] m-auto font-bold text-sm text-center text-zinc900 mt-12 sm:text-xl dark:text-white'>
          {title}
        </h1>
        <section className='error-container block '>
          <button className='bg-gradientButtonFilter text-xs w-36  flexCenter text-2xl gap-2 block mt-4 m-auto px-2 py-2 rounded bg-transparent text-white font-bold sm:text-xl'>
            <span onClick={reloadError}>HOME</span>
          </button>
          <img
            className='m-auto h-20 z-10 '
            src={logoError}
            alt='oops sorry there was an error'
          />
          <h1 className='mt-12'>503</h1>
        </section>
      </div>
    </div>
  )
}

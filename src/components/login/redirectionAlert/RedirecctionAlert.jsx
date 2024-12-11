import logo from '../../../assets/logoNeefter.png'
import logoWhite from '../../../assets/logoNeefterLights.png'
import { Spinner } from '../../sppiner/Sppiner'
export const RedirecctionAlert = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-bg404Dark w-full z-20 h-screen flexCenter flex-col dark:text-white'>
      <div className='flexCenter bg-bgModal rounded flex-col w-[50%] h-[60%] dark:bg-modalDark'>
        <img
          className='block w-[60%] animate__animated animate__flash animate__infinite animate__slower hidden dark:block'
          src={logo}
          alt='logo of Neefter'
        />
        <img
          className='block w-[60%] animate__animated animate__flash animate__infinite animate__slower dark:hidden'
          src={logoWhite}
          alt='logo of Neefter'
        />
        <h1 className='text-xs text-center mt-5 sm:mt-0 sm:text-base'>
          We are confirming Your user is waiting a few seconds
        </h1>
        <div className='flexCenter mt-8 gap-4'>
          <h2>Redirecting</h2>
          <Spinner w={6} h={6} />
        </div>
      </div>
    </div>
  )
}

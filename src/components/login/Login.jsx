import bgLogin from '../../assets/img-login.jpg'
import { FormLogin } from './formLogin/FormLogin'
export const Login = () => {
  return (
    <main className='bg-white dark:bg-create py-28'>
      <section className='flex w-[90%] m-auto rounded-3xl shadow-shadowFilters'>
        <div className='w-full py-10 px-5 rounded-3xl dark:bg-grayTopBar sm:rounded-l-3xl sm:py-16 sm:px-20 lg:w-[70%]'>
          <FormLogin />
        </div>
        <div className='hidden w-[30%] lg:block'>
          <img
            className='w-full lg:block rounded-r-3xl h-full'
            src={bgLogin}
            alt='background login'
          />
        </div>
      </section>
    </main>
  )
}

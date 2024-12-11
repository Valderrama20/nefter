import { Spinner } from 'flowbite-react'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../routes/auth/userContext'
import { checkUser, loginUser } from '../../../services/magic'
import { AccountsLogin } from '../accountsLogin/AccountsLogin'
import { RedirecctionAlert } from '../redirectionAlert/RedirecctionAlert'


export const FormLogin = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { setUser } = useContext(AuthContext)

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)
    if (!email) {
      setLoading(false)
      setError('Email is invalid')
      return
    }
    try {
      await loginUser(email, setUser)
      // await checkUser(setUser)
      setLoading(false)
    } catch (error) {
      setError('Unable to login')
      console.error(error)
    }
  }
  const handleEmailInputChange = event => {
    setEmail(event.target.value)
  }

  return loading ? (
    <RedirecctionAlert />
  ) : (
    <form onSubmit={handleSubmit}>
      <h1 className='text-center font-bold text-xl mb-4 lg:text-start sm:text-5xl dark:text-white '>
        Login Your Account
      </h1>
      <span className='block text-center text-xs text-grayWhite sm:text-start sm:text-lg dark:text-grayOpacity'>
        Most popular gaming digital nft market place
      </span>
      <input
        placeholder='Email'
        className='inputCreate my-8 sm:my-16'
        id='email'
        type='email'
        name='email'
        value={email}
        onChange={handleEmailInputChange}
      />
      <button
        type='submit'
        className='flexCenter gap-2 bg-white py-3 w-full m-auto rounded-full bg-gradientButtonFilter text-white font-bold text-base sm:py-5 sm:text-xl'
      >
        Sing In
        <span className='material-symbols-outlined text-base sm:text-xl'>
          send
        </span>
      </button>
      <div className='flexCenter mt-16'>
        <AccountsLogin />
      </div>
    </form>
  )
}

import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../routes/auth/userContext'
import { logOutUser } from '../../services/magic'
import { Spinner } from '../sppiner/Sppiner'

export const Logout = () => {
  const navigate = useNavigate()
  const [dropDown, setDropDow] = useState(false)
  const [loading, setLoading] = useState(false)
  const { setUser } = useContext(AuthContext)
  const handleLogout = async () => {
    try {
      setLoading(true)
      await logOutUser(setUser)
      navigate('/login')
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }
  return (
    <div className='relative '>
      {loading ? (
        <Spinner w={6} h={6} />
      ) : (
        <button
          className='bg-transparent'
          onClick={() => setDropDow(!dropDown)}
        >
          Logout
        </button>
      )}

      <div
        className={`${
          dropDown ? 'flex' : 'hidden'
        } animate__animated animate__backInDown animate__faster absolute z-30 items-center text-white gap-5  bg-gradientButtonFilter p-3 rounded-l-md cursor-pointer top-8 left-12 lg:-left-44 lg:top-10`}
      >
        <span className='font-bold'>sign out ?</span>
        <span onClick={handleLogout} className='border p-1 px-2'>
          Yes
        </span>
        <span className='border p-1 px-2' onClick={() => setDropDow(false)}>
          No
        </span>
      </div>
    </div>
  )
}

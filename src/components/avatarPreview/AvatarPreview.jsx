import { AuthContext } from '../../routes/auth/userContext'
import { useContext } from 'react'
export const AvatarPreview = ({ width = 9, email }) => {
  const { user } = useContext(AuthContext)
  return (
    <>
      {user?.isLoggedIn && (
        <div
          className={`flexCenter cursor-pointer bg-bgPurple w-7 h-7 rounded-full text-white font-bold uppercase text-base sm:text-sm sm:w-${width} sm:h-${width} `}
        >
          {email?.slice(0, 1)}
        </div>
      )}
    </>
  )
}

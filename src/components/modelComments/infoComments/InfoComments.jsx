import { useContext } from 'react'
import { AuthContext } from '../../../routes/auth/userContext'
import { AvatarPreview } from '../../avatarPreview/AvatarPreview'
import { ImageFromAws } from '../../imageFromAws/ImageFromAws'


export const InfoComments = ({ title, imageInfo }) => {
  const { user } = useContext(AuthContext)
  return (
    <div className='flex gap-8 items-center'>
      <div
        className={`containerImageRounded flexCenter cursor-pointer bg-bgPurple w-10 h-10 rounded-full text-white font-bold uppercase text-base sm:text-2xl sm:w-16 sm:h-16 `}
      >
        <ImageFromAws image={user.avatarUrl} />
      </div>
      <p className='text-xs text-topBar font-bold sm:text-lg dark:text-white'>{title}</p>
    </div>
  )
}

import { useS3 } from '../../../hooks/useS3'
import { BanerLayout } from '../../banerLayout/BanerLayout'
import { useEffect } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { ImageFromAws } from '../../imageFromAws/ImageFromAws'
import styles from './index.module.css'
import { Spinner } from '../../sppiner/Sppiner'
import { ChangeAvatarUser } from '../changeAvatarUser/ChangeAvatarUser'
import { changeImageUserAction } from '../../../redux/actions/index.js'
import { useDispatch, useSelector } from 'react-redux'

export const HeaderProfile = ({ user }) => {
  const upload = useS3()
  const dispatch = useDispatch()
  const imageAvatar = useSelector(state => state.imageAvatar)
  const { image, loadingImage } = upload
  const bodyUser = { avatarUrl: image.fileKey }

  const { fetcher } = useFetch({
    url: `/user/${user.id}`,
    type: 'put',
    body: bodyUser,
  })
  useEffect(() => {
    if (image) {
      fetcher()
      dispatch(changeImageUserAction(image.url))
    }
  }, [image])
  return (
    <div>
      <div className='relative'>
        <BanerLayout />
        <div
          className={`${styles.containerImage} animate__animated animate__flipInY bg-bgPurple absolute flexCenter w-28 h-28 rounded-full text-white font-bold uppercase top-20 left-8 sm:top-28 sm:w-36 sm:h-36 lg:top-16 lg:left-16 lg:w-56 lg:h-56`}
        >
          {loadingImage ? (
            <Spinner w={16} h={16} />
          ) : imageAvatar ? (
            <img
              src={imageAvatar}
              alt={`Avatar ${user?.email}`}
              className='object-cover'
            />
          ) : (
            // user?.email?.slice(0, 1)
            <ImageFromAws image={user?.avatarUrl} />
          )}

          <ChangeAvatarUser user={user} upload={upload} />
        </div>
      </div>
    </div>
  )
}

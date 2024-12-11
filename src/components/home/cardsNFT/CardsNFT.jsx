import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../routes/auth/userContext'
import { FavoriteCollection } from '../../collections/favoriteCollection/FavoriteCollection'
import { ImageFromAws } from '../../imageFromAws/ImageFromAws'
import imageDefault from '../../../assets/imageDefault.png'
import styles from './CardsNFT.module.css'
import { useSelector } from 'react-redux'

export const CardsNFT = ({ data, deleteCard }) => {
  const { user } = useContext(AuthContext)
  const imageAvatar = useSelector(state => state.imageAvatar)

  const isFavorite = !data?.Favorites
    ? true
    : data?.Favorites.length
    ? true
    : false

  return (
    <div
      className={`relative shadow-cardCollection flex flex-col cursor-pointer border border-cardCollection py-5 px-2 w-[300px] rounded-[30px] text-center dark:bg-grayTopBar `}
    >
      {user?.isLoggedIn && (
        <div
          className={`  ${styles.imageContainerUser} flexCenter absolute top-0 right-0 w-16 h-16 bg-white rounded-tr-[30px] rounded-bl-[30px] z-10 shadow-cardCollection dark:bg-grayTopBar`}
        >
          {data?.UserId === user?.id ? (
            imageAvatar ? (
              <img
                src={imageAvatar}
                alt={`avatar ${user?.email}`}
                className='w-full h-full rounded-full object-cover'
              />
            ) : (
              <ImageFromAws image={user?.avatarUrl} />
            )
          ) : (
            <FavoriteCollection
              id={data?.id}
              itIsFavorite={isFavorite}
              deleteCard={deleteCard}
            />
          )}
        </div>
      )}

      <Link to={`/collectionDetails/${data?.id}`}>
        <div className={`${styles.imageContainer}`}>
          <ImageFromAws image={data?.coverImage?.medium || imageDefault} />
        </div>

        <div className='mx-1.5'>
          <h3
            title={data?.name}
            className='text-lg font-bold mb-5 truncate dark:text-white'
          >
            {data?.name}
          </h3>
          {data?.User && (
            <div className='flex gap-2 items-center my-2.5'>
              <div
                className={` ${styles.imageContainerUser} flexCenter cursor-pointer bg-bgPurple rounded-full text-white font-bold uppercase text-base text-sm w-12 h-12 `}
              >
                <ImageFromAws
                  image={data?.User?.avatarUrl}
                  email={data?.User.email}
                />
              </div>

              <div className='flex flex-col w-[80%]'>
                {data.User?.firstName && data.User?.lastName ? (
                  <span
                    className='text-start font-bold text-sm mb-1 dark:text-white'
                    title={`${data.User?.firstName} ${data.User?.lastName}`}
                  >{`${data.User?.firstName} ${data.User?.lastName}`}</span>
                ) : (
                  <span
                    title={data.User?.email}
                    className='text-start m-0 font-bold text-sm mb-1 dark:text-white'
                  >
                    {data.User?.email}
                  </span>
                )}
                <span className='text-start text-xs dark:text-white'>
                  Creator
                </span>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

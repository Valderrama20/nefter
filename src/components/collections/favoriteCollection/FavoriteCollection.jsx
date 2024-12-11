import { useState, useContext } from 'react'
import {
  handleAlertErrorData,
  handleAlertSuccesData,
} from '../../../alerts/alerts'
import { useFetch } from '../../../hooks/useFetch'
import { AuthContext } from '../../../routes/auth/userContext'

export const FavoriteCollection = ({ id, itIsFavorite, deleteCard }) => {
  const { user } = useContext(AuthContext)
  const [isFavorite, setIsFavorite] = useState(itIsFavorite)
  const [animationClick, setAnimationClick] = useState(false)

  const bodyPostFavorite = {
    CollectionId: id,
  }

  const bodyDeleteFavorite = {
    collectionId: id,
  }

  const { fetcher: fetcherFavorite } = useFetch({
    url: '/favorite',
    type: 'post',
    body: bodyPostFavorite,
  })
  const { fetcher: FetcherDelete } = useFetch({
    url: '/favorite',
    type: 'delete',
    body: bodyDeleteFavorite,
  })
  const handleActionFavorite = () => {
    setIsFavorite(!isFavorite)
    if (!isFavorite) {
      setAnimationClick('isAnimatedFalse')
      fetcherFavorite()
      handleAlertSuccesData()
      return
    }
    deleteCard && deleteCard(id)
    setAnimationClick('isAnimated')
    FetcherDelete()
    handleAlertErrorData()
  }
  return (
    user?.isLoggedIn && (
      <i
        onClick={handleActionFavorite}
        className={`bi bi-heart-fill text-xl animate__animated ${
          animationClick === 'isAnimated' && 'animate__rollIn'
        } 
      ${
        animationClick === 'isAnimatedFalse' &&
        'animate__zoomInUp animate__faster'
      }  
      ${isFavorite ? 'text-red500' : 'text-gray400 dark:text-white '}`}
      ></i>
    )
  )
}

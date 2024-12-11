import { useContext, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { AuthContext } from '../../routes/auth/userContext'
import imageDefault from '../../assets/imageDefault.png'

export const ImageFromAws = ({ image, email }) => {
  const { user } = useContext(AuthContext)

  const { fetcher: imageFetcher, data: coverImageUrl } = useFetch({
    url: `/upload/getFile/${image}`,
  })

  useEffect(() => {
    image && !image.includes('/imageDefault') && imageFetcher()
  }, [])

  return (
    <>
      {image ? (
        <img
          src={coverImageUrl || imageDefault}
          // src={data.coverImage.medium}
          className='w-full h-full object-cover'
          alt={'avatar'}
        />
      ) : (
        <p>{!email ? user?.email?.slice(0, 1) : email?.slice(0, 1)}</p>
      )}
    </>
  )
}

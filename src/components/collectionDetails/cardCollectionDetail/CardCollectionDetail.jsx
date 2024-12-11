import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import styles from './index.module.css'
import hooks from '../../../hooks/smallHooks'

import { SKDetailCollection } from '../../../skeletons/skDetailCollection/SKDetailCollection'
import { RequestError } from '../../requestError/RequestError'
import { AvatarPreview } from '../../avatarPreview/AvatarPreview'
import { ImageFromAws } from '../../imageFromAws/ImageFromAws'
export const CardCollectionDetail = () => {
  const { id } = useParams()

  const { fetcher, data, loading, error } = useFetch({
    url: `/collection/${id}`,
  })
  console.log(data, 'details')

  useEffect(() => {
    fetcher()
  }, [id])

  return (
    <section className='bg-white text-black dark:text-white dark:bg-bgDetail'>
      {loading && <SKDetailCollection />}
      {error && (
        <RequestError title='Ooops, sorry, the collection you are looking for does not exist!' />
      )}
      {data && !loading && (
        <div className='block m-auto w-full py-16 w-[90%] lg:flex'>
          <div
            className={`${styles.containerImage} mr-16 w-full m-auto lg:w-2/5`}
          >
            <ImageFromAws image={data?.coverImage?.medium} />
          </div>

          <div className='mt-12 w-full lg:w-3/5 lg:mt-0'>
            <h2 className='text-2xl font-bold mb-5'>{data?.name}</h2>
            <p className='text-black text-justify dark:text-grayOpacity'>
              {data?.description}
            </p>
            <div className='sm:flex justify-between items-center mt-10 lg:block lg:mt-0'>
              <div
                className={`${styles.containerImageUser} flex items-center gap-2 my-8`}
              >
                {data?.User?.avatarUrl ? (
                  <ImageFromAws image={data?.User?.avatarUrl} />
                ) : (
                  <div
                    className={`flexCenter bg-bgPurple w-10 h-10 rounded-full text-white font-bold uppercase text-base sm:text-lg sm:w-16 sm:h-16 `}
                  >
                    {data?.User?.email?.slice(0, 1)}
                  </div>
                )}

                <div className='w-[90%] truncate sm:w-full'>
                  {data.User?.firstName && data.User?.lastName ? (
                    <span className='font-bold'>{`${data.User?.firstName} ${data.User?.lastName}`}</span>
                  ) : (
                    <span className='font-bold'>{data.User?.email}</span>
                  )}

                  <p>creator</p>
                </div>
              </div>
              <div className='flex gap-20 mt-16 sm:mt-0'>
                <div>
                  <p className='font-bold'>Max Supply: </p>
                  <p className='mb-5 text-black dark:text-grayOpacity'>
                    {data?.maxSupply} Total
                  </p>
                  <p className='font-bold'>Mint Price:</p>
                  <p className='text-black dark:text-grayOpacity'>
                    {data?.mintPrice}
                  </p>
                </div>

                <div>
                  <p className='font-bold'>Mint Date:</p>
                  <p className='mb-5 text-black dark:text-grayOpacity'>
                    {hooks.newDate(data?.mintDate)}
                  </p>
                  <p className='font-bold'>Presale Date:</p>
                  <p className='text-black dark:text-grayOpacity'>
                    {hooks.newDate(data?.presaleDate)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

import { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useFetch } from '../../../hooks/useFetch'
import { routes } from '../../../routes/appRouter/helperRoutes'
import { AuthContext } from '../../../routes/auth/userContext'
import { ImageFromAws } from '../../imageFromAws/ImageFromAws'
import { CardComment } from '../cardComment/CardComment'


export const PostComment = ({ type }) => {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const [errorValidate, setErrorValidate] = useState(false)
  const [newComments, setNewsComments] = useState([])
  const [comment, setComment] = useState('')

  const postCommentCollection = {
    CollectionId: id,
    comment: comment.replace(/^\s+|\s+$|\s+(?=\s)/g, ''),
  }
  const postCommentEvent = {
    EventId: id,
    comment: comment.replace(/^\s+|\s+$|\s+(?=\s)/g, ''),
  }

  var today = new Date()
  var createDateComment = today.toLocaleDateString('en-US')

  const typeTimeReal = {
    createdAt: createDateComment,
    User: {
      avatarUrl: user?.avatarUrl,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    },
    comment: comment,
  }
  const { fetcher } = useFetch({
    url: '/comment',
    type: 'post',
    body: type === 'collection' ? postCommentCollection : postCommentEvent,
  })

  const handleChangeComment = ({ target }) => {
    if (target.value.length < 3) setErrorValidate(true)
    else setErrorValidate(false)
    setComment(target.value)
  }

  const handlePostComment = () => {
    if (user?.isLoggedIn) {
      if (comment.length < 3) return setErrorValidate(true)
      setNewsComments([typeTimeReal, ...newComments])
      fetcher()
      setErrorValidate(false)
      setComment('')
    } else {
      navigate(routes.login)
    }
  }

  return (
    <>
      <div className='w-full flexCenter py-5 gap-2 sm:gap-8'>
        <Link to={routes.userProfile}>
          <div
            className={`containerImageRounded flexCenter cursor-pointer bg-bgPurple w-10 h-10 rounded-full text-white font-bold uppercase text-base sm:text-2xl sm:w-16 sm:h-16 `}
          >
            <ImageFromAws image={user.avatarUrl} />
          </div>
        </Link>
        <input
          className='bg-whiteInputs text-black border-borderInput border w-full h-full p-4 rounded-md text-sm placeholder:text-sm sm:placeholder:text-base placeholder:text-gray300 placeholder:capitalize placeholder:leading-5 text-lg font-bold dark:text-white dark:bg-bgSelect dark:placeholder:text-grayWhite'
          placeholder='Write a comment'
          value={comment}
          onChange={handleChangeComment}
        />

        <button
          type='submit'
          className='flexCenter gap-2 bg-gradientButtonFilter text-xs py-3 px-2 rounded text-white font-bold cursor-pointer sm:p-3 sm:text-base'
          value='Comment'
          onClick={handlePostComment}
        >
          <span className='hidden sm:block'>Comment</span>
          <span className='material-symbols-outlined text-base'>send</span>
        </button>
      </div>
      {errorValidate && (
        <div className='flex items-center gap-3'>
          <span className='text-red500 text-xs pl-0 sm:text-sm  sm:pl-3'>
            The minimum number of characters allowed is 2 two
          </span>
          <span className='material-symbols-outlined text-lg text-red500'>
            warning
          </span>
        </div>
      )}
      {/* {data && (
        <ContainerComments data={[data]} error={error} loading={loading} />
      )} */}
      {newComments?.map((comment, index) => (
        <CardComment comment={comment} key={index} />
      ))}
    </>
  )
}

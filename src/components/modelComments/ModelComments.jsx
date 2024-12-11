import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getCommentCollectionAction, getCommentMore } from '../../redux/actions'
import { ContainerComments } from './containerComments/ContainerComments'
import { PostComment } from './postComment/PostComment'

export const ModelComments = ({ type }) => {
  const { id } = useParams()
  const [page, setPage] = useState(1)

  // console.log(page)
  const dispatch = useDispatch()
  const commentCollection = useSelector(state => state.commentCollection)
  const loadingComment = useSelector(state => state.loadingComment)
  const errorComment = useSelector(state => state.errorComment)
  const commentsMore = useSelector(state => state.commentsMore)

  const isCollection = type === 'collection'

  const getDataOfType = isCollection
    ? commentCollection?.comments
    : commentCollection?.events

  // const moreCommentData = isCollection ? data?.comments : data?.events

  const handleMoreComments = () => {
    setPage(page + 1)
    dispatch(getCommentMore(type, id, page + 1))
  }

  useEffect(() => {
    dispatch(getCommentCollectionAction(type, id))
  }, [id])
  // console.log(data, 'data')
  return (
    <section className='bg-white m-0 py-10 dark:bg-bgDetail'>
      <div className=' mx-auto p-5 border-2 border-borderInput sm:w-[90%] lg:px-10'>
        <h3 className='font-bold mb-9 text-topBar pl-5 text-xl dark:text-whiteSmall sm:text-2xl'>
          People Comments
        </h3>
        <PostComment type={type} />
        <ContainerComments
          data={getDataOfType}
          loading={loadingComment}
          errorComment={errorComment}
        />
        {commentsMore.length ? (
          <ContainerComments
            data={commentsMore}
            loading={loadingComment}
            errorComment={errorComment}
            isMoreComments={true}
          />
        ) : null}

        {page < commentCollection?.totalPages && (
          <div
            className='flex gap-3 items-center cursor-pointer'
            onClick={handleMoreComments}
          >
            <span className='w-full block text-white font-bold text-fuchsia500 text-end text-sm sm:text-lg'>
              load more comments
            </span>
            <span className='material-symbols-outlined  text-2xl mt-1 text-fuchsia500 sm:text-3xl'>
              keyboard_arrow_down
            </span>
          </div>
        )}
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  handleAlertConfirmed,
  handleAlertError,
  handleAlertLoading,
  handleAlertSuccess,
} from '../../../alerts/alerts'
import { useFetch } from '../../../hooks/useFetch'
import {
  deleteMoreCommentsAction,
  deleteRealTimeCommentCollectionAction,
} from '../../../redux/actions'
import { UpdateComment } from '../updateComment/UpdateComment'

export const ActionsComment = ({ id, comment, isMoreComments = false }) => {
  const [openDrop, setOpenDrop] = useState(false)
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const {
    fetcher: fetcherDelete,
    data,
    loading,
    error,
  } = useFetch({
    url: `/comment/${id}`,
    type: 'delete',
  })
  const handleDeleteRealTime = () => {
    !isMoreComments
      ? dispatch(deleteRealTimeCommentCollectionAction(id))
      : dispatch(deleteMoreCommentsAction(id))
  }
  useEffect(() => {
    if (data) {
      handleAlertSuccess({ handleSucces: handleDeleteRealTime })
    }
    error && handleAlertError()
  }, [data, error])

  const handleDeleteComment = () => {
    fetcherDelete()
  }

  const openConfirmationDeleteAlert = () => {
    handleAlertConfirmed({ action: handleDeleteComment })
    setShow(false)
  }

  return (
    <div>
      {loading && handleAlertLoading()}
      <span
        onClick={() => setOpenDrop(!openDrop)}
        onBlur={() => setOpenDrop(false)}
        className='material-symbols-outlined relative cursor-pointer dark:text-white'
      >
        settings
      </span>
      <div
        className={`${
          openDrop ? 'block' : 'hidden'
        } absolute top-6 right-5  bg-gradientButtonFilter text-white`}
      >
        <div
          onClick={() => setShow(true)}
          className='uppercase border-t px-8 flex items-center gap-2 py-1 cursor-pointer'
        >
          <span>Update</span>
          <span className='material-symbols-outlined text-base'>cached</span>
        </div>
        <div
          onClick={openConfirmationDeleteAlert}
          className='uppercase border-t px-8 flex items-center gap-2 py-1 cursor-pointer'
        >
          <span>Delete</span>
          <span className='material-symbols-outlined text-base'>delete</span>
        </div>

        <UpdateComment
          show={show}
          setShow={setShow}
          idComment={id}
          comment={comment}
          isMoreComments={isMoreComments}
        />
      </div>
    </div>
  )
}

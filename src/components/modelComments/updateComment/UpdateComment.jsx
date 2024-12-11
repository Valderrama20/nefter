import { Label, Modal } from 'flowbite-react'
import React, { useState, useEffect } from 'react'
import {
  updateMoreCommentsAction,
  updateRealTimeCommentCollectionAction,
} from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import {
  handleAlertConfirmed,
  handleAlertError,
  handleAlertLoading,
  handleAlertSuccess,
} from '../../../alerts/alerts'
import { useFetch } from '../../../hooks/useFetch'

export const UpdateComment = ({
  show,
  setShow,
  idComment,
  comment,
  isMoreComments,
}) => {
  const dispatch = useDispatch()
  const [newComment, setNewComment] = useState(comment)

  const { fetcher, data, loading, error } = useFetch({
    url: `/comment/${idComment}`,
    type: 'put',
    body: { comment: newComment },
  })

  const handleUpdateComment = () => {
    // handleAlertLoading()
    fetcher()
    setShow(false)
  }
  const handleUpdateRealTime = () => {
    !isMoreComments
      ? dispatch(updateRealTimeCommentCollectionAction(idComment, newComment))
      : dispatch(updateMoreCommentsAction(idComment, newComment))
    setShow(false)
  }
  ///cambiar
  useEffect(() => {
    if (data) {
      handleAlertSuccess({ handleSucces: handleUpdateRealTime })
    }
    error && handleAlertError()
  }, [data, error])

  const openConfirmationUpdateAlert = () => {
    handleAlertConfirmed({ action: handleUpdateComment })
  }
  return (
    <React.Fragment>
      {loading && handleAlertLoading()}

      <Modal
        show={show}
        size='md'
        popup={true}
        onClose={() => setShow(!show)}
        className='bg-navBarBlack'
      >
        <Modal.Header className='dark:bg-bgDetail' />
        <Modal.Body className='pt-2 dark:bg-mobileNav'>
          <div className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
            <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
              Update Comment
            </h3>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email' value='Your Comment' />
              </div>
              <input
                id='email'
                placeholder='Modify your comment'
                required={true}
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                className='inputCreate'
              />
            </div>
            <button
              className='bg-gradientButtonFilter text-white font-bold py-2 px-3 rounded'
              onClick={openConfirmationUpdateAlert}
            >
              Modificar
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}

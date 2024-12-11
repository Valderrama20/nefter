import { useContext } from 'react'
import hooks from '../../../hooks/smallHooks'
import { AuthContext } from '../../../routes/auth/userContext'
import { ActionsComment } from '../actionsComment/ActionsComment'
import { ImageFromAws } from '../../imageFromAws/ImageFromAws'


export const CardComment = ({ comment, isMoreComments = false }) => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <div className='flex border-t gap-3 py-5 border-borderInput relative sm:gap-8'>
        <div
          className={`containerImageRounded flexCenter cursor-pointer bg-bgPurple w-10 h-10 rounded-full text-white font-bold uppercase text-base sm:text-2xl sm:w-16 sm:h-16 `}
        >
          <ImageFromAws
            image={comment?.User?.avatarUrl}
            email={comment?.User?.email}
          />
        </div>
        {/* {comment.User?.avatarUrl ? (
          <img
            src={comment?.User?.avatarUrl}
            alt='avatar user'
            className='w-10 rounded-full'
          />
        ) : (
          <div
            className={`flexCenter bg-bgPurple w-10 h-10 rounded-full text-white font-bold uppercase text-base sm:text-lg sm:w-16 sm:h-16 `}
          >
            {comment?.User?.email?.slice(0, 1)}
          </div>
        )} */}

        <div>
          <div className='mb-5 sm:ml-0 sm:mb-0'>
            {comment?.User?.firstName && comment?.User?.lastName ? (
              <h4 className='text-topBar font-bold mb-1 text-base sm:text-[18px] dark:text-whiteSmall'>
                {`${comment?.User?.firstName} ${comment?.User?.lastName}`}
              </h4>
            ) : (
              <h4 className='text-topBar font-bold mb-1 text-base sm:text-[18px] dark:text-whiteSmall'>
                {comment?.User?.email}
              </h4>
            )}

            <span className='text-grayWhite block text-sm mb-2 black:text-whitexs sm:text-[14px]'>
              {hooks.newDate(comment?.createdAt)}
            </span>
          </div>
          <p className='text-grayWhite text-sm mb-3 text-justify sm:text-base dark:text-grayOpacity'>
            {comment?.comment}
          </p>
          {/* <span className='flex items-center gap-2 font-bold text-whitePurple text-sm sm:text-[18px] dark:text-whiteSmall'>
                  Repli
                  <span className='material-symbols-outlined text-sm sm:text-lg'>
                    arrow_forward
                  </span>
                </span> */}
        </div>
        {comment?.id && user.id === comment.UserId && (
          <div className='absolute right-0'>
            <ActionsComment
              id={comment?.id}
              comment={comment?.comment}
              isMoreComments={isMoreComments}
            />
          </div>
        )}
      </div>
    </>
  )
}

import { SkComment } from '../../../skeletons/skComment/SkComment'
import { CardComment } from '../cardComment/CardComment'
import { InfoComments } from '../infoComments/InfoComments'

export const ContainerComments = ({
  data,
  loading,
  error,
  isMoreComments = false,
}) => {
  return (
    <>
      {loading && <SkComment />}
      {data && !data?.length && (
        <InfoComments
          title='Be the first to comment, tell the creator your doubts and questions'
          imageInfo={
            'https://lh3.googleusercontent.com/ogw/AAEL6sg5BUkG29_6DgwqgfMcxBrJpPh0oB09ps3uKiE3Tw=s32-c-mo'
          }
        />
      )}
      {error && (
        <InfoComments title='Ooops, the comments could not be loaded, try again later!' />
      )}
      {data &&
        !loading &&
        data.map(comment => (
          <CardComment
            isMoreComments={isMoreComments}
            key={comment?.id}
            comment={comment}
          />
        ))}
    </>
  )
}

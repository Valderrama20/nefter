export const deleteRealTimeCommentCollection = (comments, id) => {
  const commentsType = comments?.comments || comments?.events || comments
  const commentsTypeResult = comments?.comments
    ? 'comments'
    : comments?.events
    ? 'events'
    : null
  const filterComments = commentsType.filter(collection => collection.id !== id)
  if (commentsTypeResult)
    return { ...comments, [commentsTypeResult]: [...filterComments] }

  return filterComments
}

export const UpdateRealTimeCommentCollection = (comments, id, newComment) => {
  const commentsType = comments?.comments || comments?.events || comments
  const commentsTypeResult = comments?.comments
    ? 'comments'
    : comments?.events
    ? 'events'
    : null
  const commentUpdate = commentsType.find(collection => collection.id === id)

  commentUpdate.comment = newComment
  if (commentsTypeResult)
    return {
      ...comments,
      [commentsTypeResult]: [...comments[commentsTypeResult]],
    }
  return [...comments]
}

import axios from "axios";
import { URL_FETCH } from "../../hooks/useFetch";

import { DATA_USER_PROFILE, DELETE_MORE_COMMENTS, DELETE_REAL_TIME_COMMENT_COLLECTION, ERROR_COMMENTS, GET_COMMENT_COLLECTION, GET_MORE_COMMENTS, IMAGE_AVATAR_USER, LAODING_COMMENTS, UPDATE_MORE_COMMENTS, UPDATE_REAL_TIME_COMMENT_COLLECTION } from "../actionsType";

const isCollection = (type) => type === 'collection'
// Comments
export const getCommentCollectionAction = (type, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LAODING_COMMENTS, payload: true })
      const result = await axios.get(
        `${URL_FETCH}/comment/${type}/${id}/?size=4`
      );
      // console.log(result, 'comment')


      dispatch({ type: GET_COMMENT_COLLECTION, payload: result.data });
    } catch (error) {
      dispatch({ type: ERROR_COMMENTS, payload: true })
      console.log(error);
    }
    dispatch({ type: LAODING_COMMENTS, payload: false })
  };
}

export const getCommentMore = (type, id, page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LAODING_COMMENTS, payload: true })
      const result = await axios.get(
        `${URL}/comment/${type}/${id}/?page=${page}&size=4`
      );
      console.log(`${URL_FETCH}/comment/${type}/${id}/?page=${page}&size=4`)

      dispatch({ type: GET_MORE_COMMENTS, payload: isCollection(type) ? result.data.comments : result.data.events });
    } catch (error) {
      dispatch({ type: ERROR_COMMENTS, payload: true })
      console.log(error);
    }
    dispatch({ type: LAODING_COMMENTS, payload: false })
  };
}

export const deleteRealTimeCommentCollectionAction = (id) => {
  return { type: DELETE_REAL_TIME_COMMENT_COLLECTION, payload: id }
}

export const updateRealTimeCommentCollectionAction = (id, newComment) => {
  return { type: UPDATE_REAL_TIME_COMMENT_COLLECTION, id, newComment }
}

export const deleteMoreCommentsAction = (id) => {
  return { type: DELETE_MORE_COMMENTS, payload: id }
}

export const updateMoreCommentsAction = (id, newComment) => {
  return { type: UPDATE_MORE_COMMENTS, id, newComment }
}

// user Profile
export const changeImageUserAction = (image) => {
  return { type: IMAGE_AVATAR_USER, payload: image }
}

export const changeDataUserAction = (data) => {
  return { type: DATA_USER_PROFILE, payload: data }
}

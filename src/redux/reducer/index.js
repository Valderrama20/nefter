import { deleteRealTimeCommentCollection, UpdateRealTimeCommentCollection } from "../../helperAction/helperAction";
import { DATA_USER_PROFILE, DELETE_MORE_COMMENTS, DELETE_REAL_TIME_COMMENT_COLLECTION, ERROR_COMMENTS, GET_COMMENT_COLLECTION, GET_MORE_COMMENTS, IMAGE_AVATAR_USER, LAODING_COMMENTS, UPDATE_MORE_COMMENTS, UPDATE_REAL_TIME_COMMENT_COLLECTION } from "../actionsType";



const initialState = {
  imageAvatar: '',
  dataUserProfile: '',
  commentCollection: [],
  commentsMore: [],
  loadingComment: true,
  errorComment: false,
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //USER PROFILE
    case DATA_USER_PROFILE: {
      return {
        ...state,
        dataUserProfile: action.payload
      };
    }

    case IMAGE_AVATAR_USER: {
      return {
        ...state,
        imageAvatar: action.payload
      };
    }
    //COMMENTS
    case GET_COMMENT_COLLECTION: {
      return {
        ...state,
        commentCollection: action.payload
      };
    }
    case GET_MORE_COMMENTS: {
      return {
        ...state,
        commentsMore: [...state.commentsMore, ...action.payload]
      };
    }
    case LAODING_COMMENTS: {
      return {
        ...state,
        loadingComment: action.payload
      }
    }
    case ERROR_COMMENTS: {
      return {
        ...state,
        errorComment: action.payload
      }
    }
    case DELETE_REAL_TIME_COMMENT_COLLECTION: {
      return {
        ...state,
        commentCollection: deleteRealTimeCommentCollection(state.commentCollection, action.payload)
      }
    }
    case UPDATE_REAL_TIME_COMMENT_COLLECTION: {
      return {
        ...state,
        commentCollection: UpdateRealTimeCommentCollection(state.commentCollection, action.id, action.newComment)
      }
    }
    case DELETE_MORE_COMMENTS: {
      return {
        ...state,
        commentsMore: deleteRealTimeCommentCollection(state.commentsMore, action.payload)
      }
    }
    case UPDATE_MORE_COMMENTS: {
      return {
        ...state,
        commentsMore: UpdateRealTimeCommentCollection(state.commentsMore, action.id, action.newComment)
      }
    }

    default: return state
  }
}